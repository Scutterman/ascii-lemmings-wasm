import { LemmingGift, LevelState } from "./types"

import { currentLevel, gameState, log } from './index'

const millisecondsPerFrameRender: i64 = Math.round(1000 / 30) as i64

function processInputs(): void {
  let processLemmingClick = gameState.mouseClicked && gameState.selectedGift != LemmingGift.None && gameState.selectedGift != LemmingGift.Nuke
  
  if (gameState.mouseClicked) {
    gameState.mouseClicked = false
    
    const isInMapXBounds = gameState.mouseTileX > 0 && gameState.mouseTileX < currentLevel.map[0].length
    const isInMapYBounds = gameState.mouseTileY > 0  && gameState.mouseTileY < currentLevel.map.length
    if (isInMapXBounds && isInMapYBounds) {
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
  
  let levelDidNotEnd = true
  if (!currentLevel.isMetaScreen && levelRunning && gameLoopOverdue) {
    gameState.lastGameLoopRunTime = currentTime

    const player = gameState.autoplayer
    if (player != null) { player.update() }
    levelDidNotEnd = currentLevel.gameLoop()
  }

  endLoop(start, levelDidNotEnd)
}

function endLoop(start: i64, levelDidNotEnd: boolean): void {
  const currentTime = Date.now()
  const renderDelta = currentTime - gameState.lastRenderTime
  const renderOverdue = levelDidNotEnd && renderDelta >= millisecondsPerFrameRender
  
  if (renderOverdue) {
    gameState.lastRenderTime = Date.now()
    currentLevel.renderLevel()
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

export function renderTimer(rightmostColumn: i32, time: u16): void {
  const timeLeft = time.toString()
  const paddingRequired = rightmostColumn - timeLeft.length
  renderToScreen(' '.repeat(paddingRequired) + timeLeft)
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

export function updateMouseCoordinates(x: i32, y: i32): void {
  gameState.mouseX = x
  gameState.mouseY = y
  gameState.normalizedMouseX = i32(Math.floor(gameState.mouseX / gameState.characterWidth)) + 1
  gameState.normalizedMouseY = i32(Math.floor(gameState.mouseY / gameState.characterHeight))
  gameState.mouseTileX = gameState.normalizedMouseX - gameState.lastColumnPadding
  gameState.mouseTileY = gameState.normalizedMouseY - gameState.lastRowPadding
}

export function registerMouseClick(): void {
  log('click!')
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
