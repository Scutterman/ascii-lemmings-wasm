import { Animation } from "./animation"

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

export const lemmingGiftLabel: Map<LemmingGift, string> = new Map()
lemmingGiftLabel
  .set(LemmingGift.None, '')
  .set(LemmingGift.ClimbingBoots, 'Climber')
  .set(LemmingGift.Umbrella, 'Floater')
  .set(LemmingGift.Bomb, 'Bomber')
  .set(LemmingGift.Block, 'Blocker')
  .set(LemmingGift.BrickSack, 'Builder')
  .set(LemmingGift.Hammer, 'Basher')
  .set(LemmingGift.Pickaxe, 'Miner')
  .set(LemmingGift.Shovel, 'Digger')
  .set(LemmingGift.Nuke, 'Nuke')
  .set(LemmingGift.Walk, 'Walker')

export enum LevelState {
  Preparing,
  TitleScreen,
  LevelSelect,
  LevelRunning,
  EndSlate
}

export type AnimationFrame = string[][]


export type LevelTiles = string[][]
export type LevelMap = string[]
export type Tile = string

export type UIAction = (tag?: string) => void

export class TileDetail {
  constructor(
    public tile: Tile,
    public colour: string,
    public animation: Animation,
    public elementId: string = '',
    public needsRemoval: boolean = false,
    public isDirty: boolean = true
  ) {}
  
  public clone(): TileDetail {
    return new TileDetail(
      this.tile,
      this.colour,
      this.animation.clone(),
      this.elementId,
      this.needsRemoval,
      this.isDirty
    )
  }
}

export type LevelTileDetail = TileDetail[][]
