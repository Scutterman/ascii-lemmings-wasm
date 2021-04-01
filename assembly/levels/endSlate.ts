import { gameState } from "../index"
import { mapToTiles } from "../map"
import { Vec2 } from "../position"
import { insertText } from "../text"
import { UIControl } from "../UIControl"
import { Level } from "./level"
import { LevelTiles } from '../types'

const MESSAGE_SUCCESS_1: string = 'You passed the level!'
const MESSAGE_SUCCESS_2: string = 'Can you do it again...?'

const MESSAGE_FAIL_1: string = 'You didn\'t save enough this time'
const MESSAGE_FAIL_2: string = 'Would you like to try again?'

export class EndSlate extends Level {
  constructor() {
    super(0, 0, mapToTiles([
      '__________________________________',
      '|   All lemmings accounted for   |',
      '|        You needed              |',
      '|        You rescued             |',
      '|                                |',
      '|                                |',
      '|                                |',
      '__________________________________'
    ]), true)

    this.uiControls.push(new UIControl(new Vec2(6, 4), "Restart", () => {
      gameState.restartLastLevel()
    }))
    this.uiControls.push(new UIControl(new Vec2(17, 4), "Continue", () => {}))
  }

  public getEndScreen(needed: string, rescued: string): LevelTiles {
    let endSlateToRender = this.cloneMap()
    endSlateToRender = insertText(endSlateToRender, needed, new Vec2(21, 2))
    endSlateToRender = insertText(endSlateToRender, rescued, new Vec2(21, 3))

    if (rescued > needed) {
      endSlateToRender = insertText(endSlateToRender, MESSAGE_SUCCESS_1, new Vec2(-1, 5))
      endSlateToRender = insertText(endSlateToRender, MESSAGE_SUCCESS_2, new Vec2(-1, 6))
    } else {
      endSlateToRender = insertText(endSlateToRender, MESSAGE_FAIL_1, new Vec2(-1, 5))
      endSlateToRender = insertText(endSlateToRender, MESSAGE_FAIL_2, new Vec2(-1, 6))
    }

    return endSlateToRender
  }
}


