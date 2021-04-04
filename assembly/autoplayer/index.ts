import { gameState } from "..";
import { BaseLevel } from "../levels/baseLevel";

export abstract class AutoPlayer {
  constructor(protected level: BaseLevel) {
    gameState.loadLevel(level)
  }
  
  abstract update(): void
}
