import { Vec2 } from "./position"

export type LevelTiles = string[][]
export type LevelMap = string[]

export const TILE_BOUNDARY  = '_'
export const TILE_SIDE      = '|'
export const TILE_ENTRANCE  = 'O'
export const TILE_EXIT      = 'E'
export const TILE_AIR       = ' '
export const TILE_GROUND    = 'G'

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
    topLeft: getSurroundingTile(map, { x: position.x - 1, y: position.y - 1 }),
    topCentre: getSurroundingTile(map, { x: position.x, y: position.y - 1 }),
    topRight: getSurroundingTile(map, { x: position.x + 1, y: position.y - 1 }),
    left: getSurroundingTile(map, { x: position.x - 1, y: position.y }),
    centre: getSurroundingTile(map, { x: position.x, y: position.y }),
    right: getSurroundingTile(map, { x: position.x + 1, y: position.y }),
    bottomLeft: getSurroundingTile(map, { x: position.x - 1, y: position.y + 1 }),
    bottomCentre: getSurroundingTile(map, { x: position.x, y: position.y + 1 }),
    bottomRight: getSurroundingTile(map, { x: position.x + 1, y: position.y + 1 })
  }
  return surrounding
}

function getSurroundingTile(map: LevelTiles, position: Vec2): string {
  if (position.x < 0 || position.y < 0 || position.y > map.length || position.x > map[position.y].length) {
    return '_'
  }

  return map[position.y][position.x]
}
