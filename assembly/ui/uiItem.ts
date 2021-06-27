import { Vec2 } from "../position";

export class UIITem {
  private backgroundColour: string = '#ffffff00'
  constructor(public position: Vec2) {}

  public setBackgroundColour(newColour: string): void {
     this.backgroundColour = newColour
  }

  public getBackgroundColour(): string {
    return this.backgroundColour
  }
}