import { mapToTiles } from "../map"
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
  }
}
