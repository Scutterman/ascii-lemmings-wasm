import { AutoPlayer } from ".";
import { gameState } from '..';
import { BaseLevel } from '../levels/baseLevel';

export class StreamStarting extends AutoPlayer {
  init(level: BaseLevel): void {
    gameState.loadLevel(level)
  }
  
  public update(): void { }
}