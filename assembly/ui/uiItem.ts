import { Vec2 } from "../position";
import { removeItem } from "../vdom/elements";

export class UIITem {
  public elementId: string = ''
  private backgroundColour: string = '#ffffff00'
  private colour: string = '#000000'
  protected showing: boolean = true
  protected hasChangedState: boolean = true

  constructor(public position: Vec2, protected tag: string = '') {}
  
  public getTag(): string { return this.tag }

  public setBackgroundColour(newColour: string): void {
    this.backgroundColour = newColour
    this.hasChangedState = true
  }

  public getBackgroundColour(): string {
    return this.backgroundColour
  }

  public setColour(newColour: string): void {
    this.colour = newColour
    this.hasChangedState = true
  }

  public getColour(): string {
    return this.colour
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