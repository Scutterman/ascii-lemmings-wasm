import { Lemming } from "./lemming"
import { LevelTiles } from "./map"
import { UIControl } from "./UIControl"

export class Level {
  public numberOfLemmings: u8
  public numberOfLemmingsForSucces: u8
  public map: LevelTiles
  public timeLeft: u16 = 300
  public lemmings: Lemming[] = []
  public numberOfLemmingsSaved: u8 = 0
  public numberOfLemmingsRemoved: u8 = 0
  public uiControls: UIControl[] = []

  constructor(lemmingsToSpawn: u8, numberOfLemmingsForSucces: u8, map: LevelTiles) {
    this.numberOfLemmings = lemmingsToSpawn
    this.numberOfLemmingsForSucces = numberOfLemmingsForSucces
    this.map = map
  }
}

export enum LevelState {
  TitleScreen,
  LevelSelect,
  LevelRunning,
  EndSlate
}
