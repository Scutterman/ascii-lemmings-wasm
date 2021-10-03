import { Vec2 } from "../position"
import { UILabel } from './uiLabel'
import { UIITem } from "./uiItem"
import { Panel, PANEL_ITEM_SPACING } from "./panel"

const TAG_PANEL_LINE_BREAk: string = 'TAG_PANEL_LINE_BREAk'

class PanelContainerRow {
  public panels: Panel[] = []
  public size: Vec2 = new Vec2(0,0)
}

export class PanelContainer extends UIITem {
  private rowScroll: u8 = 0
  private currentRow: u8 = 0

  constructor(position: Vec2, private items: Panel[] = [], private panelItemSpacing: i16 = PANEL_ITEM_SPACING, tag: string = '') {
    super(position, tag)
  }

  public scrollUp(): void {
    if (this.rowScroll > 0) {
      this.rowScroll--
    }
  }
  
  public scrollDown(): void {
    this.rowScroll++
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

  private compileItems(isDirty: boolean): PanelContainerRow[] {
    const rows: PanelContainerRow[] = []
    if (this.items.length == 0) { return rows }
    
    const nextPosition = this.position.clone()
    let currentRow = new PanelContainerRow()
    
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].getTag() == TAG_PANEL_LINE_BREAk) {
        currentRow.size.x = nextPosition.x
        nextPosition.y += currentRow.size.y + this.panelItemSpacing
        nextPosition.x = this.position.x
        rows.push(currentRow)
        currentRow = new PanelContainerRow()
        continue
      }
      
      this.items[i].position = nextPosition.clone()
      const wrapOverridePosition = new Vec2(this.position.x, nextPosition.y + currentRow.size.y + this.panelItemSpacing)
      this.items[i].preRender(isDirty, this.isShowing(), wrapOverridePosition, true)
      const size = this.items[i].getSize()
      
      if (this.panelHasWrapped(this.items[i], wrapOverridePosition)) {
        currentRow.size.x = nextPosition.x
        nextPosition.x = wrapOverridePosition.x
        nextPosition.y = wrapOverridePosition.y
        rows.push(currentRow)
        currentRow = new PanelContainerRow()
      }
      
      nextPosition.x += size.x + this.panelItemSpacing
      currentRow.size.y = i16(Math.max(currentRow.size.y, size.y))
      currentRow.panels.push(this.items[i])
    }
    
    currentRow.size.x = nextPosition.x
    rows.push(currentRow)
    return rows
  }

  public render(isDirty: boolean): void {
    this.currentRow = 0
    let yOffset: i16 = 0
    const rows = this.compileItems(isDirty)
    if (rows.length == 0) { return }
    
    for (let rowIndex = 0; rowIndex < rows.length; rowIndex++) {
      const row = rows[rowIndex]
      
      if (u8(rowIndex) < this.rowScroll) {
        yOffset += row.size.y
        continue
      }
      
      if (row.size.x == 0 || row.size.y == 0) { continue }

      const panels = row.panels
      for (let panelIndex = 0; panelIndex < panels.length; panelIndex++) {
        const panel = panels[panelIndex]
        panel.position.y -= yOffset
        panels[panelIndex].render(isDirty, this.isShowing())
      }
    }
    
    this.hasChangedState = false
  }

  private panelHasWrapped(panel: Panel, positionIfWrapped: Vec2): boolean {
    return panel.position.x == positionIfWrapped.x && panel.position.y == positionIfWrapped.y
  }

  public empty(): void {
    for (let i = 0; i < this.items.length; i++) {
      this.items[i].removeItemsFromUI()
    }

    this.items = []
    this.hasChangedState = true
  }
}
