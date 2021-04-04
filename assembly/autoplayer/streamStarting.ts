import { AutoAction, AutoPlayer } from ".";
import { BaseLevel } from "../levels/baseLevel";
import { LemmingGift } from "../types";

const actions = new Map<u32, AutoAction[]>()
actions.set(25, [new AutoAction(0, LemmingGift.Shovel)])
actions.set(36, [new AutoAction(0, LemmingGift.BrickSack)])
actions.set(39, [new AutoAction(0, LemmingGift.Hammer)])
actions.set(48, [new AutoAction(0, LemmingGift.BrickSack)])
actions.set(57, [new AutoAction(0, LemmingGift.BrickSack)])
actions.set(59, [new AutoAction(0, LemmingGift.Hammer)])
actions.set(66, [new AutoAction(0, LemmingGift.BrickSack)])
actions.set(69, [new AutoAction(0, LemmingGift.Hammer)])
actions.set(70, [new AutoAction(0, LemmingGift.Hammer)])

export class StreamStarting extends AutoPlayer {
  constructor(level: BaseLevel) {
    super(level, actions)
  }
}
