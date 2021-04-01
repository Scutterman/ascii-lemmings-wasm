import { LevelState } from "./types"

import { gameState } from './index'

function processInputs(): void {
  const level = gameState.currentLevel
  
  if (gameState.mouseClicked) {
    gameState.mouseClicked = false

    const normalizedMouseX = i32(Math.floor(gameState.mouseX / gameState.characterWidth)) + 1
    const normalizedMouseY = i32(Math.floor(gameState.mouseY / gameState.characterHeight))
    const mouseTileX: i32 = normalizedMouseX - gameState.lastColumnPadding
    const mouseTileY: i32 = normalizedMouseY - gameState.lastRowPadding
    
    if (mouseTileX > 0 && mouseTileY > 0 && mouseTileX < level.map[0].length && mouseTileY < level.map.length) {  
      for (let i = 0; i < level.uiControls.length; i++) {
        if (level.uiControls[i].isInBounds(mouseTileX, mouseTileY)) {
          level.uiControls[i].clicked()
        }
      }
    }
  }
}

function eventLoop(): void {
  processInputs()

  if (!gameState.shouldRun) {
    return
  }

  // Process inputs from browser
  // Send browser contextual clue updates
  // Check if frame loop should run
  const currentTime = Date.now()
  const levelRunning = gameState.levelState == LevelState.LevelRunning
  const delta = currentTime - gameState.lastGameLoopRunTime
  const gameLoopOverdue = delta > 65535 || delta as u16 >= gameState.millisecondsPerGameLoop
  if (!gameState.currentLevel.isMetaScreen && levelRunning && gameLoopOverdue) {
    gameState.lastGameLoopRunTime = currentTime
    gameState.currentLevel.gameLoop()
  }
}

declare function display(arr: string): void;
declare function clear(): void;

export function renderTimer(rightmostColumn: i32, time: u16): void {
  const timeLeft = time.toString()
  const paddingRequired = rightmostColumn - timeLeft.length
  display(' '.repeat(paddingRequired) + timeLeft)
}

export function renderToScreen(text: string): void {
  display(text)
}

export function clearScreen(): void {
  clear()
}

/** EXPORTED TO JS */

export function updateMouseCoordinates(x: i32, y: i32): void {
  gameState.mouseX = x
  gameState.mouseY = y
}

export function registerMouseClick(): void {
  gameState.mouseClicked = true
}

export function setScreenDimensions(screenWidth: i32, screenHeight: i32): void {
  gameState.screenWidth = screenWidth
  gameState.screenHeight = screenHeight
}

export function setCharacterDimensions(characterWidth: i32, characterHeight: i32): void {
  gameState.characterWidth = characterWidth
  gameState.characterHeight = characterHeight
}

export function triggerEventLoop(): void {
  eventLoop()
}
