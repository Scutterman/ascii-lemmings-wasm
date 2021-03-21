import { SurroundingTiles, TILE_AIR } from "./map";
import { Vec2 } from "./position";

export enum LemmingAction {
  Fall = 0,
  Walk = 1,
  Climb = 2,
  Float = 3,
  Explode = 4,
  Block = 5,
  Build = 6,
  Bash = 7,
  Mine = 8,
  Dig = 9,
  Exited = 10
}

const LemmingActionMap: string[] = ['F','W','C','U','*','T','/','B','\\','D','X']

export class Lemming {
  movingUp: boolean = false
  movingDown: boolean = true
  movingLeft: boolean = false
  movingRight: boolean = true
  removed: boolean = false
  actionTimeLeft: u16 = 0
  action: LemmingAction = LemmingAction.Fall
  position: Vec2 = { x: 4, y: 3}
  
  public update(surroundingTiles: SurroundingTiles): void {
    switch (this.action) {
      case LemmingAction.Fall:
        if (surroundingTiles.bottomCentre != TILE_AIR) {
          this.action = LemmingAction.Walk
        } else {
          this.position.y--
        }
        break
        case LemmingAction.Walk:
          if ((this.movingLeft && surroundingTiles.left != TILE_AIR) || (this.movingRight && surroundingTiles.right != TILE_AIR)) {
            this.movingLeft = !this.movingLeft
            this.movingRight = !this.movingRight
          } else {
            this.position.x += 1 * (this.movingLeft ? -1 : 1)
          }
          break
    }
  }
}

export function lemmingActionToCharacter(action: LemmingAction): string {
  return LemmingActionMap[action]
}
