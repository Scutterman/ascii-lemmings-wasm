import { currentLevel } from "."
import { Animation } from "./animation"
import { isBlockerInLocation, Lemming } from "./lemming"
import { Vec2 } from "./position"
import { LevelMap, LevelTileDetail, Tile, TileDetail } from "./types"

export const TILE_BOUNDARY  = '_'
export const TILE_SIDE      = '|'
export const TILE_ENTRANCE  = 'O'
export const TILE_EXIT      = 'E'
export const TILE_AIR       = ' '
export const TILE_GROUND    = 'G'
export const TILE_BRICK     = '-'
export const TILE_BLOCKER   = 'T'

// TODO:: These numbers may need to be tweaked
// to prevent the map border from being cut off
export const VISIBLE_X: u8 = 72
export const BOUNDARIES_X: u8 = 2
export const VISIBLE_Y: u8 = 36
export const BOUNDARIES_Y: u8 = 2
export const CONTROLS_Y: u8 = 8

export class SurroundingTiles {
  topLeft: string
  topCentre: string
  topRight: string
  left: string
  centre: string
  right: string
  bottomLeft: string
  bottomCentre: string
  bottomRight: string
}

export function mapToTiles(map: LevelMap): LevelTileDetail {
  const arr: LevelTileDetail = []
  for (let i = 0; i < map.length; i++) {
    arr.push([])
    const cols = map[i].split('')
    for (let j = 0; j < cols.length; j++) {
      arr[i].push(new TileDetail(cols[j], '#000000', new Animation([])))
    }
  }
  return arr
}

export function getSurroundingTiles(map: LevelTileDetail, position: Vec2): SurroundingTiles {
  const surrounding: SurroundingTiles = {
    topLeft: getSurroundingTile(map, new Vec2(position.x - 1, position.y - 1)),
    topCentre: getSurroundingTile(map, new Vec2(position.x, position.y - 1)),
    topRight: getSurroundingTile(map, new Vec2(position.x + 1, position.y - 1)),
    left: getSurroundingTile(map, new Vec2(position.x - 1, position.y)),
    centre: getSurroundingTile(map, new Vec2(position.x, position.y)),
    right: getSurroundingTile(map, new Vec2(position.x + 1, position.y)),
    bottomLeft: getSurroundingTile(map, new Vec2(position.x - 1, position.y + 1)),
    bottomCentre: getSurroundingTile(map, new Vec2(position.x, position.y + 1) ),
    bottomRight: getSurroundingTile(map, new Vec2(position.x + 1, position.y + 1))
  }
  return surrounding
}

function isOutOfMapBounds(map: LevelTileDetail, location: Vec2): boolean {
  return location.x < 0 || location.y < 0 || location.y >= map.length || location.x >= map[location.y].length
}

function getSurroundingTile(map: LevelTileDetail, position: Vec2): string {
  if (isOutOfMapBounds(map, position)) {
    return '_'
  }

  if (isBlockerInLocation(position)) {
    return 'T'
  } else {
    return map[position.y][position.x].tile
  }
}

export function isWalkingDownStairs(lemming: Lemming): boolean {
  const deltaX: i16 = lemming.movingRight ? 1 : -1
  const tileBelowPosition: Vec2 = new Vec2(lemming.position.x + deltaX, lemming.position.y + 1)
  const tileTwoBelowPosition: Vec2 = new Vec2(lemming.position.x + deltaX, lemming.position.y + 2)
  const tileBelow: string = getSurroundingTile(currentLevel.map, tileBelowPosition)
  const tileTwoBelow: string = getSurroundingTile(currentLevel.map, tileTwoBelowPosition)
  return tileBelow == TILE_AIR && (tileTwoBelow == TILE_BRICK || tileTwoBelow == TILE_GROUND)
}

export function terrainIndestructible(tile: Tile): boolean {
  return tile == TILE_AIR || tile == TILE_ENTRANCE || tile == TILE_EXIT || tile == TILE_BOUNDARY || tile == TILE_SIDE || tile == TILE_BLOCKER
}

export function removeTerrain(map: LevelTileDetail, location: Vec2): boolean {
  if (isOutOfMapBounds(map, location) || terrainIndestructible(map[location.y][location.x].tile)) {
    return false
  } else {
    map[location.y][location.x].tile = TILE_AIR
    return true
  }
}

export function addBrick(map: LevelTileDetail, location: Vec2): boolean {
  if (isOutOfMapBounds(map, location) || map[location.y][location.x].tile != TILE_AIR) {
    return false
  } else {
    map[location.y][location.x].tile = TILE_BRICK
    return true
  }
}
