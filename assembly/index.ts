import { StreamStarting } from './autoplayer/StreamStarting'
import { StreamStartingLevel } from './autoplayer/streamStartingLevel'
import { GameState } from './gameState'
import { TitleScreen } from './levels/titleScreen'

export const gameState = new GameState()

export { triggerEventLoop, setCharacterDimensions, setScreenDimensions, updateMouseCoordinates, registerMouseClick } from './loop'

const useAutoPlayer: boolean = true

export function start(): boolean {
  if (!gameState.canStart()) {
    return false
  }

  
  if (useAutoPlayer) {
    const level = new StreamStartingLevel()
    gameState.loadLevel(level)
    const player = new StreamStarting()
    gameState.autoplayer = player
  } else {
    const titleScreen = new TitleScreen()
    gameState.loadLevel(titleScreen)
    titleScreen.renderLevel()
  }
  
  return true
}

export declare function log(text: string): void
