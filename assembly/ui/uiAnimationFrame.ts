import { Vec2 } from "../position";
import { AnimationFrame } from "../types";
import { Panel } from "./panel";
import { UIControl } from "./uiControl";

let lastClickedFrame: i16 = -1
const lastClickedPosition: Vec2 = new Vec2(-1, -1)

export function reset(): void {
  lastClickedFrame = -1
  lastClickedPosition.x = -1
  lastClickedPosition.y = -1
}

export function getLastFrame(): i16 {
  return lastClickedFrame
}

export class UiAnimationFrame extends Panel {

  constructor(
    position: Vec2,
    private animationFrame: AnimationFrame,
    private frameNumber: i16,
    tag: string = ''
  ) {
    super(position, [], 1, tag)
    this.setupButtons()
  }
  
  private setupButtons(): void {
    for (let row = 0; row < this.animationFrame.length; row++) {
      for (let col = 0; col < this.animationFrame[row].length; col++) {
        const animationCharacter = this.animationFrame[row][col]
        this.addItem(new UIControl(new Vec2(0,0), animationCharacter, tag => {
          if (typeof tag != 'undefined') {
            const positions = tag.split('_')
            if (positions.length >= 3) {
              lastClickedFrame = i16(parseInt(positions[0], 10))
              lastClickedPosition.y = i16(parseInt(positions[1], 10))
              lastClickedPosition.x = i16(parseInt(positions[2], 10))
            }
          }
        }, this.frameNumber.toString() + '_' + row.toString() + '_' + col.toString()))
      }
      this.addLinebreak()
    }
  }

  public canSetNewCharacter(): boolean {
    return (
      lastClickedFrame == this.frameNumber &&
      lastClickedPosition.y >= 0 && lastClickedPosition.y < this.animationFrame.length &&
      lastClickedPosition.x >= 0 && lastClickedPosition.x < this.animationFrame[lastClickedPosition.y].length
    )
  }
  
  public setNewCharacter(newcharacter: string): void {
    if (this.canSetNewCharacter()) {
      const frame = this.frameNumber
      const row = lastClickedPosition.y
      const col = lastClickedPosition.x
      this.animationFrame[row][col] = newcharacter
      const button = this.getUIByTag(frame.toString() + '_' + row.toString() + '_' + col.toString())
      if (button != null) {
        button.updateText(newcharacter)
      }
      this.hasChangedState = true
    }
  }

  public getAnimationFrame(): AnimationFrame {
    return this.animationFrame
  }
}
