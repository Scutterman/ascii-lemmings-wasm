import { Test } from './autoplayer/test'
import { TestLevel } from './autoplayer/testLevel'
import { GameState } from './gameState'
import { TitleScreen } from './levels/titleScreen'

export const gameState = new GameState()

export { triggerEventLoop, setCharacterDimensions, setScreenDimensions, updateMouseCoordinates, registerMouseClick } from './loop'

const useAutoPlayer: boolean = false

export function start(): boolean {
  if (!gameState.canStart()) {
    return false
  }

  if (useAutoPlayer) {
    const level = new TestLevel()
    const player = new Test(level)
    gameState.autoplayer = player
  } else {
    const titleScreen = new TitleScreen()
    gameState.loadLevel(titleScreen)
    titleScreen.renderLevel()
  }
  
  return true
}

export declare function log(text: string): void
