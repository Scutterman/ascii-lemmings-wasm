import { Vec2 } from "../position"
import { UILabel } from './uiLabel'
import { UIITem } from "./uiItem"
import { Panel } from "./panel"

const PANEL_ITEM_SPACING: i16 = 3
const TAG_PANEL_LINE_BREAk: string = 'TAG_PANEL_LINE_BREAk'

export class PanelContainer extends UIITem {
  constructor(position: Vec2, private items: Panel[] = [], tag: string = '') {
    super(position, tag)
  }

  public addLinebreak(): void {
    this.items.push(new Panel(new Vec2(0,0), [], TAG_PANEL_LINE_BREAk))
    this.hasChangedState = true
  }

  public addItem(item: Panel): void {
    this.items.push(item)
    this.hasChangedState = true
  }

  public getItems(): Panel[] { return this.items }
  
  public getUIByTag(tag: string): UILabel | null {
    for (let j = 0; j < this.items.length; j++) {
      const item = this.items[j].getUIByTag(tag)
      if (item != null) {
        return item
      }
    }

    return null
  }

  public render(isDirty: boolean): void {
    if (this.items.length == 0) { return }
    
    const nextPosition = this.position.clone()
    let rowMaxY: i16 = 0
    
    for (let i = 0; i < this.items.length; i++) {
      this.items[i].position = nextPosition.clone()
      const wrapOverridePosition = new Vec2(this.position.x, nextPosition.y + rowMaxY + PANEL_ITEM_SPACING)
      this.items[i].preRender(isDirty, this.isShowing(), wrapOverridePosition)
      const size = this.items[i].getSize()
      
      if (this.items[i].position.x == wrapOverridePosition.x && this.items[i].position.y == wrapOverridePosition.y) {
        nextPosition.x = wrapOverridePosition.x
        nextPosition.y = wrapOverridePosition.y
        rowMaxY = 0
      }
      
      nextPosition.x += size.x
      rowMaxY = i16(Math.max(rowMaxY, size.y))
      this.items[i].render(isDirty, this.isShowing())
    }
    
    this.hasChangedState = false
  }

  public empty(): void {
    for (let i = 0; i < this.items.length; i++) {
      this.items[i].removeItemsFromUI()
    }

    this.items = []
    this.hasChangedState = true
  }
}
