import { Level } from "../levels/level";
import { mapToTiles } from "../map";

export class StreamStartingLevel extends Level {
  constructor() {
    super(1, 0, mapToTiles([
      '____________________________',
      '|                          |',
      '|   O                      |',
      '|                          |',
      '|   _ ___ _   _ ___  _     |',
      '|  |_  | |_| |   |  |_     |',
      '|   _| | | | |   |   _|    |',
      '|         _                |',
      '|        |_   _   _   _    |',
      '|         _| |_| |_| | |   |',
      '|                          |',
      '|                          |',
      '|                        E |',
      '____________________________',
      '|                          |',
      '____________________________'
    ]), false)
  }
}
