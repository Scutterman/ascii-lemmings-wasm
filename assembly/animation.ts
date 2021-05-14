import { AnimationFrame } from "./types"

export class Animation {
  private currentFrameIndex: u8 = 0
  private frames: AnimationFrame[]
  constructor(frames: AnimationFrame[]) {
    this.frames = frames
  }

  public reset(): void {
    this.currentFrameIndex = 0
  }

  public getNextFrame(progressFrame: boolean): AnimationFrame {
    if (this.frames.length == 0) { return [] }
    const frame = this.frames[this.currentFrameIndex]

    if (progressFrame) {
      this.currentFrameIndex++
  
      if (this.currentFrameIndex == this.frames.length) {
        this.currentFrameIndex = 0
      }
    }

    return frame
  }

  public clone(): Animation {
    return new Animation(this.frames)
  }
}
