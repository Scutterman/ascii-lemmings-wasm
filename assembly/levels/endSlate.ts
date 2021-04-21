import { gameState } from "../index"
import { Vec2 } from "../position"
import { insertText } from "../text"
import { UIControl } from "../ui/uiControl"
import { MetaScreen } from "./metascreen"

const MESSAGE_SUCCESS_1: string = 'You passed the level!'
const MESSAGE_SUCCESS_2: string = 'Can you do it again...?'

const MESSAGE_FAIL_1: string = 'You didn\'t save enough this time'
const MESSAGE_FAIL_2: string = 'Would you like to try again?'

export class EndSlate extends MetaScreen {
  constructor(private needed: string, private rescued: string) {
    super('END')

    this.uiControls.push(new UIControl(new Vec2(25, 25), "Restart", () => {
      gameState.restartLastLevel()
    }))
    this.uiControls.push(new UIControl(new Vec2(37, 25), "Continue", () => {}))

    let endSlateToRender = this.cloneMap()
    endSlateToRender = insertText(endSlateToRender, 'All lemmings accounted for', new Vec2(-1, 10))
    endSlateToRender = insertText(endSlateToRender, 'You needed ' + needed, new Vec2(-1, 15))
    endSlateToRender = insertText(endSlateToRender, 'You rescued ' + rescued, new Vec2(-1, 16))

    if (rescued >= needed) {
      endSlateToRender = insertText(endSlateToRender, MESSAGE_SUCCESS_1, new Vec2(-1, 20))
      endSlateToRender = insertText(endSlateToRender, MESSAGE_SUCCESS_2, new Vec2(-1, 21))
    } else {
      endSlateToRender = insertText(endSlateToRender, MESSAGE_FAIL_1, new Vec2(-1, 20))
      endSlateToRender = insertText(endSlateToRender, MESSAGE_FAIL_2, new Vec2(-1, 21))
    }

    this.map = endSlateToRender
  }

  public renderLevel(): void {
    const map = this.cloneMap()
    this.render(map, true)
    this.renderControls()
  }

  public clone(): EndSlate {
    return new EndSlate(this.needed, this.rescued)
  }
}
