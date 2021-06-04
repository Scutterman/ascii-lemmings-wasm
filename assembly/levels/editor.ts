import { messageResponse } from ".."
import { Vec2 } from "../position"
import { Panel } from "../ui/panel"
import { UIControl } from "../ui/uiControl"
import { BaseLevel } from "./baseLevel"
import { DefaultLevel } from "./defaultLevel"
import { MetaScreen } from "./metascreen"

export class Editor extends MetaScreen {
  private actionPanel: Panel = new Panel(new Vec2(-1, 38))
  private levelBeingEdited: BaseLevel = new DefaultLevel()
  private levelLoaded: boolean = false

  constructor() {
    super('EDITOR')

    this.uiPanels.push(this.actionPanel)
    this.actionPanel.items.push(new UIControl(new Vec2(0, 0), "Load", () => {
      // TODO:: Call JS
    }))

    this.actionPanel.items.push(new UIControl(new Vec2(0, 0), "Save", () => {
      messageResponse('save', 'foobar.json', '{ "hello": "world" }')
    }))
  }
  
  public clone(): Editor {
    return new Editor()
  }
}
