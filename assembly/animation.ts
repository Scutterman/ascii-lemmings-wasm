import { AnimationFrame } from "./types"

export class Animation {
  private currentFrameIndex: u8 = 0
  private frames: AnimationFrame[]
  constructor(frames: AnimationFrame[]) {
    this.frames = frames
  }

  public getNextFrame(progressFrame: boolean): AnimationFrame {
    const frame = this.frames[this.currentFrameIndex]

    if (progressFrame) {
      this.currentFrameIndex++
  
      if (this.currentFrameIndex == this.frames.length) {
        this.currentFrameIndex = 0
      }
    }

    return frame
  }
}
