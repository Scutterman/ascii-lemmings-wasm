import { insertText } from "./text"
import { Lemming } from "./lemming"
import { LevelState, LevelTiles } from "./types"
import { getSurroundingTiles } from "./map"
import { UIControl } from "./UIControl"

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
    gameLoop()
  }
}

function gameLoop(): void {
  // Loop through each lemming and progress their action
  const level = gameState.currentLevel

  for (let i = 0; i < level.lemmings.length; i++) {
    if (level.lemmings[i].removed) { continue }
    level.lemmings[i].update(getSurroundingTiles(level.map, level.lemmings[i].position))
    if (level.lemmings[i].exited) {
      level.numberOfLemmingsSaved++
    }

    if (level.lemmings[i].removed) {
      level.numberOfLemmingsRemoved++
    }
  }

  level.timeLeft--
  const lemmingsLeftToSpawn = level.lemmings.length < (level.numberOfLemmings as i32)
  const allLemmingsRemoved = !lemmingsLeftToSpawn && level.numberOfLemmingsRemoved == level.numberOfLemmings

  if (allLemmingsRemoved || level.timeLeft == 0) {
    gameState.endLevel()
    return
  } else if (lemmingsLeftToSpawn) {
    if (gameState.framesSinceLastLemming >= gameState.framesBetweenLemmingSpawns) {
      level.lemmings.push(new Lemming())
      gameState.framesSinceLastLemming = 0
    } else {
      gameState.framesSinceLastLemming++
    }
  }

  level.renderLevel()
}

declare function display(arr: string): void;
declare function clear(): void;

function padRows(totalRows: i32, usedRows: i32): void {
  gameState.lastRowPadding = 0
  for (var i = totalRows; i > usedRows; i -= 2) {
    gameState.lastRowPadding++
    display('')
  }
}

function padColumn(totalColumns: i32, text: string): string {
  const charactersSpare = totalColumns - text.length
  const charactersRequiredOnLeft = Math.floor(charactersSpare / 2) as i32
  gameState.lastColumnPadding = charactersRequiredOnLeft
  return ' '.repeat(charactersRequiredOnLeft) + text
}

export function render(map: LevelTiles, controls: UIControl[]): i32 {
  const totalColumns = gameState.screenWidth / gameState.characterWidth
  const totalRows = gameState.screenHeight / gameState.characterHeight
  const usedRows = map.length

  for (let i = 0; i < controls.length; i++) {
    insertText(map, controls[i].getText(), controls[i].getPosition())
  }
  
  clear()
  padRows(totalRows, usedRows)
  let rightmostColumn: i32 = 0
  for (let i = 0; i < map.length; i++) {
    const column = padColumn(totalColumns, map[i].join(''))
    rightmostColumn = Math.max(rightmostColumn, column.length) as i32
    display(column);
  }

  return rightmostColumn
}

export function renderTimer(rightmostColumn: i32, time: u16): void {
  const timeLeft = time.toString()
  const paddingRequired = rightmostColumn - timeLeft.length
  display(' '.repeat(paddingRequired) + timeLeft)
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
