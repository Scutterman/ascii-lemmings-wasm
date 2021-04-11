import { Animation } from "../animation";
import { Lemming } from "../lemming";
import { SurroundingTiles } from "../map";
import { LemmingAction } from "./lemmingAction";

export class NoopAction extends LemmingAction {
  public isNoopAction: boolean = true

  update(lemming: Lemming, surroundingTiles: SurroundingTiles): void {}

  public label(): string { return '' }
  
  constructor() {
    super(new Animation([]))
  }
}