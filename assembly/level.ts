import { Lemming } from "./lemming"
import { LevelTiles } from "./map"

export class Level {
  public numberOfLemmings: u8
  public numberOfLemmingsForSucces: u8
  public map: LevelTiles
  public timeLeft: u16
  public lemmings: Lemming[]
}

export enum LevelState {
  TitleScreen,
  LevelSelect,
  LevelRunning,
  EndSlate
}
