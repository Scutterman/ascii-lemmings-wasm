import { messageResponse } from ".."
import { Vec2 } from "../position"
import { Panel } from "../ui/panel"
import { UIControl } from "../ui/uiControl"
import { MetaScreen } from "./metascreen"

export class Editor extends MetaScreen {
  private actionPanel: Panel = new Panel(new Vec2(-1, 38))
  private levelLoaded: boolean = false
  private selectedBlockKey: string = ''
  private selectedBlockX: i32 = -1
  private selectedBlockY: i32 = -1
  private metaMap: LevelMapDetail = new LevelMapDetail([])

  constructor() {
    super('EDITOR')

    this.uiPanels.push(this.actionPanel)
    this.actionPanel.items.push(new UIControl(new Vec2(0, 0), "Load", () => {
      messageResponse('load', '', '')
    }))

    this.actionPanel.items.push(new UIControl(new Vec2(0, 0), "Save", () => {
      messageResponse('save', 'foobar.json', '{ "hello": "world" }')
    }))


  public mapSquareClicked(mouseTileX: i32, mouseTileY: i32): void {
    if (mouseTileY >= 0 && mouseTileY < this.metaMap.tiles.length && mouseTileX >= 0 && mouseTileY < this.metaMap.tiles[mouseTileY].length) {
      this.selectedBlockKey = mouseTileX.toString() + ',' + mouseTileY.toString()
      this.selectedBlockX = mouseTileX
      this.selectedBlockY = mouseTileY
    }
  }

  public mapSwapped(map: LevelMapDetail): void {
    this.mapRendered = false
    this.metaMap = map
    this.map = this.metaMap.toTileDetail()
  }

  public clone(): Editor {
    return new Editor()
  }
}
