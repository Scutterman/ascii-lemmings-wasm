// The entry file of your WebAssembly module.

import { Level } from "./level"
import { loadLevel } from "./loop"

export { eventLoop, endGame } from './loop'

const level1 = new Level(
  10,
  1,
  [
    '________________________',
    '|GGGGGGGGGGGGGGGGGGGGGG|',
    '|   O             GG  G|',
    '|                 GG  G|',
    '|GGGGGGGGGGGGGGGGGGG  G|',
    '|                  E  G|',
    '|GGGGGGGGGGGGGGGGGGGGGG|',
    '________________________'
  ]
)

export function test(): void {
  loadLevel(level1)
}
