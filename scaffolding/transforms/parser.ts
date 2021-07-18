
enum MapSection {
  None,
  Map,
  DefaultAnimation,
  CustomAnimation
}

export class Parser {
  private imports = ''
  private levelShell: string = ''
  private lmd: string = 'const mapDetail = new LevelMapDetail([])\n'
  private processingMapSection: boolean = false
  private currentSection: MapSection = MapSection.None

  private reset(): void {
    this.currentSection = MapSection.None
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
}
