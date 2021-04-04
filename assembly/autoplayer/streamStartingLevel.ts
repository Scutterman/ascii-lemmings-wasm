import { Level } from "../levels/level";
import { mapToTiles } from "../map";

export class StreamStartingLevel extends Level {
  constructor() {
    super(1, 0, mapToTiles([
      'AAA'
    ]), false)
  }
}
