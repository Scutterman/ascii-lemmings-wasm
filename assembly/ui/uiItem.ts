import { Vec2 } from "../position";
import { removeItem } from "../vdom/elements";

export class UIITem {
  public elementId: string = ''
  private backgroundColour: string = '#ffffff00'
  protected showing: boolean = true
  protected hasChangedState: boolean = false

  constructor(public position: Vec2) {}

  public setBackgroundColour(newColour: string): void {
    this.backgroundColour = newColour
    this.hasChangedState = true
  }

  public getBackgroundColour(): string {
    return this.backgroundColour
  }

  public isShowing(): boolean { return this.showing }
  public requiresRender(): boolean { return this.hasChangedState }
  
  public show(): void {
    this.showing = true
    this.hasChangedState = true
  }
  
  public hide(): void {
    removeItem(this.elementId)
    this.showing = false
    this.hasChangedState = true
  }
}