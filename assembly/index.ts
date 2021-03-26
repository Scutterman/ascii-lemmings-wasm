// The entry file of your WebAssembly module.

import { Level } from "./level"
import { canStart, loadLevel } from "./loop"
import { mapToTiles } from './map'
import { Vec2 } from "./position"
import { UIControl } from "./UIControl"

export { eventLoop, setCharacterDimensions, setScreenDimensions, updateMouseCoordinates, registerMouseClick } from './loop'

const level1 = new Level(10, 1, mapToTiles([
    '________________________',
    '|GGGGGGGGGGGGGGGGGGGGGG|',
    '|   O             GG  G|',
    '|                 GG  G|',
    '|G GGGGGGGGGGGGGGGGG  G|',
    '|                  E  G|',
    '|GGGGGGGGGGGGGGGGGGGGGG|',
    '|                      |',
    '________________________'
  ]))

level1.uiControls.push(new UIControl(new Vec2(-1, 7), "Display", () => {
  log("Hello World!")
}))

export function start(): boolean {
  if (!canStart()) {
    return false
  }
  
  loadLevel(level1)
  return true
}

declare function log(text: string): void;
