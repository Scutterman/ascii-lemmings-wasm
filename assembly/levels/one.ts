import { gameState } from ".."
import { mapToTiles } from "../map"
import { Vec2 } from "../position"
import { LemmingGift } from "../types"
import { UIControl } from "../UIControl"
import { Level } from "./level"

export class Level1 extends Level {
  constructor() {
    super(10, 1, mapToTiles([
      '________________________',
      '|GGGGGGGGGGGGGGGGGGGGGG|',
      '|   O             GG  G|',
      '|                 GG  G|',
      '|                 GG  G|',
      '|                 GG  G|',
      '|                 GG  G|',
      '|G GGGGGGGGGGGGGGGGG  G|',
      '|                  G  G|',
      '|                  G  G|',
      '|                  G  G|',
      '|                  E  G|',
      '|GGGGGGGGGGGGGGGGGGGGGG|',
      '|                      |',
      '________________________'
    ]))
    this.uiControls.push(new UIControl(new Vec2(0, 0), 'A', () => {
      gameState.selectedGift = LemmingGift.None
    }))
  }
}
