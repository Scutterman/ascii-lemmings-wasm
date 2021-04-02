import { Animation } from "../animation";
import { Lemming } from "../lemming";
import { SurroundingTiles } from "../map";
import { LemmingAction } from "./lemmingAction";

export class Digger extends LemmingAction {
  constructor() {
    super(new Animation([]))
  }
  
  update(lemming: Lemming, surroundingTiles: SurroundingTiles): void {}
}