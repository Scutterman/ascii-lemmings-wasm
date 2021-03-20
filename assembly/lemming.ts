
export enum LemmingAction {
  Fall,
  Walk,
  Climb,
  Float,
  Explode,
  Block,
  Build,
  Bash,
  Mine,
  Dig,
  Exited
}

export interface Lemming {
  movingUp: boolean
  movingDown: boolean
  movingLeft: boolean
  movingRight: boolean
  removed: boolean
  actionTimeLeft: u16
  action: LemmingAction
}
