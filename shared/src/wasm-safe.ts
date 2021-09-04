export const allowedUserInputCharacters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 :_-\'^#\\/|'.split('')

export class LevelMetadata {
  public skills: Map<string, number> = new Map()
  
  constructor (
    public name: string,
    public number: number,
    public code: string,
    public difficulty: string,
    public textureGroup: string,
    public numberOfLemmings: number,
    public numberOfLemmingsForSuccess: number
  ) {}
}

export const stringOnlyContainsSafeCharacters = (str: string, safeCharacters: string[]): boolean => {
  const splitString = str.split('')
  for (let i = 0; i < splitString.length; i++) {
    if (!safeCharacters.includes(splitString[i])) {
      return false
    }
  }

  return true
}