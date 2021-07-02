import { Vec2 } from "../position";

export class UIITem {
  private backgroundColour: string = '#ffffff00'
  private showing: boolean = true

  constructor(public position: Vec2) {}

  public setBackgroundColour(newColour: string): void {
     this.backgroundColour = newColour
  }

  public getBackgroundColour(): string {
    return this.backgroundColour
  }

  public isShowing(): boolean { return this.showing }
  public show(): void { this.showing = true }
  public hide(): void { this.showing = false }
}