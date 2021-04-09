import { mapToTiles } from "../map"
import { LemmingGift } from "../types"
import { Level } from "./level"

export class Level1 extends Level {
  constructor() {
    super(10, 1, mapToTiles([
      '____________________________',
      '|GGGGGGGGGGGGGGGGGGGGGGGGGG|',
      '|   O                 GG  G|',
      '|                     GG  G|',
      '|                     GG  G|',
      '|                     GG  G|',
      '|                     GG  G|',
      '|GGGGGGGGGGGGGGGGGGGGGGG  G|',
      '|                      G  G|',
      '|                      G  G|',
      '|                      G  G|',
      '|                      E  G|',
      '|GGGGGGGGGGGGGGGGGGGGGGGGGG|',
      '____________________________',
      '|                          |',
      '____________________________'
    ]))

    this.setSkillQuantity(LemmingGift.Shovel, 1)
  }
}
