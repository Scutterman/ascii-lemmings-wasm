
export enum LemmingGift { None = 0, ClimbingBoots = 1, Umbrella = 2, Bomb = 3 }

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