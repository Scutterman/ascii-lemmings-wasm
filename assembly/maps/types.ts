import { Animation } from "../animation";
import { TILE_AIR, TILE_BOUNDARY, TILE_EXIT, TILE_SIDE } from "../map";
import { LevelMap, LevelTileDetail, TileDetail } from "../types";
import { animationItems } from "../generatedLevels/animationItems";
import { LevelMetadata } from "../../shared/src/wasm-safe"
import { MapParserBase } from "../../shared/src/index"

export function characterToAnimation(character: string): Animation {
  const frame = [
    [character, character, character, character],
    [character, character, character, character],
    [character, character, character, character],
    [character, character, character, character]
  ]
  return new Animation([frame])
}

export class LevelMapDetail {
  public meta: LevelMetadata = new LevelMetadata('', 1, '', '', '', 0, 0)

  constructor(public tiles: LevelMap) {}
  defaultAnimations: Map<string, string> = new Map()
  customAnimations: Map<string, string> = new Map()

  private cloneMetadata(): LevelMetadata { 
    const lmd = new LevelMetadata(
      this.meta.name,
      this.meta.number,
      this.meta.code,
      this.meta.difficulty,
      this.meta.textureGroup,
      this.meta.numberOfLemmings,
      this.meta.numberOfLemmingsForSuccess
    )

    lmd.skills = shallowCopyWasmMap(this.meta.skills)

    return lmd
  }

  public clone(): LevelMapDetail {
    const lmd = new LevelMapDetail(this.tiles)
    lmd.meta = this.cloneMetadata()
    lmd.defaultAnimations = shallowCopyWasmMap(this.defaultAnimations)
    lmd.customAnimations = shallowCopyWasmMap(this.customAnimations)
    return lmd
  }

  public export(): string {
    let exportString = ''

    exportString += '//EDITORHINT::MAP_METADATA\n'
    exportString += 'NAME::' + this.meta.name + '\n'
    exportString += 'NUMBER::' + this.meta.number.toString() + '\n'
    exportString += 'CODE::' + this.meta.code + '\n'
    exportString += 'DIFFICULTY::' + this.meta.difficulty + '\n'
    exportString += 'TEXTURE_GROUP::' + this.meta.textureGroup + '\n'
    exportString += 'TOSPAWN::' + this.meta.numberOfLemmings.toString() + '\n'
    exportString += 'SUCCESS::' + this.meta.numberOfLemmingsForSuccess.toString() + '\n'
    exportString += 'SKILL::ClimbingBoots::' + this.meta.skills.get('ClimbingBoots').toString()
    exportString += 'SKILL::Umbrella::' + this.meta.skills.get('Umbrella').toString()
    exportString += 'SKILL::Bomb::' + this.meta.skills.get('Bomb').toString()
    exportString += 'SKILL::Block::' + this.meta.skills.get('Block').toString()
    exportString += 'SKILL::BrickSack::' + this.meta.skills.get('BrickSack').toString()
    exportString += 'SKILL::Hammer::' + this.meta.skills.get('Hammer').toString()
    exportString += 'SKILL::Pickaxe::' + this.meta.skills.get('Pickaxe').toString()
    exportString += 'SKILL::Shovel::' + this.meta.skills.get('Shovel').toString()
    exportString += '//EDITORHINT::MAP_START\n'
    for (let row = 0; row < this.tiles.length; row++) {
      exportString += this.tiles[row] + '\n'
    }

    exportString += '//EDITORHINT::DEFAULT_ANIMATIONS\n'
    exportString += this.exportMap(this.defaultAnimations)
    exportString += '//EDITORHINT::CUSTOM_ANIMATIONS\n'
    exportString += this.exportMap(this.customAnimations)
    return exportString
  }

  private exportMap(inMap: Map<string, string>): string {
    let exportString = ''
    const keys = inMap.keys()
    for (let keyIndex = 0; keyIndex < keys.length; keyIndex++) {
      exportString += keys[keyIndex] + ',' + inMap.get(keys[keyIndex]) + '\n'
    }

    return exportString
  }

  private getDetailFromAnimationLabel(tile: string, animationLabel: string): TileDetail | null {
    if (animationItems.has(animationLabel)) {
      const animation = animationItems.get(animationLabel)
      return new TileDetail(tile, animation.getColour(), animation.getAnimation())
    }

    return null
  }
  
  public toTileDetail(): LevelTileDetail {
    const tileDetail: LevelTileDetail = []
    for (let row = 0; row < this.tiles.length; row++) {
      tileDetail.push([])
      const tileRow = this.tiles[row].split('')
      for (let col = 0; col < tileRow.length; col++) {
        const tile = tileRow[col]
        
        tileDetail[row].push(this.detailFromTile(tile, row, col))
      }
    }
    return tileDetail
  }

  public detailFromTile(tile: string, row: i32, col: i32): TileDetail {
    let detail = new TileDetail(tile, '#000000', new Animation([]))
    switch(true) {
      case tile == TILE_BOUNDARY:
        detail.animation = characterToAnimation('_')
      break;
      case tile == TILE_SIDE:
        detail.animation = characterToAnimation('|')
      break;
      case tile == TILE_EXIT: 
        detail.colour = '#3b2a15'
        detail.animation = new Animation([
          [
            '^  ^'.split(''),
            '#/\\#'.split(''),
            '/  \\'.split(''),
            '|  |'.split('')
          ],
          [
            'w  w'.split(''),
            '#/\\#'.split(''),
            '/  \\'.split(''),
            '|  |'.split('')
          ]
        ])
      case tile == TILE_AIR:
      break
      default:
        const positionString = col.toString() + ',' + row.toString()
        if (this.customAnimations.has(positionString)) {
          const _detail = this.getDetailFromAnimationLabel(tile, this.customAnimations.get(positionString))
          if (_detail != null) {
            detail = _detail
          }
        } else {
          if (!this.defaultAnimations.has(tile)) {
            if (!animationItems.has(tile)) {
              animationItems.set(tile, new SingleCharacterAnimation(tile, '#000000'))
            }
            this.defaultAnimations.set(tile, tile)
          }
          const _detail = this.getDetailFromAnimationLabel(tile, this.defaultAnimations.get(tile))
          if (_detail != null) {
            detail = _detail
          }
        }
      break
    }

    return detail
  }
}

export abstract class AnimationListItem {
  constructor(private colour: string) {}
  public getColour(): string { return this.colour }
  public abstract getAnimation(): Animation
  
  public export(name: string): string {
    
    const animation = this.getAnimation().clone()
    if (isSingleCharacterAnimation(animation)) {
      return '//EDITORHINT::ANIMATION_SINGLE::' + name + '::' + animation.getNextFrame(false)[0][0] + '::' + this.getColour() + '\n'
    }
    
    animation.reset()
    const numberOfFrames = animation.getNumberOfFrames()
    let exportedAnimation: string = '//EDITORHINT::ANIMATION::' + name + '\n'
    for (let frameIndex = u8(0); frameIndex < numberOfFrames; frameIndex++) {
      const frame = animation.getNextFrame(true)
      exportedAnimation += '//EDITORHINT::FRAME\n'
      for (let rowIndex = 0; rowIndex < frame.length; rowIndex++) {
        exportedAnimation += frame[rowIndex].join('') + '\n'
      }
    }
    return exportedAnimation
  }
}

function isSingleCharacterAnimation(animation: Animation): boolean {
  const numberOfFrames = animation.getNumberOfFrames()
  if (numberOfFrames != 1) { return false }
  
  const frame = animation.getNextFrame(false)

  if (frame.length == 0 || frame[0].length == 0) { return false }
  
  for (let rowIndex = 0; rowIndex < frame.length; rowIndex++) {
    const row = frame[rowIndex]
    for (let columnIndex = 1; columnIndex < row.length; columnIndex++) {
      if (row[columnIndex] != row[columnIndex - 1]) { return false }
    }
  }

  return true
}

export class StandardAnimation extends AnimationListItem {
  constructor(private animation: Animation, colour: string) {
    super(colour)
  }
  
  public getAnimation(): Animation {
    return this.animation
  }
}

export class SingleCharacterAnimation extends AnimationListItem {
  private animation: Animation
  constructor(private character: string, colour: string) {
    super(colour)
    this.animation = characterToAnimation(this.character)
  }
  
  public getAnimation(): Animation {
    return this.animation
  }

  public getCharacter(): string {
    return this.character
  }
}

function shallowCopyWasmMap <K, V>(inMap: Map<K,V>): Map<K,V> {
  const outMap: Map<K,V> = new Map()
  const keys = inMap.keys()
  
  for (let keyIndex = 0; keyIndex < keys.length; keyIndex++) {
    const key = keys[keyIndex]
    const value = inMap.get(key)
    outMap.set(key, value)
  }
  return outMap
}

export class Parser extends MapParserBase {
  private lmd: LevelMapDetail = new LevelMapDetail([])
  
  protected reset(): void {
    this.lmd = new LevelMapDetail([])
  }

  public parseGeneratedMap(generatedMap: string): LevelMapDetail {
    super.parseMap(generatedMap, this.getSingleCharacterAnimations())
    return this.lmd
  }

  private getSingleCharacterAnimations(): Map<string, string> {
    const out = new Map<string, string>()
    const keys = animationItems.keys()
    for (let i = 0; i < keys.length; i++) {
      const animationName = keys[i]
      const animation = animationItems.get(animationName)
      if (animation instanceof SingleCharacterAnimation) {
        out.set(animationName, (animation as SingleCharacterAnimation).getCharacter())
      }
    }

    return out
  }
  
  protected addAvailableLevel(meta: LevelMetadata): void {
    this.lmd.meta = meta
  }
  
  protected addMapLine(generatedMapLine: string): void {
    this.lmd.tiles.push(generatedMapLine)
  }
  
  protected addDefaultAnimation(character: string, animationListKey: string): void {
    this.lmd.defaultAnimations.set(character, animationListKey)
  }
  
  protected addCustomAnimation(key: string, animationListKey: string): void {
    this.lmd.customAnimations.set(key, animationListKey)
  }
}
