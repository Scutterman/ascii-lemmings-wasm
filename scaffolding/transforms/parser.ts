import { getImport } from "./parserHelper"
import { MapParserBase, LevelMetadata } from '../../assembly/maps/mapParserBase'

export class Parser extends MapParserBase {
  private imports = ''
  private levelShell: string = ''
  private lmd: string = 'const mapDetail = new LevelMapDetail([])\n'
  
  // --- level selection
  private levelByCode: string = ''
  private levelByCodeImports: string = ''
  private availableLevels: Map<string, Map<number, LevelMetadata>> = new Map<string, Map<number, LevelMetadata>>()
  
  protected reset(): void {
    super.reset()
    this.levelShell = ''
    this.imports = ''
    this.imports += getImport('../types', ['LemmingGift'])
    this.imports += getImport('../maps/types', ['LevelMapDetail', 'SingleCharacterAnimation'])
    this.imports += getImport('../levels/level', ['Level'])
    this.imports += getImport('../maps/mapParserBase', ['LevelMetadata'])

    this.lmd = 'const mapDetail = new LevelMapDetail([])\n'  
  }

  private addLevelSelectStatement(levelName: string, code: string): void {
    this.levelByCodeImports += getImport('./' + levelName, ['Level_' + levelName])
    this.levelByCode += 'else if (code == "' + code + '") { return new Level_' + levelName + '() }\n'
  }

  public parseGeneratedMap(generatedMap: string, toSpawn: number, forSuccess: number): string {
    super.parseMap(generatedMap)

    const tag = `${ this.meta.difficulty }_${ this.meta.number.toString() }_${ this.meta.code }`
    this.addLevelSelectStatement(tag, this.meta.code)

    this.levelShell = `
      export class Level_${ tag } extends Level {\n
        constructor() {
          super('${ tag }', '${ this.meta.difficulty }', ${ toSpawn.toString() }, ${ forSuccess.toString() }, mapDetail)
      
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

  protected addAvailableLevel(meta: LevelMetadata): void {
    if (!this.availableLevels.has(meta.difficulty)) {
      this.availableLevels.set(meta.difficulty, new Map<number, LevelMetadata>())
    }

    this.availableLevels.get(meta.difficulty).set(meta.number, meta)

    this.lmd += 'mapDetail.meta = new LevelMetadata("' + meta.name + '",' + meta.number.toString() + ', "' + meta.code + '", "' + meta.difficulty + '")\n'
  }
  
  protected addMapLine(generatedMapLine: string): void {
    this.lmd += 'mapDetail.tiles.push("' + generatedMapLine + '")\n'
  }
  
  protected addDefaultAnimation(character: string, animationListKey: string): void {
    this.lmd += 'mapDetail.defaultAnimations.set("' + character + '", "' + animationListKey + '")\n'
  }
  
  protected addCustomAnimation(key: string, animationListKey: string): void {
    this.lmd += 'mapDetail.customAnimations.set("' + key + '", "' + animationListKey + '")\n'
  }

  public generateLevelSelectFile(): string {
    return this.levelByCodeImports +
      getImport('../levels/baseLevel', ['BaseLevel']) +
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
