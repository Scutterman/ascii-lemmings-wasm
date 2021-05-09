import { Test } from './autoplayer/test'
import { TestLevel } from './autoplayer/testLevel'
import { GameState } from './gameState'
import { Lemming } from './lemming'
import { BaseLevel } from './levels/baseLevel'
import { EndSlate } from './levels/endSlate'
import { TitleScreen } from './levels/titleScreen'
import { BOUNDARIES_X, BOUNDARIES_Y, CONTROLS_Y, VISIBLE_X, VISIBLE_Y } from './map'
import { LemmingGift, LevelState } from './types'
import { UPSCALE_MULTIPLIER } from './upscale'
import { Level1 } from "./levels/one"

export const gameState = new GameState()
export let currentLevel: BaseLevel
export let lemmings: Lemming[] = []

export { triggerEventLoop, setCharacterDimensions, setScreenDimensions, updateMouseCoordinates, registerMouseClick } from './loop'

const useAutoPlayer: boolean = false

export function loadLevel(newLevel: BaseLevel): void {
  lemmings = []
  if (!newLevel.isMetaScreen) {
    gameState.lastLevel = newLevel.clone()
  }
  
  newLevel.skillSelected(LemmingGift.None)
  currentLevel = newLevel
  gameState.levelState = LevelState.LevelRunning
  gameState.shouldRun = true
}

export function loadEndSlate(): void {
  const needed = currentLevel.getLemmingNeededPercent().toString() + '%'
  const rescued = currentLevel.getLemmingSavedPercent().toString() + '%'
  
  gameState.reset()
  const level = new EndSlate(needed, rescued)
  loadLevel(level)
  gameState.shouldRun = false
  gameState.levelState = LevelState.EndSlate
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

export declare function keyPressListener(shouldListen: boolean): void

export function keyDown(character: string): void {
  gameState.addTextCharacter(character)
}

export function getScreenWidth(): f32 {
  return f32(BOUNDARIES_X + VISIBLE_X) * f32(UPSCALE_MULTIPLIER) * gameState.characterWidth
}
export function getScreenHeight(): f32 {
  return f32(BOUNDARIES_Y + VISIBLE_Y + CONTROLS_Y) * f32(UPSCALE_MULTIPLIER) * gameState.characterHeight
}

export declare function log(text: string): void

// TODO:: I wanted all of this in another file, but the compile fails if I do
// https://github.com/Scutterman/ascii-lemmings-wasm/issues/51
export enum Difficulty {
  Fun,
  Tricky,
  Taxing,
  Mayhem
}

type LevelFactory = () => BaseLevel
type LevelCodes = Map<string, LevelFactory>
type LevelDifficultyCodes = Map<Difficulty, LevelCodes>

export const LEVEL_DIFFICULTY_CODES: LevelDifficultyCodes = new Map<Difficulty, LevelCodes>()
const funLevels = new Map<string, LevelFactory>()
LEVEL_DIFFICULTY_CODES.set(Difficulty.Fun, funLevels)
funLevels.set('CAJJLDLBCS', () => new Level1())
