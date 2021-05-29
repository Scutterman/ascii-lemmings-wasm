import { Animation } from "../animation";
import { BaseLevel } from "../levels/baseLevel";
import { TILE_AIR, TILE_BOUNDARY, TILE_EXIT, TILE_SIDE } from "../map";
import { LevelMap, LevelTileDetail, TileDetail } from "../types";

export class LevelMapDetail {
  constructor(private tiles: LevelMap) {}
  animationList: Map<string, AnimationListItem> = new Map()
  defaultAnimations: Map<string, string> = new Map()
  customAnimations: Map<string, string> = new Map()

  public clone(): LevelMapDetail {
    return new LevelMapDetail(this.tiles)
  }

  private getDetailFromAnimationLabel(tile: string, animationLabel: string): TileDetail | null {
    if (this.animationList.has(animationLabel)) {
      const animation = this.animationList.get(animationLabel)
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
        let detail = new TileDetail(tile, '#000000', new Animation([]))
        switch(true) {
          case tile == TILE_BOUNDARY:
            detail.animation = BaseLevel.characterToAnimation('-')
          break;
          case tile == TILE_SIDE:
            detail.animation = BaseLevel.characterToAnimation('|')
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
            } else if (this.defaultAnimations.has(tile)) {
              const _detail = this.getDetailFromAnimationLabel(tile, this.defaultAnimations.get(tile))
              if (_detail != null) {
                detail = _detail
              }
            }
          break
        }
        tileDetail[row].push(detail)
      }
    }
    return tileDetail
  }
}

abstract class AnimationListItem {
  constructor(private colour: string) {}
  public getColour(): string { return this.colour }
  public abstract getAnimation(): Animation
}

export class SingleCharacterAnimation extends AnimationListItem {
  constructor(private character: string, colour: string) {
    super(colour)
  }
  
  public getAnimation(): Animation {
    return BaseLevel.characterToAnimation(this.character)
  }
}
