import { Fall } from "./actions/fall";
import { LemmingAction } from "./actions/lemmingAction";
import { SurroundingTiles } from "./map";
import { Vec2 } from "./position";

export class Lemming {
  movingRight: boolean = true
  removed: boolean = false
  exited: boolean = false
  actionTimeLeft: u16 = 0
  action: LemmingAction = new Fall()
  position: Vec2 = new Vec2(4, 3)
  hasUmbrella: boolean = false
  isClimber: boolean = false

  public update(surroundingTiles: SurroundingTiles): void {
    this.action.update(this, surroundingTiles)
  }
}
