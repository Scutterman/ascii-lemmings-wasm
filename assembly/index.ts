// The entry file of your WebAssembly module.

import { Level } from "./level"
import { loadLevel } from "./loop"
import { mapToTiles } from './map'

export { eventLoop, endGame } from './loop'

const level1: Level = {
  numberOfLemmings: 10,
  numberOfLemmingsForSucces: 1,
  map: mapToTiles([
    '________________________',
    '|GGGGGGGGGGGGGGGGGGGGGG|',
    '|   O             GG  G|',
    '|                 GG  G|',
    '|GGGGGGGGGGGGGGGGGGG  G|',
    '|                  E  G|',
    '|GGGGGGGGGGGGGGGGGGGGGG|',
    '________________________'
  ]),
  timeLeft: 300,
  lemmings: []
}

export function test(): void {
  loadLevel(level1)
}
