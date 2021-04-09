import { AutoAction, AutoPlayer } from ".";
import { Lemming } from "../lemming";
import { BaseLevel } from "../levels/baseLevel";
import { LemmingGift } from "../types";

const actions = new Map<u32, AutoAction[]>()
actions.set(11, [new AutoAction(0, LemmingGift.Block)])
actions.set(14, [new AutoAction(1, LemmingGift.Pickaxe)])
export class Test extends AutoPlayer {
  constructor(level: BaseLevel) {
    super(level, actions)
  }

  public onLemmingSpawn(lemming: Lemming): void {
    lemming.setGift(LemmingGift.ClimbingBoots)
  }
}
