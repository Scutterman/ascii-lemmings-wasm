import { Vec2 } from "../position";
import { BaseLevel } from "./baseLevel";

export class DefaultLevel extends BaseLevel {
  constructor() {
    super(0,0,[],true)
  }
  public updateLemmings(): void {}
  public gameLoop(): void {}
  public nuke(): void {}
  public isBlockerInLocation(location: Vec2): boolean { return false }
  public processLemmingSelect(mouseTileX: i32, mouseTileY: i32): boolean {
    return true
  }
  public clone(): BaseLevel {
    return new DefaultLevel()
  }
}
