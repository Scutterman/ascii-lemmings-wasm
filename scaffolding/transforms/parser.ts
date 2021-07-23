import { ParserBase } from "./parserBase"

enum MapSection {
  None,
  Metadata,
  Map,
  DefaultAnimation,
  CustomAnimation
}

class LevelMetadata {
  constructor (
    public name: string,
    public number: number,
    public code: string,
    public difficulty: string
  ) {}
}

export class Parser extends ParserBase {
  private imports = ''
  private levelShell: string = ''
  private lmd: string = 'const mapDetail = new LevelMapDetail([])\n'
  private currentSection: MapSection = MapSection.None

  // --- level selection
  private levelByCode: string = ''
  private levelByCodeImports: string = ''
  private availableLevels: Map<string, Map<number, LevelMetadata>> = new Map<string, Map<number, LevelMetadata>>()
  
  private reset(): void {
    this.currentSection = MapSection.None
    this.levelShell = ''
    this.imports = ''
    this.imports += this.getImport('../types', ['LemmingGift'])
    this.imports += this.getImport('../maps/types', ['LevelMapDetail', 'SingleCharacterAnimation'])
    this.imports += this.getImport('../levels/level', ['Level'])

    this.lmd = 'const mapDetail = new LevelMapDetail([])\n'  
  }

  private addLevelSelectStatement(levelName: string, code: string): void {
    this.levelByCodeImports += this.getImport('./' + levelName, ['Level_' + levelName])
    this.levelByCode += 'else if (code == "' + code + '") { return new Level_' + levelName + '() }\n'
  }

  public parseGeneratedMap(generatedMap: string, difficulty: string, levelNumber: number, levelCode: string, toSpawn: number, forSuccess: number): string {
    this.reset()
    const mapLines = generatedMap.replaceAll('\r\n', '\n').split('\n')
    for (let i = 0; i < mapLines.length; i++) {
      const line = mapLines[i].trim()

      if (line.length === 0) {
        continue
      }

      if (line.startsWith('//')) {
        const instructions = line.substr(2).split('::')

        if (instructions.length !== 2) {
          continue
        }

        if (instructions[0] != 'EDITORHINT') {
          continue
        }
        
        switch (true) {
          case instructions[1] == 'MAP_METADATA':
            this.currentSection = MapSection.Metadata
          break
          case instructions[1] == 'MAP_START':
            this.currentSection = MapSection.Map
          break
          case instructions[1] == 'DEFAULT_ANIMATIONS':
            this.currentSection = MapSection.DefaultAnimation
          break
          case instructions[1] == 'CUSTOM_ANIMATIONS':
            this.currentSection = MapSection.CustomAnimation
          break
        }

        continue
      }
      
      switch (true) {
        case this.currentSection == MapSection.Metadata:
          this.addAvailableLevel(new LevelMetadata(line, levelNumber, levelCode, difficulty))
        break
        case this.currentSection == MapSection.Map:
          this.addMapLine(line)
        break
        case this.currentSection == MapSection.DefaultAnimation:
          this.addDefaultAnimation(line)
        break
        case this.currentSection == MapSection.CustomAnimation:
          this.currentSection = MapSection.CustomAnimation
          this.addCustomAnimation(line)
        break
      }
    }

    const tag = `${ difficulty }_${ levelNumber.toString() }_${ levelCode }`
    this.addLevelSelectStatement(tag, levelCode)

    this.levelShell = `
      export class Level_${ tag } extends Level {\n
        constructor() {
          super('${ tag }', '${ difficulty }', ${ toSpawn.toString() }, ${ forSuccess.toString() }, mapDetail)
      
          this.setSkillQuantity(LemmingGift.Shovel, u8.MAX_VALUE)
          this.setSkillQuantity(LemmingGift.Block, 10)
          this.setSkillQuantity(LemmingGift.Bomb, 10)
          this.setSkillQuantity(LemmingGift.BrickSack, u8.MAX_VALUE)
          this.setSkillQuantity(LemmingGift.ClimbingBoots, 10)
          this.setSkillQuantity(LemmingGift.Hammer, 10)
          this.setSkillQuantity(LemmingGift.Pickaxe, 10)
          this.setSkillQuantity(LemmingGift.Umbrella, 10)
        }
      }
    `
    
    return this.imports + this.levelShell + this.lmd
  }

  private addAvailableLevel(meta: LevelMetadata): void {
    if (!this.availableLevels.has(meta.difficulty)) {
      this.availableLevels.set(meta.difficulty, new Map<number, LevelMetadata>())
    }

    this.availableLevels.get(meta.difficulty).set(meta.number, meta)
  }
  
  private addMapLine(generatedMapLine: string): void {
    this.lmd += 'mapDetail.tiles.push("' + generatedMapLine + '")\n'
  }
  
  private addDefaultAnimation(instruction: string): void {
    const data = instruction.split(',')
    const character = data[0]
    const animationListKey = data[1]
    this.lmd += 'mapDetail.defaultAnimations.set("' + character + '", "' + animationListKey + '")\n'
  }
  
  private addCustomAnimation(instruction: string): void {
    const data = instruction.split(',')
    const x = data[0]
    const y = data[1]
    const animationListKey = data[2]
    const key = x + ',' + y
    this.lmd += 'mapDetail.customAnimations.set("' + key + '", "' + animationListKey + '")\n'
  }

  public generateLevelSelectFile(): string {
    return this.levelByCodeImports +
      this.getImport('../levels/baseLevel', ['BaseLevel']) +
      'export function getLevelByCode(code: string): BaseLevel | null {\n' +
      ' if (false) { return null }\n' +
      this.levelByCode +
      'else { return null }' +
      '}\n'
  }

  public generateAvailableLevelFile(): string {
    let fileContents = '' +
      'class LevelMetadata {\n' +
      '  constructor (\n' +
      '    public name: string,\n' +
      '    public number: number,\n' +
      '    public code: string,\n' +
      '    public difficulty: string\n' +
      '  ) {}\n' +
      '}\n'

      let functionContents = '' +
        'export function getAvailableLevels(difficulty: string): LevelMetadata[] | null {\n' +
        ' if (false) { return null }\n'
      
      const difficulties = Array.from(this.availableLevels.keys())

      for (const difficulty of difficulties) {
        const levels = this.availableLevels.get(difficulty)
        const levelNumbers = Array.from(levels.keys())
        levelNumbers.sort()
        
        functionContents += 'else if (difficulty == "' + difficulty + '") { return availableLevels_' + difficulty + ' }\n'
        
        fileContents += 'const availableLevels_' + difficulty + ': LevelMetadata[] = []\n'
        for (const levelNumber of levelNumbers) {
          const level = levels.get(levelNumber)
          fileContents += 'availableLevels_' + difficulty + '.push(new LevelMetadata("' + level.name + '",' + level.number + ',"' + level.code + '","' + level.difficulty + '"))\n'
        }
      }

      functionContents += '' +
        'else { return null }' +
        '}\n'
      
      return fileContents + functionContents
  }
}
