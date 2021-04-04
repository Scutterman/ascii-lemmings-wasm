import { Level } from "../levels/level";
import { mapToTiles } from "../map";

export class StreamStartingLevel extends Level {
  constructor() {
    super(1, 0, mapToTiles([
      '____________________________',
      '|                          |',
      '|   O                      |',
      '|                          |',
      '|GGGGGGGGGGGGGGGGGGGGGGGGGG|',
      '|                          |',
      '|   _ ___ _   _ ___  _     |',
      '|  |_  | |_| |   |  |_     |',
      '|   _| | | | |   |   _|    |',
      '|                          |',
      '|   _                      |',
      '|  |_    ___   ___   ___   |',
      '|   _|   |_|   |_|   | |   |',
      '|GGGGGGGGGGGGGGGGGGGGGGGGGG|',
      '|                        E |',
      '____________________________',
      '|                          |',
      '____________________________'
    ]), false)
  }
}
