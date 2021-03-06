import { Vec2 } from "../position"
import { UILabel } from './uiLabel'
import { UIITem } from "./uiItem"
import { Panel, PANEL_ITEM_SPACING } from "./panel"

const TAG_PANEL_LINE_BREAk: string = 'TAG_PANEL_LINE_BREAk'

export class PanelContainer extends UIITem {
  constructor(position: Vec2, private items: Panel[] = [], private panelItemSpacing: i16 = PANEL_ITEM_SPACING, tag: string = '') {
    super(position, tag)
  }

  public addLinebreak(): void {
    this.items.push(new Panel(new Vec2(0,0), [], this.panelItemSpacing, TAG_PANEL_LINE_BREAk))
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
      if (this.items[i].getTag() == TAG_PANEL_LINE_BREAk) {
        nextPosition.y += rowMaxY + this.panelItemSpacing
        rowMaxY = 0
        nextPosition.x = this.position.x
        continue
      }
      
      this.items[i].position = nextPosition.clone()
      const wrapOverridePosition = new Vec2(this.position.x, nextPosition.y + rowMaxY + this.panelItemSpacing)
      this.items[i].preRender(isDirty, this.isShowing(), wrapOverridePosition, true)
      const size = this.items[i].getSize()
      
      if (this.items[i].position.x == wrapOverridePosition.x && this.items[i].position.y == wrapOverridePosition.y) {
        nextPosition.x = wrapOverridePosition.x
        nextPosition.y = wrapOverridePosition.y
        rowMaxY = 0
      }
      
      nextPosition.x += size.x + this.panelItemSpacing
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
