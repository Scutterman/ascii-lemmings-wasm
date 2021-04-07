import { AutoAction, AutoPlayer } from ".";
import { Lemming } from "../lemming";
import { BaseLevel } from "../levels/baseLevel";
import { LemmingGift } from "../types";

const actions = new Map<u32, AutoAction[]>()
actions.set(4, [new AutoAction(0, LemmingGift.Shovel)])
actions.set(10, [new AutoAction(0, LemmingGift.BrickSack)])
actions.set(12, [new AutoAction(0, LemmingGift.Walk)])
actions.set(17, [new AutoAction(0, LemmingGift.Pickaxe)])
actions.set(19, [new AutoAction(0, LemmingGift.Hammer)])
actions.set(43, [new AutoAction(0, LemmingGift.BrickSack)])
actions.set(74, [new AutoAction(0, LemmingGift.BrickSack)])
actions.set(85, [new AutoAction(0, LemmingGift.Hammer)])
actions.set(89, [new AutoAction(0, LemmingGift.BrickSack)])
actions.set(92, [new AutoAction(0, LemmingGift.Hammer)])
actions.set(125, [new AutoAction(0, LemmingGift.BrickSack)])
actions.set(158, [new AutoAction(0, LemmingGift.Hammer)])

export class StreamStarting extends AutoPlayer {
  constructor(level: BaseLevel) {
    super(level, actions)
  }

  public onLemmingSpawn(lemming: Lemming): void {
    lemming.setGift(LemmingGift.ClimbingBoots)
    lemming.setGift(LemmingGift.Umbrella)
  }
}
