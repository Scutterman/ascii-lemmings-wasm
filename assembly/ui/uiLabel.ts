import { Vec2 } from "../position";

export class UILabel {
  constructor(
    protected positionOnScreen: Vec2,
    protected text: string,
    protected tag: string = ''
  ) { }

  public getPosition(): Vec2 { return this.positionOnScreen }
  public getText(): string { return '|' + this.text  + '|' }
  public getTag(): string { return this.tag }
  public updateText(text: string): void { this.text = text }
}