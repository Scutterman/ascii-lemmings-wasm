// The entry file of your WebAssembly module.

import { Level } from "./level"
import { canStart, loadLevel } from "./loop"
import { mapToTiles } from './map'

export { eventLoop, setCharacterDimensions, setScreenDimensions } from './loop'

const level1 = new Level(10, 1, mapToTiles([
    '________________________',
    '|GGGGGGGGGGGGGGGGGGGGGG|',
    '|   O             GG  G|',
    '|                 GG  G|',
    '|G GGGGGGGGGGGGGGGGG  G|',
    '|                  E  G|',
    '|GGGGGGGGGGGGGGGGGGGGGG|',
    '________________________'
  ]))

export function start(): boolean {
  if (!canStart()) {
    return false
  }
  
  loadLevel(level1)
  return true
}
