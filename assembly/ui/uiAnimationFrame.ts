import { Vec2 } from "../position";
import { UIControl } from "./uiControl";

export class UiAnimationFrame extends UIControl {
  constructor(
    position: Vec2,
    private animationFrame: string[],
    tag: string = ''
  ) {
    super(position, '', () => {}, tag)
  }

  /** start overrides */
  public clicked(): void { }
  /** end overrides */

  public getTextForRender(_isDirty: boolean): string[] {
    return this.animationFrame
  }
}
