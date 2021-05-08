import { renderRelativeElement } from "../loop"
import { VISIBLE_X, BOUNDARIES_X, VISIBLE_Y, BOUNDARIES_Y, CONTROLS_Y } from "../map"
import { Vec2 } from "../position"
import { LevelTiles } from "../types"
import { UIControl } from "./uiControl"
import { UILabel } from './uiLabel'
import { getRenderedTextArray, getSizeFromRenderedTextArray, lineBreak } from '../loop'

export class Panel {
  constructor(public position: Vec2, public items: UILabel[] = []) {}
  public render(map: LevelTiles): void {
    if (this.items.length == 0) { return }

    const nextLabelPosition = this.position.clone()
    this.items[0].setPosition(this.position)
    
    const texts: string[][] = []
    const sizes: Vec2[] = []
    const panelSize: Vec2 = new Vec2(0,0)
    const borders: boolean[] = []
    const panelItemIndexes: i32[] = []
    
    for (let i = 0; i < this.items.length; i++) {
      if (!this.items[i].isVisible(map)) { continue }
      const text = getRenderedTextArray(this.items[i].getText())
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
      renderRelativeElement(texts[i].join(lineBreak), nextLabelPosition, borders[i])
      this.items[panelItemIndexes[i]].setPosition(nextLabelPosition.clone())
      nextLabelPosition.x += sizes[i].x + 3
    }
  }
}