import { Animation } from "../animation"
import { SurroundingTiles, TILE_AIR, TILE_GROUND } from "../map"
import { LemmingGift, Tile, TileDetail } from "../types"
import { BaseLevel } from "./baseLevel"
import { Level } from "./level"

export class Level1 extends Level {
  constructor() {
    super('ONE', 10, 1, BaseLevel.mapToTileDetail([
      '__________________________________________________________________________',
      '|GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG|',
      '|GGGGGGGGGGGGGGGGGGGGGGGGGGGGGG           GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG|',
      '|GGGGGGGGGGGGGGGGGG                        GGGGGGGGGGGGGGGGGGGGGGGGGGGGGG|',
      '|GGGGGGGGGGGGGGGG                            GGGGGGGGGGGGGGGGGGGGGGGGGGGG|',
      '|GGGGGGGGGGGGGGG                               GGGGGGGGGGGGGGGGGGGGGGGGGG|',
      '|GGGGGGGGGGGG                                    GGGGGGGGGGGGGGGGGGGGGGGG|',
      '|GGGGGGGGG                                       GGGGGGGGGGGGGGGGGGGGGGGG|',
      '|GGGGGGGGG                                       GGGGGGGGGGGGGGGGGGG GGGG|',
      '|GGGGGGGGG                                       GGGGGGGGGGGGGGGGGGG  GGG|',
      '|GGGGGGGGG                                       GGGGGGGGGGGGGGGGGG    GG|',
      '|GGGGGGGGG                                       GGGGGGGGGGGGGG GGG    GG|',
      '|GGGGGGGGG                                       GGGGGGGGGGGGGG        GG|',
      '|GGGGGGGGG                                       GGGGGGGGGGGGGG        GG|',
      '|GGGGGGGGG                                       GGGGGGGGGGGGGG        GG|',
      '|GGGGGGGGG                                      GGGGGGGGGGGGGGGG       GG|',
      '|GGGGGGGGG                                     GGGGGGGGGGGGGGGGGG      GG|',
      '|GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG     GG|',
      '|GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG     GG|',
      '|GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG     GGG|',
      '|GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG     GGG|',
      '|GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG    GGG|',
      '|GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG      GGG|',
      '|GGGGGGG   GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG       GGG|',
      '|GGGGGG               GGGGGGGGG    GGGGGGGGG                         GGGG|',
      '|GGGGG                                                               GGGG|',
      '|GGGGG                                                               GGGG|',
      '|GGGGG                                                              GGGGG|',
      '|GGGGG                                                             GGGGGG|',
      '|GGGGGGGGGGGGGGGGGGGGGGGGGG                              E        GGGGGGG|',
      '|GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG|',
      '|GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG|',
      '|GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG|',
      '|GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG|',
      '|GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG|',
      '|GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG|',
      '|GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG|',
      '__________________________________________________________________________',
    ], Level1.tileToTileDetail))

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

  protected static tileToTileDetail(tile: Tile, surrounding: SurroundingTiles): TileDetail | null {
    const detail = new TileDetail(tile, '#000000', new Animation([]))
    switch(true) {
      case tile == TILE_GROUND:
        if (surrounding.topCentre === TILE_AIR) {
          detail.animation = BaseLevel.characterToAnimation('"')
          detail.colour = '#00ff00'
        } else {
          detail.animation = BaseLevel.characterToAnimation('G')
          detail.colour = '#825116'
        }
      break;
      default:
        return null
    }
    return detail
  }
}
