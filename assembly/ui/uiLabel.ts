import { Vec2 } from "../position";

export class UILabel {
  constructor(
    protected positionOnScreen: Vec2,
    protected text: string
  ) { }

  public getPosition(): Vec2 { return this.positionOnScreen }
  public getText(): string { return '|' + this.text  + '|' }
}
