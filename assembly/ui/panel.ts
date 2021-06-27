import { renderRelativeElement } from "../loop"
import { VISIBLE_X, BOUNDARIES_X, VISIBLE_Y, BOUNDARIES_Y, CONTROLS_Y } from "../map"
import { Vec2 } from "../position"
import { UIControl } from "./uiControl"
import { UILabel } from './uiLabel'
import { getSizeFromRenderedTextArray, lineBreak } from '../loop'
import { removeItem } from "../vdom/elements"
import { UIITem } from "./uiItem"

export class Panel extends UIITem {
  constructor(position: Vec2, public items: UILabel[] = []) {
    super(position)
  }

  public render(isDirty: boolean): void {
    if (this.items.length == 0) { return }

    const nextLabelPosition = this.position.clone()
    this.items[0].setPosition(this.position)
    
    const texts: string[][] = []
    const sizes: Vec2[] = []
    const panelSize: Vec2 = new Vec2(0,0)
    const borders: boolean[] = []
    const panelItemIndexes: i32[] = []
    
    for (let i = 0; i < this.items.length; i++) {
      const text = this.items[i].getTextForRender(isDirty)
      const size = getSizeFromRenderedTextArray(text)
      texts.push(text)
      sizes.push(size)
      borders.push(this.items[i] instanceof UIControl)
      panelItemIndexes.push(i)
      panelSize.x += size.x
      panelSize.y = i16(Math.max(panelSize.y, size.y))
    }

    if (nextLabelPosition.x == -1) {
      const mapLengthInBlocks = i16(VISIBLE_X + BOUNDARIES_X)
      nextLabelPosition.x = i16(f32(mapLengthInBlocks - panelSize.x) / 2)
    }
    
    if (nextLabelPosition.y == -1) {
      const mapHeightInBlocks = i16(VISIBLE_Y + BOUNDARIES_Y + CONTROLS_Y)
      nextLabelPosition.y = i16(f32(mapHeightInBlocks - panelSize.y) / 2)
    }

    for (let i = 0; i < texts.length; i++) {
      removeItem(this.items[panelItemIndexes[i]].elementId)
      const id = renderRelativeElement(texts[i].join(lineBreak), nextLabelPosition, borders[i])
      this.items[panelItemIndexes[i]].elementId = id
      this.items[panelItemIndexes[i]].setPosition(nextLabelPosition.clone())
      this.items[panelItemIndexes[i]].setSize(sizes[i])
      nextLabelPosition.x += sizes[i].x + 3
    }
  }

  public empty(): void {
    for (let i = 0; i < this.items.length; i++) {
      removeItem(this.items[i].elementId)
    }

    this.items = []
  }
}