import { currentLevel } from "."
import { Lemming } from "./lemming"
import { Vec2 } from "./position"
import { LevelMap, LevelTiles, Tile } from "./types"

export const TILE_BOUNDARY  = '_'
export const TILE_SIDE      = '|'
export const TILE_ENTRANCE  = 'O'
export const TILE_EXIT      = 'E'
export const TILE_AIR       = ' '
export const TILE_GROUND    = 'G'
export const TILE_BRICK     = '-'
export const TILE_BLOCKER   = 'T'

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

export function mapToTiles(map: LevelMap): LevelTiles {
  const arr: LevelTiles = []
  for (let i = 0; i < map.length; i++) {
    arr[i] = map[i].split('')
  }
  return arr
}

export function getSurroundingTiles(map: LevelTiles, position: Vec2): SurroundingTiles {
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

function isOutOfMapBounds(map: LevelTiles, location: Vec2): boolean {
  return location.x < 0 || location.y < 0 || location.y >= map.length || location.x >= map[location.y].length
}

function getSurroundingTile(map: LevelTiles, position: Vec2): string {
  if (isOutOfMapBounds(map, position)) {
    return '_'
  }

  if (currentLevel.isBlockerInLocation(position)) {
    return 'T'
  } else {
    return map[position.y][position.x]
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

export function removeTerrain(map: LevelTiles, location: Vec2): boolean {
  if (isOutOfMapBounds(map, location) || terrainIndestructible(map[location.y][location.x])) {
    return false
  } else {
    map[location.y][location.x] = TILE_AIR
    return true
  }
}

export function addBrick(map: LevelTiles, location: Vec2): boolean {
  if (isOutOfMapBounds(map, location) || map[location.y][location.x] != TILE_AIR) {
    return false
  } else {
    map[location.y][location.x] = TILE_BRICK
    return true
  }
}
