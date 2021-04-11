import { LemmingGift, LevelState } from "./types"

import { gameState } from './index'

function processInputs(): void {
  const level = gameState.currentLevel
  let processLemmingClick = gameState.mouseClicked && gameState.selectedGift != LemmingGift.None && gameState.selectedGift != LemmingGift.Nuke
  
  if (gameState.mouseClicked) {
    gameState.mouseClicked = false
    
    if (gameState.mouseTileX > 0 && gameState.mouseTileY > 0 && gameState.mouseTileX < level.map[0].length && gameState.mouseTileY < level.map.length) {  
      for (let i = 0; i < level.uiControls.length; i++) {
        if (level.uiControls[i].isInBounds(gameState.mouseTileX, gameState.mouseTileY)) {
          level.uiControls[i].clicked()
          processLemmingClick = false
          break
        }
      }
    }
  }
  
  level.processLemmingSelect(gameState.mouseTileX, gameState.mouseTileY, processLemmingClick)
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

    const player = gameState.autoplayer
    if (player != null) { player.update() }
    gameState.currentLevel.gameLoop()
  }
}

declare function display(arr: string, colour: string): void;
declare function clear(): void;
declare function addLayer(): void;

export function renderTimer(rightmostColumn: i32, time: u16): void {
  const timeLeft = time.toString()
  const paddingRequired = rightmostColumn - timeLeft.length
  display(' '.repeat(paddingRequired) + timeLeft, '')
}

export function renderToScreen(text: string, colour: string = ''): void {
  display(text, colour)
}

export function clearScreen(): void {
  clear()
}

export function addLayerToScreen(): void {
  addLayer()
}

/** EXPORTED TO JS */

export function updateMouseCoordinates(x: i32, y: i32): void {
  gameState.mouseX = x
  gameState.mouseY = y
  gameState.normalizedMouseX = i32(Math.floor(gameState.mouseX / gameState.characterWidth)) + 1
  gameState.normalizedMouseY = i32(Math.floor(gameState.mouseY / gameState.characterHeight))
  gameState.mouseTileX = gameState.normalizedMouseX - gameState.lastColumnPadding
  gameState.mouseTileY = gameState.normalizedMouseY - gameState.lastRowPadding
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
