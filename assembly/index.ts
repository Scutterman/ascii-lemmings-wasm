import { Test } from './autoplayer/test'
import { TestLevel } from './autoplayer/testLevel'
import { GameState } from './gameState'
import { BaseLevel } from './levels/baseLevel'
import { EndSlate } from './levels/endSlate'
import { TitleScreen } from './levels/titleScreen'
import { LemmingGift, LevelState } from './types'

export const gameState = new GameState()
export let currentLevel: BaseLevel

export { triggerEventLoop, setCharacterDimensions, setScreenDimensions, updateMouseCoordinates, registerMouseClick } from './loop'

const useAutoPlayer: boolean = false

export function loadLevel(newLevel: BaseLevel): void {
  if (!newLevel.isMetaScreen) {
    gameState.lastLevel = newLevel.clone()
  }
  
  newLevel.skillSelected(LemmingGift.None)
  currentLevel = newLevel
  gameState.levelState = LevelState.LevelRunning
  gameState.shouldRun = true
}

export function loadEndSlate(): void {
  const needed = currentLevel.numberOfLemmingsForSucces.toString()
  const rescued = currentLevel.numberOfLemmingsSaved.toString()
  
  gameState.reset()
  const level = new EndSlate()
  loadLevel(level)
  gameState.shouldRun = false
  gameState.levelState = LevelState.EndSlate
  level.renderEndScreen(needed, rescued)
  log('render done')
}

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
    loadLevel(titleScreen)
    titleScreen.renderLevel()
  }
  
  return true
}

export declare function log(text: string): void
