import { Vec2 } from "../position"
import { UILabel } from './uiLabel'

export class Panel {
  constructor(public position: Vec2, public items: UILabel[] = []) {}
}