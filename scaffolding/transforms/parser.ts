import { getImport } from "./parserHelper"
import { MapParserBase, LevelMetadata } from '../../shared/src'

export class Parser extends MapParserBase {
  private imports = ''
  private levelShell: string = ''
  private lmd: string = 'const mapDetail = new LevelMapDetail([])\n'
  
  // --- level selection
  private levelByCode: string = ''
  private levelByCodeImports: string = ''
  private availableLevels: Map<string, Map<number, LevelMetadata>> = new Map<string, Map<number, LevelMetadata>>()
  
  protected int(value: string): number {
    return parseInt(value, 10) & 0xff
  }

  protected reset(): void {
    super.reset()
    this.levelShell = ''
    this.imports = ''
    this.imports += getImport('../types', ['LemmingGift'])
    this.imports += getImport('../maps/types', ['LevelMapDetail', 'SingleCharacterAnimation'])
    this.imports += getImport('../levels/level', ['Level'])
    this.imports += getImport('../../shared/src/wasm-safe', ['LevelMetadata'])

    this.lmd = 'const mapDetail = new LevelMapDetail([])\n'  
  }

  private addLevelSelectStatement(levelName: string, code: string): void {
    this.levelByCodeImports += getImport('./' + levelName, ['Level_' + levelName])
    this.levelByCode += 'else if (code == "' + code + '") { return new Level_' + levelName + '() }\n'
  }

  public parseGeneratedMap(generatedMap: string, singleCharacterAnimations: Map<string, string>): string {
    super.parseMap(generatedMap, singleCharacterAnimations)

    const tag = `${ this.meta.difficulty }_${ this.meta.number.toString() }_${ this.meta.code }`
    this.addLevelSelectStatement(tag, this.meta.code)

    let skillValues: string[] = []
    const keys = Array.from(this.meta.skills.keys())
    for (const keyIndex in keys) {
      const key = keys[keyIndex]
      let value = this.meta.skills.get(key)
      if (value == null) { value = 0 }
      skillValues.push(`this.setSkillQuantity(LemmingGift.${ key }, ${ value.toString() })`)
    }

    this.levelShell = `
      export class Level_${ tag } extends Level {\n
        constructor() {
          super('${ tag }', '${ this.meta.difficulty }', ${ this.meta.numberOfLemmings.toString() }, ${ this.meta.numberOfLemmingsForSuccess.toString() }, mapDetail)
      
          ${ skillValues.join('\n') }
        }
      }
    `
    
    return this.imports + this.levelShell + this.lmd
  }

  protected addAvailableLevel(meta: LevelMetadata): void {
    let levels = this.availableLevels.get(meta.difficulty)
    if (levels == null) {
      levels = new Map<number, LevelMetadata>()
    }

    levels.set(meta.number, meta)
    this.availableLevels.set(meta.difficulty, levels)

    this.lmd += 'mapDetail.meta = new LevelMetadata("' + meta.name + '",' + meta.number.toString() + ', "' + meta.code + '", "' + meta.difficulty + '", "' + meta.textureGroup + '", ' + meta.numberOfLemmings.toString() + ', ' + meta.numberOfLemmingsForSuccess.toString() + ')\n'
  }
  
  protected addMapLine(generatedMapLine: string): void {
    this.lmd += 'mapDetail.tiles.push("' + generatedMapLine + '")\n'
  }
  
  protected addDefaultAnimation(character: string, animationListKey: string): void {
    console.log('adding default animation ' + character + ' ' + animationListKey)
    this.lmd += 'mapDetail.defaultAnimations.set("' + character + '", "' + animationListKey + '")\n'
  }
  
  protected addCustomAnimation(key: string, animationListKey: string): void {
    this.lmd += 'mapDetail.customAnimations.set("' + key + '", "' + animationListKey + '")\n'
  }

  protected addTrapTile(key: string, animationListKey: string): void {
    this.lmd += 'mapDetail.trapTiles.set("' + key + '", "' + animationListKey + '")\n'
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

      for (let i = 0; i < difficulties.length; i++) {
        const difficulty = difficulties[i]
        const levels = this.availableLevels.get(difficulty)
        if (levels == null) { continue }
        const levelNumbers = Array.from(levels.keys())
        levelNumbers.sort()
        
        functionContents += 'else if (difficulty == "' + difficulty + '") { return availableLevels_' + difficulty + ' }\n'
        
        fileContents += 'const availableLevels_' + difficulty + ': LevelMetadata[] = []\n'
        for (let i = 0; i < levelNumbers.length; i++) {
          const levelNumber = levelNumbers[i]
          const level = levels.get(levelNumber)
          if (level == null) { continue }
          fileContents += 'availableLevels_' + difficulty + '.push(new LevelMetadata("' + level.name + '",' + level.number + ',"' + level.code + '","' + level.difficulty + '"))\n'
        }
      }

      functionContents += '' +
        'else { return null }' +
        '}\n'
      
      return fileContents + functionContents
  }
  
  protected getMapKeys(map: Map<string, string>): string[] {
    return Array.from(map.keys())
  }
}
