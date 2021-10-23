import { currentLevel } from "."
import { Animation, BlockSide, Direction } from "./animation"
import { defaultColour } from "./colours"
import { isBlockerInLocation, Lemming } from "./lemming"
import { characterToAnimation } from "./maps/types"
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
export const VISIBLE_Y: u8 = 35
export const BOUNDARIES_Y: u8 = 2
export const CONTROLS_Y: u8 = 9

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
      arr[i].push(new TileDetail(cols[j], defaultColour, characterToAnimation(cols[j]), '', false, true))
    }
  }
  return arr
}

function isOutOfMapBounds(map: LevelTileDetail, location: Vec2): boolean {
  return location.x < 0 || location.y < 0 || location.y >= map.length || location.x >= map[location.y].length
}

export function getSurroundingTileDetail(position: Vec2): TileDetail | null {
  return isOutOfMapBounds(currentLevel.map, position) ? null : currentLevel.map[position.y][position.x]
}

export function getPositionInDirection(sourcePosition: Vec2, direction: Direction): Vec2 {
  const targetTilePosition = sourcePosition.clone()
  
  if (testDirection(direction, Direction.Up)) {
    targetTilePosition.y = targetTilePosition.y - 1
  } else if (testDirection(direction, Direction.Down)) {
    targetTilePosition.y = targetTilePosition.y + 1
  }

  if (testDirection(direction, Direction.Right)) {
    targetTilePosition.x = targetTilePosition.x + 1
  } else if (testDirection(direction, Direction.Left)) {
    targetTilePosition.x = targetTilePosition.x - 1
  }

  return targetTilePosition
}

export function getTileInDirection(sourcePosition: Vec2, direction: Direction): Tile {
  const targetTilePosition = getPositionInDirection(sourcePosition, direction)
  return getSurroundingTile(targetTilePosition)
}

export function getTileDetailInDirection(sourcePosition: Vec2, direction: Direction): TileDetail | null {
  const position = getPositionInDirection(sourcePosition, direction)
  return getSurroundingTileDetail(position)
}

export function getSurroundingTile(position: Vec2): Tile {
  const detail = getSurroundingTileDetail(position)
  if (detail == null) {
    return '_'
  }

  if (isBlockerInLocation(position)) {
    return 'T'
  } else {
    return detail.tile
  }
}

export function isWalkingDownStairs(lemming: Lemming): boolean {
  const deltaX: i16 = lemming.facingDirection == Direction.Right ? 1 : -1
  const tileBelowPosition: Vec2 = new Vec2(lemming.position.x + deltaX, lemming.position.y + 1)
  const tileTwoBelowPosition: Vec2 = new Vec2(lemming.position.x + deltaX, lemming.position.y + 2)
  const tileBelow: string = getSurroundingTile(tileBelowPosition)
  const tileTwoBelow: string = getSurroundingTile(tileTwoBelowPosition)
  return tileBelow == TILE_AIR && tileTwoBelow != TILE_AIR
}

export function terrainIndestructible(animation: Animation, damageMovingInDirection: Direction): boolean {
  return animation.canDestroy(damageMovingInDirection) == false
}

export function removeTerrain(location: Vec2, damageMovingInDirection: Direction): boolean {
  const map = currentLevel.map
  if (isOutOfMapBounds(map, location) || terrainIndestructible(map[location.y][location.x].animation, damageMovingInDirection)) {
    return false
  } else if (map[location.y][location.x].tile == TILE_AIR) {
    return true
  } else {
    map[location.y][location.x].tile = TILE_AIR
    map[location.y][location.x].needsRemoval = true
    map[location.y][location.x].isDirty = false
    return true
  }
}

export function removeTerrainFromDirection(sourcePosition: Vec2, damageMovingInDirection: Direction): boolean {
  const targetTilePosition = getPositionInDirection(sourcePosition, damageMovingInDirection)
  return removeTerrain(targetTilePosition, damageMovingInDirection)
}

export function testDirection(value: Direction, toTestFor: Direction): boolean {
  return (value & toTestFor) == toTestFor
}

export function testBlockSide(value: BlockSide, toTestFor: BlockSide): boolean {
  return (value & toTestFor) == toTestFor
}

export function addBrick(map: LevelTileDetail, location: Vec2): boolean {
  if (isOutOfMapBounds(map, location) || map[location.y][location.x].tile != TILE_AIR) {
    return false
  } else {
    map[location.y][location.x].tile = TILE_BRICK
    map[location.y][location.x].animation = characterToAnimation(TILE_BRICK, BlockSide.All)
    map[location.y][location.x].isDirty = true
    return true
  }
}
