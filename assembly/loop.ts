import { LemmingGift, LevelState } from "./types"

import { currentLevel, gameState, loadEndSlate } from './index'
import { BOUNDARIES_X, BOUNDARIES_Y, CONTROLS_Y, VISIBLE_X, VISIBLE_Y } from "./map"

const millisecondsPerFrameRender: i64 = Math.round(1000 / 30) as i64

function isCursorInBounds(checkGameArea: boolean): boolean {
  if (currentLevel.isMetaScreen) {
    return (
      gameState.mouseTileY >= 0 &&
      gameState.mouseTileY < currentLevel.map.length &&
      gameState.mouseTileX >= 0 &&
      gameState.mouseTileX < currentLevel.map[gameState.mouseTileY].length
    )
  } else {
    const additionalYRows = checkGameArea ? 0 : CONTROLS_Y
    return (
      gameState.mouseTileY >= 0 &&
      gameState.mouseTileY < i32(VISIBLE_Y + BOUNDARIES_Y + additionalYRows) &&
      gameState.mouseTileX >= 0 &&
      gameState.mouseTileX < i32(VISIBLE_X + BOUNDARIES_X)
    )
  }
}

function processInputs(): void {
  let processLemmingClick = (
    gameState.mouseClicked &&
    gameState.selectedGift != LemmingGift.None &&
    gameState.selectedGift != LemmingGift.Nuke &&
    isCursorInBounds(true)
  )
  
  if (gameState.mouseClicked) {
    gameState.mouseClicked = false

    if (isCursorInBounds(false)) {
      for (let i = 0; i < currentLevel.uiControls.length; i++) {
        if (currentLevel.uiControls[i].isInBounds(gameState.mouseTileX, gameState.mouseTileY)) {
          currentLevel.uiControls[i].clicked()
          processLemmingClick = false
          break
        }
      }
    }
  }
  
  currentLevel.processLemmingSelect(gameState.mouseTileX, gameState.mouseTileY, processLemmingClick)
}

function eventLoop(): void {
  const start: i64 = Date.now()
  const currentTime = Date.now()
  processInputs()

  if (!gameState.shouldRun) {
    endLoop(start, true)
    return
  }

  // Process inputs from browser
  // Send browser contextual clue updates
  // Check if frame loop should run
  const levelRunning = gameState.levelState == LevelState.LevelRunning
  const delta = currentTime - gameState.lastGameLoopRunTime
  const gameLoopOverdue = delta > 65535 || delta as u16 >= gameState.millisecondsPerGameLoop
  
  if (!currentLevel.isMetaScreen && levelRunning && gameLoopOverdue) {
    gameState.lastGameLoopRunTime = currentTime

    const player = gameState.autoplayer
    if (player != null) { player.update() }
    currentLevel.gameLoop()
  }

  if (currentLevel.hasEnded) {
    loadEndSlate()
  }

  endLoop(start, currentLevel.hasEnded == false)
}

function handleScroll(): void {
  // TODO:: beware off-by-one bugs that are triggered by boundaries
  if (gameState.mouseTileX < 0 && currentLevel.scrollPosition.x > 0) {
    currentLevel.scrollPosition.x--
  } else if (gameState.mouseTileX > i32(VISIBLE_X) && (currentLevel.scrollPosition.x + VISIBLE_X + BOUNDARIES_X) < currentLevel.map[0].length) {
    currentLevel.scrollPosition.x++
  }

  if (gameState.mouseTileY < 0 && currentLevel.scrollPosition.y > 0) {
    currentLevel.scrollPosition.y--
  } else if (gameState.mouseTileY > i32(VISIBLE_Y + CONTROLS_Y) && (currentLevel.scrollPosition.y + VISIBLE_Y + BOUNDARIES_Y) < currentLevel.map.length) {
    currentLevel.scrollPosition.y++
  }
}

function endLoop(start: i64, levelDidNotEnd: boolean): void {
  const currentTime = Date.now()
  const renderDelta = currentTime - gameState.lastRenderTime
  const renderOverdue = levelDidNotEnd && renderDelta >= millisecondsPerFrameRender
  
  if (renderOverdue) {
    handleScroll()
    gameState.lastRenderTime = Date.now()
    currentLevel.renderLevel()
    renderCursor()
    renderComplete()
  }

  loopCompleted(start)
}

const loopCompleted = (start: i64): void => {
  const end: i64 = Date.now()
  const timeTaken = i32(end - start)
  onEventLoopComplete(timeTaken)
}

declare function render(output: string): void;
declare function onEventLoopComplete(timeTakenToComplete: i32): void;

let output: string = ''
let outputSuffix = ''

export function renderCursor(): void {
  if (!isCursorInBounds(false)) {
    return
  }
  
  const x = gameState.mouseTileX
  const y = gameState.mouseTileY

  addLayerToScreen()
  for (let i = 0; i < y; i++) { renderToScreen('') }
  renderToScreen(' '.repeat(x) + '<span style="border: 1px dashed black;"> </span>')
  addLayerToScreen()
}

export function renderToScreen(text: string, colour: string = ''): void {
  let outputLine = text
  if (colour !== '') {
    outputLine = '<span style="color: ' + colour + ';">' + outputLine + '</span>'
  }

  output += outputLine + '<br>'
}

export function renderComplete(): void {
  output += outputSuffix
  render(output)
}

export function addLayerToScreen(clearBeforeAdd: boolean = false): void {
  outputSuffix = '</div>'
  if (clearBeforeAdd) {
    output = ''
  }

  if (output != '') {
    output += outputSuffix
  }

  output += '<div class="screen">'
}

/** EXPORTED TO JS */

export function updateMouseCoordinates(x: f32, y: f32): void {
  gameState.mouseTileX = i32(Math.round(x / gameState.characterWidth))
  gameState.mouseTileY = i32(Math.round(y / gameState.characterHeight))
}

export function registerMouseClick(): void {
  gameState.mouseClicked = true
}

export function setScreenDimensions(screenWidth: i32, screenHeight: i32): void {
  gameState.screenWidth = screenWidth
  gameState.screenHeight = screenHeight
}

export function setCharacterDimensions(characterWidth: f32, characterHeight: f32): void {
  gameState.characterWidth = characterWidth
  gameState.characterHeight = characterHeight
}

export function triggerEventLoop(): void {
  eventLoop()
}
