
export class Parser {
  private imports = ''
  private levelShell: string = ''
  private lmd: string = 'const mapDetail = new LevelMapDetail([])\n'
  private processingMapSection: boolean = false

  private reset(): void {
    this.levelShell = ''
    this.imports = ''
    this.addImport('../types', ['LemmingGift'])
    this.addImport('../maps/types', ['LevelMapDetail', 'SingleCharacterAnimation'])
    this.addImport('../levels/level', ['Level'])

    this.lmd = 'const mapDetail = new LevelMapDetail([])\n'
    this.processingMapSection = false
  }

  private addImport(path: string, items: string[]): void {
    if (items.length === 0) { return }

    let importStatement = 'import { '
    for (var itemIndex = 0; itemIndex < items.length; itemIndex++) {
      importStatement += items[itemIndex] + ', '
    }

    importStatement = importStatement.substr(0, importStatement.length - 2)
    importStatement += ' } from "' + path + '"'
    this.imports += importStatement + '\n'
  }
  
  public parseGeneratedMap(generatedMap: string, difficulty: string, levelNumber: u16, levelCode: string, toSpawn: u8, forSuccess: u8): string {
    this.reset()
    const mapLines = generatedMap.replaceAll('\r\n', '\n').split('\n')
    for (let i = 0; i < mapLines.length; i++) {
      const line = mapLines[i].trim()
      if (!line.startsWith('//')) {
        if (this.processingMapSection) {
          this.addMapLine(line)
        }
        continue
      }
  
      const instructions = line.substr(2).split('::')
      if (instructions[0] != 'EDITORHINT') {
        continue
      }
      
      switch (true) {
        case instructions[1] == 'MAP_START':
          this.processingMapSection = true
        break
        case instructions[1] == 'MAP_END':
          this.processingMapSection = false
        break
        // case instructions[1] == 'ANIMATION_LIST':
        //   this.addCharacterAnimation(instructions)
        break
        case instructions[1] == 'DEFAULT_ANIMATIONS':
          this.addDefaultAnimation(instructions)
        break
        case instructions[1] == 'CUSTOM_ANIMATIONS':
          this.addCustomAnimation(instructions)
        break
      }
    }

    const tag = `${ difficulty }_${ levelNumber.toString() }_${ levelCode }`
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
  
  private addMapLine(generatedMapLine: string): void {
    // Remove opening quote
    generatedMapLine = generatedMapLine.substr(1)
  
    // Remove comma if present
    if (generatedMapLine.endsWith(',')) {
      generatedMapLine = generatedMapLine.substr(0, generatedMapLine.length - 1)
    }
  
    // Remove closing quote
    generatedMapLine = generatedMapLine.substr(0, generatedMapLine.length - 1)
  
    this.lmd += 'mapDetail.tiles.push("' + generatedMapLine + '")\n'
  }
  
  private addCharacterAnimation(instructions: string[]): void {
    const type = instructions[2]
    const data = instructions[3].split(',')
    const key = data[0]
    switch (true) {
      case type == 'SINGLE':
        const character = data[1]
        const colour = data[2]
        this.lmd += 'animationItems.set("' + key + '", new SingleCharacterAnimation("' + character + '", "' + colour + '"))\n'
    }
  }

  private addDefaultAnimation(instructions: string[]): void {
    const data = instructions[2].split(',')
    const character = data[0]
    const animationListKey = data[1]
    this.lmd += 'mapDetail.defaultAnimations.set("' + character + '", "' + animationListKey + '")\n'
  }
  
  private addCustomAnimation(instructions: string[]): void {
    const data = instructions[2].split(',')
    const x = data[0]
    const y = data[1]
    const animationListKey = data[2]
    const key = x + ',' + y
    this.lmd += 'mapDetail.customAnimations.set("' + key + '", "' + animationListKey + '")\n'
  }
}
