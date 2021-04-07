
export enum LemmingGift {
  None = 0,
  ClimbingBoots = 1,
  Umbrella = 2,
  Bomb = 3,
  Block = 4,
  BrickSack = 5,
  Hammer = 6,
  Pickaxe = 7,
  Shovel = 8,
  Nuke = 9,
  Walk = 10
}

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
