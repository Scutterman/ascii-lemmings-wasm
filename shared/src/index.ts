import { LevelMetadata } from "./wasm-safe"
export * from "./wasm-safe"

enum MapSection {
  None,
  Metadata,
  Map,
  DefaultAnimation,
  CustomAnimation
}

export abstract class MapParserBase {
  protected readonly INFINTE_SKILL_VALUE: number = 255
  private currentSection: MapSection = MapSection.None
  protected meta: LevelMetadata = new LevelMetadata('', 0, '', '', '', 0, 0)

  public parseMap(generatedMap: string, singleCharacterAnimations: Map<string, string>): void {
    this.reset()
    generatedMap.replaceAll('\r\n', '\n')
    
    const mapLines = generatedMap.split('\n')
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

        if (this.currentSection == MapSection.Metadata) {
          this.addAvailableLevel(this.meta)
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
          const metaDetails = line.split('::')
          if (metaDetails.length < 2) {
            continue
          } else if (metaDetails[0] == 'NAME') {
            this.meta.name = metaDetails[1]
          } else if (metaDetails[0] == 'NUMBER') {
            this.meta.number = this.int(metaDetails[1])
          } else if (metaDetails[0] == 'CODE') {
            this.meta.code = metaDetails[1]
          } else if (metaDetails[0] == 'DIFFICULTY') {
            this.meta.difficulty = metaDetails[1]
          } else if (metaDetails[0] == 'TEXTURE_GROUP') {
            this.meta.textureGroup = metaDetails[1]
          } else if (metaDetails[0] == 'TOSPAWN') {
            this.meta.numberOfLemmings = this.int(metaDetails[1])
          } else if (metaDetails[0] == 'SUCCESS') {
            this.meta.numberOfLemmingsForSuccess = this.int(metaDetails[1])
          } else if (metaDetails[0] == 'SKILL') {
            const skillValue: u8 = metaDetails[2] == 'INFINITY' ? u8.MAX_VALUE : this.int(metaDetails[2])
            this.meta.skills.set(metaDetails[1], skillValue)
          }
        break
        case this.currentSection == MapSection.Map:
          this.addMapLine(line)
        break
        case this.currentSection == MapSection.DefaultAnimation:
          // This section left intentionally blank
        break
        case this.currentSection == MapSection.CustomAnimation:
          this.currentSection = MapSection.CustomAnimation
          const customAnimationInfo = line.split(',')
          const x = customAnimationInfo[0]
          const y = customAnimationInfo[1]
          const key = x + ',' + y
          const customAnimationListKey = customAnimationInfo[2]
          this.addCustomAnimation(key, customAnimationListKey)
        break
      }
    }

    const textureGroup = this.meta.textureGroup
    const defaultAnimationKeys = this.getMapKeys(singleCharacterAnimations)
    for (var i = 0; i < defaultAnimationKeys.length; i++) {
      const animationName = defaultAnimationKeys[i]
      const animation = singleCharacterAnimations.get(animationName)
      if (animationName.startsWith(textureGroup) && animation != null) {
        this.addDefaultAnimation(animation, animationName)
      }
    }
  }

  protected reset(): void {
    this.currentSection = MapSection.None
    this.meta = new LevelMetadata('', 0, '', '', '', 0, 0)
  }
  
  protected abstract addAvailableLevel(meta: LevelMetadata): void
  protected abstract addMapLine(generatedMapLine: string): void
  protected abstract addDefaultAnimation(character: string, animationListKey: string): void
  protected abstract addCustomAnimation(key: string, animationListKey: string): void
  protected abstract getMapKeys(map: Map<string, string>): string[]
  protected abstract int(value: string): u8
}
