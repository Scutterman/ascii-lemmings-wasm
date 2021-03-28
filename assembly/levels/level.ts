import { Lemming } from "../lemming"
import { render, renderTimer } from "../loop"
import { LevelTiles } from "../map"
import { UIControl } from "../UIControl"

export class Level {
  public numberOfLemmings: u8
  public numberOfLemmingsForSucces: u8
  public map: LevelTiles
  public timeLeft: u16 = 300
  public lemmings: Lemming[] = []
  public numberOfLemmingsSaved: u8 = 0
  public numberOfLemmingsRemoved: u8 = 0
  public uiControls: UIControl[] = []
  public isMetaScreen: boolean

  constructor(lemmingsToSpawn: u8, numberOfLemmingsForSucces: u8, map: LevelTiles, isMetaScreen: boolean = false) {
    this.numberOfLemmings = lemmingsToSpawn
    this.numberOfLemmingsForSucces = numberOfLemmingsForSucces
    this.map = map
    this.isMetaScreen = isMetaScreen
  }

  protected cloneMap(): LevelTiles {
    const mapClone: LevelTiles = []
    for (let i = 0; i < this.map.length; i++) {
      for (let j = 0; j < this.map[i].length; j++) {
        if (j == 0) { mapClone[i] = [] }
        mapClone[i].push(this.map[i][j])
      }
    }
    return mapClone
  }
  
  public renderLevel(): void {
    const map = this.cloneMap()
    for (let i = 0; i < this.lemmings.length; i++) {
      const lemming = this.lemmings[i]
      if (lemming.removed) { continue }
      map[lemming.position.y][lemming.position.x] = lemming.action.getNextAnimationFrame()
    }
    
    const rightmostColumn = render(map, this.uiControls)
    renderTimer(rightmostColumn, this.timeLeft)
  }

  public clone(): Level {
    return new Level(this.numberOfLemmings, this.numberOfLemmingsForSucces, this.map, this.isMetaScreen)
  }
}

export enum LevelState {
  TitleScreen,
  LevelSelect,
  LevelRunning,
  EndSlate
}
