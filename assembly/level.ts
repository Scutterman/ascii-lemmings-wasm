import { Lemming } from "./lemming"

export class Level {
  public numberOfLemmings: u8
  public numberOfLemmingsForSucces: u8
  public map: string[]
  public timeLeft: u16
  public lemmings: Lemming[]
}

export enum LevelState {
  TitleScreen,
  LevelSelect,
  LevelRunning,
  EndSlate
}
