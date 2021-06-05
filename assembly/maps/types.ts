import { Animation } from "../animation";
import { TILE_AIR, TILE_BOUNDARY, TILE_EXIT, TILE_SIDE } from "../map";
import { LevelMap, LevelTileDetail, TileDetail } from "../types";

export function characterToAnimation(character: string): Animation {
  const line = [character, character, character, character]
  return new Animation([[line, line, line, line]])
}

export class LevelMapDetail {
  constructor(public tiles: LevelMap) {}
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
            detail.animation = characterToAnimation('-')
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
    return characterToAnimation(this.character)
  }
}

export class Parser {
  private lmd: LevelMapDetail = new LevelMapDetail([])
  private processingMapSection: boolean = false
  
  public parseGeneratedMap(generatedMap: string): LevelMapDetail {
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
        case instructions[1] == 'ANIMATION_LIST':
          this.addCharacterAnimation(instructions)
        break
        case instructions[1] == 'DEFAULT_ANIMATIONS':
          this.addDefaultAnimation(instructions)
        break
        case instructions[1] == 'CUSTOM_ANIMATIONS':
          this.addCustomAnimation(instructions)
        break
      }
    }

    return this.lmd
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
  
    this.lmd.tiles.push(generatedMapLine)
  }
  
  private addCharacterAnimation(instructions: string[]): void {
    const type = instructions[2]
    const data = instructions[3].split(',')
    const key = data[0]
    switch (true) {
      case type == 'SINGLE':
        const character = data[1]
        const colour = data[2]
        this.lmd.animationList.set(key, new SingleCharacterAnimation(character, colour))
    }
  }

  private addDefaultAnimation(instructions: string[]): void {
    const data = instructions[2].split(',')
    const character = data[0]
    const animationListKey = data[1]
    this.lmd.defaultAnimations.set(character, animationListKey)
  }
  
  private addCustomAnimation(instructions: string[]): void {
    const data = instructions[2].split(',')
    const x = data[0]
    const y = data[1]
    const animationListKey = data[2]
    const key = x + ',' + y
    this.lmd.customAnimations.set(key, animationListKey)
  }
}
