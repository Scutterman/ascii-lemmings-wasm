import { Level } from "../levels/level";
import { mapToTiles } from "../map";

export class TestLevel extends Level {
  constructor() {
    super(41, 35, mapToTiles([
  '__________________________________________',
  '|       G                                |',
  '|   O   G                                |',
  '|       G                                |',
  '|GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG|',
  '|GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG|',
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
]), false, 20)
  }
}
