import { defaultColour } from "../colours";
import { Vec2 } from "../position";
import { removeItem } from "../vdom/elements";

export class UIITem {
  public elementId: string = ''
  private backgroundColour: string = '#ffffff00'
  private colour: string = defaultColour
  protected showing: boolean = true
  protected hasChangedState: boolean = true
  private size: Vec2 = new Vec2(0,0)

  constructor(public position: Vec2, protected tag: string = '') {}
  
  public getTag(): string { return this.tag }
  
  public getSize(): Vec2 { return this.size.clone() }
  public setSize(size: Vec2): void { this.size = size.clone() }

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