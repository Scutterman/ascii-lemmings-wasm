export abstract class AutoPlayer {
  protected frameNumber: u32 = 0
  // TODO:: Assemblyscript doesn't like game state loading levels in the constructor
  abstract update(): void
  
  protected advanceFrame(): void {
    this.frameNumber++
  }
}
