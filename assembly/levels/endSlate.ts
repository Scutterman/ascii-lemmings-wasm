import { gameState } from "../index"
import { Vec2 } from "../position"
import { Panel } from "../ui/panel"
import { UIControl } from "../ui/uiControl"
import { UILabel } from "../ui/uiLabel"
import { MetaScreen } from "./metascreen"

const MESSAGE_SUCCESS_1: string = 'You passed the level!'
const MESSAGE_SUCCESS_2: string = 'Can you do it again...?'

const MESSAGE_FAIL_1: string = 'You didn\'t save enough this time'
const MESSAGE_FAIL_2: string = 'Would you like to try again?'

export class EndSlate extends MetaScreen {
  private controlsPanel: Panel = new Panel(new Vec2(-1, 25))

  constructor(private needed: string, private rescued: string) {
    super('END')
    this.uiPanels.push(this.controlsPanel)

    this.controlsPanel.items.push(new UIControl(new Vec2(0, 0), "Restart", () => {
      gameState.restartLastLevel()
    }))
    this.controlsPanel.items.push(new UIControl(new Vec2(0, 0), "Continue", () => {}))

    this.uiLabels.push(new UILabel(new Vec2(-1, 10), 'All lemmings accounted for'))
    this.uiLabels.push(new UILabel(new Vec2(-1, 15), 'You needed ' + needed))
    this.uiLabels.push(new UILabel(new Vec2(-1, 16), 'You rescued ' + rescued))

    if (rescued >= needed) {
      this.uiLabels.push(new UILabel(new Vec2(-1, 20), MESSAGE_SUCCESS_1))
      this.uiLabels.push(new UILabel(new Vec2(-1, 21), MESSAGE_SUCCESS_2))
    } else {
      this.uiLabels.push(new UILabel(new Vec2(-1, 20), MESSAGE_FAIL_1))
      this.uiLabels.push(new UILabel(new Vec2(-1, 21), MESSAGE_FAIL_2))
    }
  }

  public clone(): EndSlate {
    return new EndSlate(this.needed, this.rescued)
  }
}
