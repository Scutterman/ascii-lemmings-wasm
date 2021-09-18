import { testDirection } from "./map"
import { AnimationFrame } from "./types"

export enum Direction {
  None = 0,
  Left = 1,
  Up = 2,
  Right = 4,
  Down = 8,
  All = 15
}

// Directions flipped to make damage destruction code easier to understand
// A lemming walking right will be able to (or not) destroy the left side of a block etc.
export enum BlockSide {
  None = Direction.None,
  Left = Direction.Right,
  Top = Direction.Down,
  Right = Direction.Left,
  Bottom = Direction.Up,
  All = Direction.All
}

export class Animation {
  private currentFrameIndex: u8 = 0
  private frames: AnimationFrame[]
  private canDestroySides: u32 = BlockSide.None

  constructor(frames: AnimationFrame[]) {
    this.frames = frames
  }

  public reset(): void {
    this.currentFrameIndex = 0
  }

  public getNumberOfFrames(): u8 {
    return u8(this.frames.length)
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

  public addFrame(frame: AnimationFrame): void {
    this.frames.push(frame)
  }

  public setCanDestroySides(canDestroySides: BlockSide): void {
    this.canDestroySides = canDestroySides
  }

  public getCanDestroySides(): BlockSide {
    return this.canDestroySides
  }

  public canDestroy(damageMovingInDirection: Direction): boolean {
    return testDirection(this.canDestroySides, damageMovingInDirection)
  }

  public clone(): Animation {
    const animation = new Animation(this.frames)
    animation.setCanDestroySides(this.canDestroySides)
    return animation
  }
}


export const debugDirection = (direction: Direction): string => {
  let output = ''
  if (testDirection(direction, Direction.Up)) { output += 'Up' }
  if (testDirection(direction, Direction.Down)) { output += 'Down' }
  if (testDirection(direction, Direction.Left)) { output += 'Left' }
  if (testDirection(direction, Direction.Right)) { output += 'Right' }
  return output
}