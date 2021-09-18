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

  public clone(): Vec2 { return new Vec2(this.x, this.y) }

  public toString(): string { return this.x.toString() + ',' + this.y.toString() }
}

export class Rect {
  constructor(public position: Vec2, public size: Vec2) {}
}
