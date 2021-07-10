import { renderRelativeElement } from "../loop"
import { VISIBLE_X, BOUNDARIES_X, VISIBLE_Y, BOUNDARIES_Y, CONTROLS_Y } from "../map"
import { Vec2 } from "../position"
import { UIControl } from "./uiControl"
import { UILabel } from './uiLabel'
import { getSizeFromRenderedTextArray, lineBreak } from '../loop'
import { removeItem } from "../vdom/elements"
import { UIITem } from "./uiItem"

export const PANEL_ITEM_SPACING: i16 = 3
const TAG_PANEL_LINE_BREAk: string = 'TAG_PANEL_LINE_BREAk'

class PanelRow {
  public texts: string[][] = []
  public sizes: Vec2[] = []
  public panelRowSize: Vec2 = new Vec2(0,0)
  public borders: boolean[] = []
  public panelRowItemIndexes: i32[] = []
}

export class Panel extends UIITem {
  private rows: PanelRow[] = []
  private requiresPrerender: boolean = true

  constructor(position: Vec2, private items: UILabel[] = [], private panelSpacing: i16 = PANEL_ITEM_SPACING, tag: string = '') {
    super(position, tag)
  }

  public addLinebreak(): void {
    this.items.push(new UILabel(new Vec2(0,0), '', TAG_PANEL_LINE_BREAk))
    this.hasChangedState = true
  }

  public addItem(item: UILabel): void {
    this.items.push(item)
    this.hasChangedState = true
  }

  public getItems(): UILabel[] { return this.items }
  
  public getUIByTag(tag: string): UILabel | null {
    for (let j = 0; j < this.items.length; j++) {
      if (this.items[j].getTag() == tag) {
        return this.items[j]
      }
    }

    return null
  }

  public preRender(isDirty: boolean, parentShowing: boolean, wrapOverridePosition: Vec2, deferToParent: boolean = false): void {
    this.setSize(new Vec2(0, 0))

    if (this.items.length == 0) { return }

    this.rows = [new PanelRow()]
    let panelRowIndex = 0
    let hasItemsShowing = this.hasChangedState
    for (let i = 0; i < this.items.length; i++) {
      if (!this.items[i].isShowing() || !this.items[i].requiresRender()) { continue }
      
      removeItem(this.items[i].elementId)
      
      if (!this.isShowing() || !parentShowing) { continue }
      
      hasItemsShowing = true

      const text = this.items[i].getTextForRender(isDirty)
      const size = getSizeFromRenderedTextArray(text)
      
      let x = this.rows[panelRowIndex].panelRowSize.x + size.x + this.panelSpacing
      let xx = this.position.x + x
      
      const itemOverflowsPanel = xx > i16(VISIBLE_X)
      const isLastItem = i == this.items.length - 1
      const isLinebreak = this.items[i].getTag() == TAG_PANEL_LINE_BREAk
      
      // if item will overflow panel
      //   if deferToParent is false
      //      move item to new line
      //   if deferToParent is true
      //      move panel to new line
      //      if line still overflows
      //        move item to new line
      if (itemOverflowsPanel || isLinebreak) {
        let shouldMoveToNewRow = true
        if (itemOverflowsPanel && deferToParent) {
          this.position = wrapOverridePosition.clone()
          shouldMoveToNewRow = this.position.x + x > i16(VISIBLE_X)
        }

        if (shouldMoveToNewRow) {
          // Do not add spacing to last item
          this.rows[panelRowIndex].panelRowSize.x -= this.panelSpacing
          this.rows.push(new PanelRow())
          panelRowIndex++
          if (isLinebreak) {
            continue
          } else {
            x = size.x + this.panelSpacing
          }
        } else if (isLastItem) {
          // Do not add spacing to last item
          x -= this.panelSpacing
        }
      }
      
      this.rows[panelRowIndex].panelRowSize.x = x
      this.rows[panelRowIndex].panelRowSize.y = i16(Math.max(this.rows[panelRowIndex].panelRowSize.y, size.y))
      
      this.rows[panelRowIndex].texts.push(text)
      this.rows[panelRowIndex].sizes.push(size)
      this.rows[panelRowIndex].borders.push(this.items[i] instanceof UIControl)
      this.rows[panelRowIndex].panelRowItemIndexes.push(i)
    }

    if (!hasItemsShowing) { return }
    
    const panelSize = new Vec2(0,0)
    for (panelRowIndex = 0; panelRowIndex < this.rows.length; panelRowIndex++) {
      panelSize.y += this.rows[panelRowIndex].panelRowSize.y
      panelSize.x = i16(Math.max(panelSize.x, this.rows[panelRowIndex].panelRowSize.x))
    }

    panelSize.y += this.panelSpacing * (i16(this.rows.length) - 1)

    this.setSize(panelSize.clone())
    this.requiresPrerender = false
  }

  public render(isDirty: boolean, parentShowing: boolean = true): void {
    if (this.items.length == 0) { return }

    if (this.requiresPrerender) {
      this.preRender(isDirty, parentShowing, this.position.clone())
    }
    
    const nextLabelPosition = this.position.clone()
    
    if (nextLabelPosition.x == -1) {
      const mapLengthInBlocks = i16(VISIBLE_X + BOUNDARIES_X)
      nextLabelPosition.x = i16(f32(mapLengthInBlocks - this.getSize().x) / 2)
    }
    
    if (nextLabelPosition.y == -1) {
      const mapHeightInBlocks = i16(VISIBLE_Y + BOUNDARIES_Y + CONTROLS_Y)
      nextLabelPosition.y = i16(f32(mapHeightInBlocks - this.getSize().y) / 2)
    }

    const intiialLabelPosition = nextLabelPosition.clone()
    this.items[0].setPosition(intiialLabelPosition)

    for (let panelRowIndex = 0; panelRowIndex < this.rows.length; panelRowIndex++) {
      const row = this.rows[panelRowIndex]
      for (let rowItem = 0; rowItem < row.panelRowItemIndexes.length; rowItem++) {
        const itemIndex = row.panelRowItemIndexes[rowItem]
        const id = renderRelativeElement(row.texts[rowItem].join(lineBreak), nextLabelPosition, row.borders[rowItem], this.items[itemIndex].getColour(), this.getBackgroundColour())
        this.items[itemIndex].elementId = id
        this.items[itemIndex].setPosition(nextLabelPosition.clone())
        this.items[itemIndex].setSize(row.sizes[rowItem])

        nextLabelPosition.x += row.sizes[rowItem].x + this.panelSpacing
      }
      nextLabelPosition.x = intiialLabelPosition.x
      nextLabelPosition.y += row.panelRowSize.y + this.panelSpacing
    }

    this.hasChangedState = false
    this.requiresPrerender = true
  }

  public empty(): void {
    this.removeItemsFromUI()
    this.items = []
    this.hasChangedState = true
  }

  public removeItemsFromUI(): void {
    for (let i = 0; i < this.items.length; i++) {
      removeItem(this.items[i].elementId)
    }
  }
}