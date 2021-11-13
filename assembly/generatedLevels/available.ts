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
const availableLevels_AUTO: LevelMetadata[] = []
availableLevels_AUTO.push(new LevelMetadata("STARTING_SOON",1,"SOON","AUTO"))
export function getAvailableLevels(difficulty: string): LevelMetadata[] | null {
 if (false) { return null }
else if (difficulty == "fun") { return availableLevels_fun }
else if (difficulty == "AUTO") { return availableLevels_AUTO }
else { return null }}
