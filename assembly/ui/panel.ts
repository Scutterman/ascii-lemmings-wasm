import { renderRelativeElement } from "../loop"
import { VISIBLE_X, BOUNDARIES_X, VISIBLE_Y, BOUNDARIES_Y, CONTROLS_Y } from "../map"
import { Vec2 } from "../position"
import { UIControl } from "./uiControl"
import { UILabel } from './uiLabel'
import { getSizeFromRenderedTextArray, lineBreak } from '../loop'
import { removeItem } from "../vdom/elements"
import { UIITem } from "./uiItem"

const PANEL_ITEM_SPACING: i16 = 3
const TAG_PANEL_LINE_BREAk: string = 'TAG_PANEL_LINE_BREAk'

class PanelRow {
  public texts: string[][] = []
  public sizes: Vec2[] = []
  public panelRowSize: Vec2 = new Vec2(0,0)
  public borders: boolean[] = []
  public panelRowItemIndexes: i32[] = []
}

export class Panel extends UIITem {
  constructor(position: Vec2, public items: UILabel[] = []) {
    super(position)
  }

  public addLinebreak(): void {
    this.items.push(new UILabel(new Vec2(0,0), '', TAG_PANEL_LINE_BREAk))
  }

  public render(isDirty: boolean): void {
    if (this.items.length == 0) { return }

    const nextLabelPosition = this.position.clone()
    
    const rows: PanelRow[] = [new PanelRow()]
    let panelRowIndex = 0
    for (let i = 0; i < this.items.length; i++) {
      const text = this.items[i].getTextForRender(isDirty)
      const size = getSizeFromRenderedTextArray(text)
      
      let x = rows[panelRowIndex].panelRowSize.x + size.x + PANEL_ITEM_SPACING
      
      const isEndOfRow = x > i16(VISIBLE_X)
      const isLastItem = i == this.items.length - 1
      const isLinebreak = this.items[i].getTag() == TAG_PANEL_LINE_BREAk
      
      if (isEndOfRow || isLinebreak) {
        // Do not add spacing to last item
        rows[panelRowIndex].panelRowSize.x -= PANEL_ITEM_SPACING
        rows.push(new PanelRow())
        panelRowIndex++
        if (isLinebreak) {
          continue
        } else {
          x = size.x + PANEL_ITEM_SPACING
        }
      } else if (isLastItem) {
        // Do not add spacing to last item
        x -= PANEL_ITEM_SPACING
      }
      
      rows[panelRowIndex].panelRowSize.x = x
      rows[panelRowIndex].panelRowSize.y = i16(Math.max(rows[panelRowIndex].panelRowSize.y, size.y))
      
      rows[panelRowIndex].texts.push(text)
      rows[panelRowIndex].sizes.push(size)
      rows[panelRowIndex].borders.push(this.items[i] instanceof UIControl)
      rows[panelRowIndex].panelRowItemIndexes.push(i)
    }
    
    const panelSize = new Vec2(0,0)
    for (panelRowIndex = 0; panelRowIndex < rows.length; panelRowIndex++) {
      panelSize.y = rows[panelRowIndex].panelRowSize.y
      panelSize.x = i16(Math.max(panelSize.x, rows[panelRowIndex].panelRowSize.x))
    }

    panelSize.y += PANEL_ITEM_SPACING * (i16(rows.length) - 1)

    if (nextLabelPosition.x == -1) {
      const mapLengthInBlocks = i16(VISIBLE_X + BOUNDARIES_X)
      nextLabelPosition.x = i16(f32(mapLengthInBlocks - panelSize.x) / 2)
    }
    
    if (nextLabelPosition.y == -1) {
      const mapHeightInBlocks = i16(VISIBLE_Y + BOUNDARIES_Y + CONTROLS_Y)
      nextLabelPosition.y = i16(f32(mapHeightInBlocks - panelSize.y) / 2)
    }

    const intiialLabelPosition = nextLabelPosition.clone()
    this.items[0].setPosition(intiialLabelPosition)

    for (panelRowIndex = 0; panelRowIndex < rows.length; panelRowIndex++) {
      const row = rows[panelRowIndex]
      for (let rowItem = 0; rowItem < row.panelRowItemIndexes.length; rowItem++) {
        const itemIndex = row.panelRowItemIndexes[rowItem]
        removeItem(this.items[itemIndex].elementId)
        const id = renderRelativeElement(row.texts[rowItem].join(lineBreak), nextLabelPosition, row.borders[rowItem], '#000000', this.getBackgroundColour())
        this.items[itemIndex].elementId = id
        this.items[itemIndex].setPosition(nextLabelPosition.clone())
        this.items[itemIndex].setSize(row.sizes[rowItem])

        nextLabelPosition.x += row.sizes[rowItem].x + PANEL_ITEM_SPACING
      }
      nextLabelPosition.x = intiialLabelPosition.x
      nextLabelPosition.y += row.panelRowSize.y + PANEL_ITEM_SPACING
    }
  }

  public empty(): void {
    for (let i = 0; i < this.items.length; i++) {
      removeItem(this.items[i].elementId)
    }

    this.items = []
  }
}