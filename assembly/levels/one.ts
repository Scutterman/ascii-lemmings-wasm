import { mapToTiles } from "../map"
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
      '|G GGGGGGGGGGGGGGGGGGGGG  G|',
      '|                      G  G|',
      '|                      G  G|',
      '|                      G  G|',
      '|                      E  G|',
      '|GGGGGGGGGGGGGGGGGGGGGGGGGG|',
      '____________________________',
      '|                          |',
      '____________________________'
    ]))
  }
}
