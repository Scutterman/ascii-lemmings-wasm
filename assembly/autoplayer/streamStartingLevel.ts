import { Level } from "../levels/level";
import { mapToTiles } from "../map";

export class StreamStartingLevel extends Level {
  protected buttonYCoordinate(): u8 { return 20 }
  constructor() {
    super(1, 0, mapToTiles([
      '__________________________________________',
      '|                                        |',
      '|   O                                    |',
      '|                                        |',
      '|GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG|',
      '|                                        |',
      '|                                        |',
      '|     GG   GGG    G    GGG   GGG     GG  |',
      '|    G      G    G G   G G    G     G    |',
      '|     G     G    GGG   GG     G      G   |',
      '|   GG      G    G G   G G    G    GG    |',
      '|                                        |',
      '|                                        |',
      '|             GG                         |',
      '|            G      GG     GG     GGG    |',
      '|             G    G  G   G  G   G   G   |',
      '|           GG      GG     GG    G   G   |',
      '|                                      E |',
      '|GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG|',
      '__________________________________________',
      '|                                        |',
      '__________________________________________'
    ]), false)
  }
}
