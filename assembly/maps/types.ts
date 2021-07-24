import { Animation } from "../animation";
import { TILE_AIR, TILE_BOUNDARY, TILE_EXIT, TILE_SIDE } from "../map";
import { LevelMap, LevelTileDetail, TileDetail, shallowCopyWasmMap } from "../types";
import { animationItems } from "../generatedLevels/animationItems";
import { LevelMetadata, MapParserBase } from "./mapParserBase";

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
  constructor(public tiles: LevelMap, public name: string = '') {}
  defaultAnimations: Map<string, string> = new Map()
  customAnimations: Map<string, string> = new Map()

  public clone(): LevelMapDetail {
    const lmd = new LevelMapDetail(this.tiles, this.name)
    lmd.defaultAnimations = shallowCopyWasmMap(this.defaultAnimations)
    lmd.customAnimations = shallowCopyWasmMap(this.customAnimations)
    return lmd
  }

  public export(): string {
    let exportString = ''

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
}

export class Parser extends MapParserBase {
  private lmd: LevelMapDetail = new LevelMapDetail([])
  
  protected reset(): void {
    this.lmd = new LevelMapDetail([])
  }
  public parseGeneratedMap(generatedMap: string): LevelMapDetail {
    // TODO:: Remove hardcoded difficulty, level number, and level code
    super.parseMap(generatedMap, 'fun', 1, 'FOOBARBAZBAT')
    return this.lmd
  }
  
  protected addAvailableLevel(meta: LevelMetadata): void {
    this.lmd.name = meta.name
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
