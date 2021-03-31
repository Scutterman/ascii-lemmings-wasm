
export enum LemmingGift { ClimbingBoots = 0, Umbrella = 1, Bomb = 2 }

export enum LevelState {
  TitleScreen,
  LevelSelect,
  LevelRunning,
  EndSlate
}

export type AnimationFrame = string[][]


export type LevelTiles = string[][]
export type LevelMap = string[]
export type Tile = string

export type UIAction = () => void
