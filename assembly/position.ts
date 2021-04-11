export class Vec2 {
  x: i16
  y: i16

  constructor(x: i16, y: i16) {
    this.x = x
    this.y = y
  }

  public equals(vec2: Vec2): boolean {
    return this.x == vec2.x && this.y == vec2.y
  }
}