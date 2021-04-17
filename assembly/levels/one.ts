import { mapToTiles } from "../map"
import { LemmingGift } from "../types"
import { Level } from "./level"

export class Level1 extends Level {
  constructor() {
    super('ONE', 10, 1, mapToTiles([
      '____________________________',
      '|GGGGGGGGGGGGGGGGGGGGGGGGGG|',
      '|   O                 GG  G|',
      '|                     GG  G|',
      '|                     GG  G|',
      '|                     GG  G|',
      '|                      G  G|',
      '|                      G  G|',
      '|                      G  G|',
      '|                      G  G|',
      '|                      G  G|',
      '|                      G  G|',
      '|                     GG  G|',
      '|                     GG  G|',
      '|                     GG  G|',
      '|                     GG  G|',
      '|GGGGGGGGGGGGGGGGGGGGGGG  G|',
      '|GGGGGGGGGGGGGGGGGGGGGGG  G|',
      '|GGGGGGGGGGGGGGGGGGGGGGG  G|',
      '|GGGGGGGGGGGGGGGGGGGGGGG  G|',
      '|GGGGGGGGGGGGGGGGGGGGGGG  G|',
      '|GGGGGGGGGGGGGGGGGGGGGGG  G|',
      '|GGGGGGGGGGGGGGGGGGGGGGG  G|',
      '|                      G  G|',
      '|                      G  G|',
      '|                      G  G|',
      '|                      G  G|',
      '|                      G  G|',
      '|                      E  G|',
      '|GGGGGGGGGGGGGGGGGGGGGGGGGG|',
      '|GGGGGGGGGGGGGGGGGGGGGGGG G|',
      '|GGGGGGGGGGGGGGGGGGGGGGGG G|',
      '|GGGGGGGGGGGGGGGGGGGGGGGG G|',
      '|GGGGGGGGGGGGGGGGGGGGGGGG G|',
      '|GGGGGGGGGGGGGGGGGGGGGGGG G|',
      '|GGGGGGGGGGGGGGGGGGGGGGGG G|',
      '____________________________',
      '|                          |',
      '|                          |',
      '|                          |',
      '|                          |',
      '|                          |',
      '|                          |',
      '|                          |',
      '____________________________'
    ]))

    this.setSkillQuantity(LemmingGift.Shovel, u8.MAX_VALUE)
    this.setSkillQuantity(LemmingGift.Block, 10)
    this.setSkillQuantity(LemmingGift.Bomb, 10)
    this.setSkillQuantity(LemmingGift.BrickSack, u8.MAX_VALUE)
    this.setSkillQuantity(LemmingGift.ClimbingBoots, 10)
    this.setSkillQuantity(LemmingGift.Hammer, 10)
    this.setSkillQuantity(LemmingGift.Pickaxe, 10)
    this.setSkillQuantity(LemmingGift.Umbrella, 10)
  }

  public clone(): Level1 {
    return new Level1()
  }
}
