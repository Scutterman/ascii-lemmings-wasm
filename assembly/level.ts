
export class Level {
  constructor(
    public numberOfLemmings: u8,
    public numberOfLemmingsForSucces: u8,
    public map: string[]) {}
}

export enum LevelState {
  TitleScreen,
  LevelSelect,
  LevelRunning,
  EndSlate
}
