import { BaseLevel } from "./baseLevel";

export class DefaultLevel extends BaseLevel {
  constructor() {
    super(0,0,[],true)
  }
  public updateLemmings(): void {}
  public gameLoop(): void {}
  public clone(): BaseLevel {
    return new DefaultLevel()
  }
}
