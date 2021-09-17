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
import { allowedUserInputCharacters } from '../shared/src/wasm-safe'
import { Editor } from './levels/editor'
import { ITEM_SET_BACKGROUND, ITEM_SET_MAP, ITEM_SET_RELATIVE, resetItems } from './vdom/elements'
import { constructRelativeElement, lineBreak } from './loop'
import { Vec2 } from './position'
import { Parser } from './maps/types'

export const gameState = new GameState()
export let currentLevel: BaseLevel
export let lemmings: Lemming[] = []

export { triggerEventLoop, setCharacterDimensions, setScreenDimensions, updateMouseCoordinates, registerMouseClick } from './loop'

const useAutoPlayer: boolean = false

const buttonArea = generateButtonArea()

const map = new Map<string, string>()
map.keys()

function generateButtonArea(): string {
  const buttonAreaArray = [
    '__________________________________________________________________________',
    '|                                                                        |',
    '|                                                                        |',
    '|                                                                        |',
    '|                                                                        |',
    '|                                                                        |',
    '|                                                                        |',
    '|                                                                        |',
    '__________________________________________________________________________'
  ]

  let buttonArea: string = ''

  buttonArea = ''
  for (let buttonAreaLineIndex = 0; buttonAreaLineIndex < buttonAreaArray.length; buttonAreaLineIndex++) {
    const line = buttonAreaArray[buttonAreaLineIndex].split('')
    let lineText = ''
    for (let buttonAreaCharacterIndex = 0; buttonAreaCharacterIndex < line.length; buttonAreaCharacterIndex++) {
      lineText += line[buttonAreaCharacterIndex].repeat(UPSCALE_MULTIPLIER)
    }
    lineText += lineBreak
    buttonArea += lineText.repeat(UPSCALE_MULTIPLIER)
  }
  buttonArea = buttonArea.substr(0, buttonArea.length - lineBreak.length)
  return buttonArea
}

export function loadLevelFromString(level: string): void {
  if (currentLevel instanceof Editor) {
    gameState.levelState = LevelState.Preparing
    gameState.shouldRun = false
    const editor = (currentLevel as Editor)
    const map = new Parser().parseGeneratedMap(level)
    editor.mapSwapped(map)
    _setupClientForLevel(true)
  }
}

export function loadLevel(newLevel: BaseLevel): void {
  gameState.levelState = LevelState.Preparing
  gameState.shouldRun = false
  resetItems(ITEM_SET_RELATIVE)
  resetItems(ITEM_SET_BACKGROUND)
  resetItems(ITEM_SET_MAP)
  
  lemmings = []
  if (!newLevel.isMetaScreen) {
    gameState.lastLevel = newLevel.clone()
  }
  
  newLevel.skillSelected(LemmingGift.None)
  currentLevel = newLevel
  _setupClientForLevel()
}

export function _setupClientForLevel(isEditor: boolean = false): void {
  const height = currentLevel.map.length + BOUNDARIES_Y + CONTROLS_Y
  const width = currentLevel.map.length > 0 ? currentLevel.map[0].length : 0

  const visibleWidth = i32(VISIBLE_X + BOUNDARIES_X)
  let visibleHeight = VISIBLE_Y + BOUNDARIES_Y
  let buttonAreaHtml = ''
  if (currentLevel.isMetaScreen && !isEditor) {
    visibleHeight += CONTROLS_Y // Meta screen map is full height - including what's usually control area
  } else {
    visibleHeight -= 1 // Only one boundary (top) is included in the map, the other boundary is added by the control area
    const position = new Vec2(0, i16(visibleHeight))
    buttonAreaHtml = constructRelativeElement(buttonArea, position).html
  }
  setupClientForLevel(width, height, visibleWidth, i32(visibleHeight), buttonAreaHtml)
}

export function runLevel(): void {
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
  }

  return true
}

export function blocksAdded(): void {
  if (currentLevel instanceof Editor) {
    (currentLevel as Editor).blocksAdded()
  }
}

export declare function keyPressListener(shouldListen: boolean): void
export declare function messageResponse(instruction: string, name: string, content: string): void
declare function setupClientForLevel(mapWidth: i32, mapHeight: i32, visibleWidth: i32, visibleHeight: i32, buttonAreaHtml: string): void;

export function keyUp(character: string): void {
  if (allowedUserInputCharacters.includes(character)) {
    gameState.userEnteredText += character
  }
}

export function resetText(): void {
  gameState.userEnteredText = ''
}

export function getScreenWidth(): f32 {
  return f32(BOUNDARIES_X + VISIBLE_X) * f32(UPSCALE_MULTIPLIER) * gameState.characterWidth
}
export function getScreenHeight(): f32 {
  return f32(BOUNDARIES_Y + VISIBLE_Y + CONTROLS_Y) * f32(UPSCALE_MULTIPLIER) * gameState.characterHeight
}

export function getBlockWidth(): f32 {
  return f32(BOUNDARIES_X + VISIBLE_X)
}
export function getBlockHeight(): f32 {
  return f32(BOUNDARIES_Y + VISIBLE_Y + CONTROLS_Y)
}

export declare function log(text: string): void
