class LevelMetadata {
  constructor (
    public name: string,
    public number: number,
    public code: string,
    public difficulty: string
  ) {}
}
const availableLevels_fun: LevelMetadata[] = []
availableLevels_fun.push(new LevelMetadata("Just dig!",1,"CAJJLDLBCS","fun"))
export function getAvailableLevels(difficulty: string): LevelMetadata[] | null {
 if (false) { return null }
else if (difficulty == "fun") { return availableLevels_fun }
else { return null }}
