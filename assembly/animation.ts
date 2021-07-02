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

  public getNextFrameAsText(progressFrame: boolean): string[] {
    const text: string[] = []
    const frame = this.getNextFrame(progressFrame)
    for (let frameRow = 0; frameRow < frame.length; frameRow++) {
      if (frameRow >= text.length) { text.push('') }
      for (let frameCol = 0; frameCol < frame[frameRow].length; frameCol++) {
        text[frameRow] += frame[frameRow][frameCol]
      }
    }

    return text
  }

  public hasNextFrame(): boolean {
    return this.frames.length > 1
  }

  public clone(): Animation {
    return new Animation(this.frames)
  }
}
