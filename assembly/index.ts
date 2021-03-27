// The entry file of your WebAssembly module.

import { GameState } from './gameState'
import { render } from './loop'
import { TitleScreen } from './levels/titleScreen'

export const gameState = new GameState()

export { triggerEventLoop, setCharacterDimensions, setScreenDimensions, updateMouseCoordinates, registerMouseClick } from './loop'

export function start(): boolean {
  if (!gameState.canStart()) {
    return false
  }

  gameState.loadLevel(new TitleScreen())
  render(gameState.currentLevel.map, gameState.currentLevel.uiControls)
  return true
}
