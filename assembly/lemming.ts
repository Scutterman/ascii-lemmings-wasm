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
  movingUp: boolean
  movingDown: boolean
  movingLeft: boolean
  movingRight: boolean
  removed: boolean
  actionTimeLeft: u16
  action: LemmingAction
  position: Vec2
}

export function lemmingActionToCharacter(action: LemmingAction): string {
  return LemmingActionMap[action]
}
