import { Vec2 } from "../position";
import { LemmingGift, LevelTileDetail, LevelTiles } from "../types";
import { BaseLevel } from "./baseLevel";

export class DefaultLevel extends BaseLevel {
  constructor() {
    super('DEFAULT', 0,0,[],true)
  }
  public updateLemmings(): void {}
  public gameLoop(): boolean { return true}
  public nuke(): void {}
  public skillUsed(skill: LemmingGift): void {}
  public skillSelected(skill: LemmingGift): void {}
  public canUseSkill(skill: LemmingGift): boolean { return false }
  public giveGiftToLemming(lemmingNumber: u8, gift: LemmingGift): void {}
  public renderLevel(): void {}
  protected render(map: LevelTileDetail, isRenderingGameSection: boolean): void { }
  public processLemmingSelect(mouseTileX: i32, mouseTileY: i32, processLemmingClick: boolean): boolean {
    return true
  }
  public clone(): BaseLevel {
    return new DefaultLevel()
  }
}
