import { LemmingGift, LevelState, LevelTiles } from "./types"
import { currentLevel, gameState, loadEndSlate, log } from './index'
import { BOUNDARIES_X, BOUNDARIES_Y, CONTROLS_Y, VISIBLE_X, VISIBLE_Y } from "./map"
import { upscale, UPSCALE_MULTIPLIER } from './upscale'
import { UILabel } from './ui/uiLabel'
import { getCharacterRender } from "./text"
import { Panel } from "./ui/panel"
import { Rect, Vec2 } from "./position"
import { UIControl } from "./ui/uiControl"

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
      const controlHasBeenClicked = processControlClicks()
      if (controlHasBeenClicked) {
        processLemmingClick = false
      }
    }
  }
  
  currentLevel.processLemmingSelect(gameState.mouseTileX, gameState.mouseTileY, processLemmingClick)
}

function processControlClicks(): boolean {
  for (let i = 0; i < currentLevel.uiControls.length; i++) {
    if (currentLevel.uiControls[i].isInBounds(gameState.mouseTileX, gameState.mouseTileY)) {
      currentLevel.uiControls[i].clicked()
      return true
    }
  }

  for (let i = 0; i < currentLevel.uiPanels.length; i++) {
    const panel = currentLevel.uiPanels[i]
    for (let j = 0; j < panel.items.length; j++) {
      const item = panel.items[j]
      if (item instanceof UIControl && (item as UIControl).isInBounds(gameState.mouseTileX, gameState.mouseTileY)) {
        (item as UIControl).clicked()
        return true
      }
    }
  }

  return false
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

function getPositionInPixels(blockPosition: Vec2): Vec2 {
  const x = i16(f32(blockPosition.x) * gameState.characterWidth * f32(UPSCALE_MULTIPLIER))
  const y = i16(f32(blockPosition.y) * gameState.characterHeight * f32(UPSCALE_MULTIPLIER))
  return new Vec2(x, y)
}

export function renderCursor(): void {
  if (!isCursorInBounds(false)) {
    return
  }
  
  let text = ''
  const borderSize = UPSCALE_MULTIPLIER.toString() + 'px'
  const defaultStyles = 'border-left: ' + borderSize + ' dashed black; border-right: ' + borderSize + ' dashed black;'
  for (let i: u8 = 0; i < UPSCALE_MULTIPLIER; i++) {
    let styles = defaultStyles
    if (i == 0) { styles += 'border-top: ' + borderSize + ' dashed black;' }
    if (i == UPSCALE_MULTIPLIER - 1) { styles += 'border-bottom: ' + borderSize + ' dashed black;' }
    text += '<span style="' + styles + '">' + ' '.repeat(UPSCALE_MULTIPLIER) + '</span><br />'
  }
  renderRelativeElement(text, new Vec2(i16(gameState.mouseTileX), i16(gameState.mouseTileY)))
}

export function renderPanel(panel: Panel, map: LevelTiles): void {
  if (panel.items.length == 0) { return }

  const nextLabelPosition = panel.position.clone()
  panel.items[0].setPosition(panel.position)
  let lastLabelDimensions: Rect | null = null

  for (let i = 0; i < panel.items.length; i++) {
    if (!panel.items[i].isVisible(map)) { continue }

    if (lastLabelDimensions != null) {
      nextLabelPosition.x += lastLabelDimensions.size.x + 3
      nextLabelPosition.y
    }
    
    panel.items[i].setPosition(nextLabelPosition.clone())
    lastLabelDimensions = renderUiLabel(panel.items[i])
  }
}

export function renderUiLabel(element: UILabel): Rect {
  const text: string[] = []
  const elementTextCharacters = element.getText().split('')
  const labelDimensions = new Rect(element.getPosition().clone(), new Vec2(i16(elementTextCharacters.length), 1))

  for (let i = 0; i < elementTextCharacters.length; i++) {
    const renderedCharacter = getCharacterRender(elementTextCharacters[i])
    if (renderedCharacter.length == 0) {
      log('Canot render character: ' + elementTextCharacters[i])
      continue
    }
    
    for (let j = 0; j < renderedCharacter.length; j++) {
      if (j >= text.length) { text.push('') }
      text[j] += renderedCharacter[j]
    }
  }

  if (text.length == 0) {
    return new Rect(element.getPosition().clone(), new Vec2(0,0))
  }
  
  if (element.getPosition().x == -1) {
    const mapLengthInBlocks = i16(VISIBLE_X + BOUNDARIES_X)
    element.getPosition().x = i16(f32(mapLengthInBlocks - labelDimensions.size.x) / 2)
  }
  
  
  if (element.getPosition().y == -1) {
    const mapHeightInBlocks = i16(VISIBLE_Y + BOUNDARIES_Y + CONTROLS_Y)
    element.getPosition().y = i16(f32(mapHeightInBlocks - labelDimensions.size.y) / 2)
  }

  renderRelativeElement(text.join('<br />'), element.getPosition(), true)

  return labelDimensions
}

function renderRelativeElement(text: string, blockPosition: Vec2, border: boolean = false): void {
  const pixelPosition = getPositionInPixels(blockPosition)
  const borderStyles = border ? 'border: ' + UPSCALE_MULTIPLIER.toString() + 'px dashed black;' : ''
  const label = '<div style="display: inline-block; width: auto; height: auto; position: relative; left: ' + pixelPosition.x.toString() + 'px; top:' + pixelPosition.y.toString() + 'px;' + borderStyles + '">' + text + '</span>'
  addLayerToScreen()
  output += label
  addLayerToScreen()
}

export function renderToScreen(text: string, colour: string = ''): void {
  if (colour !== '') {
    output += '<span style="color: ' + colour + ';">'
  }

  const outputLines = upscale(text)
  for (let i = 0; i < outputLines.length; i++) {
    output += outputLines[i] + '<br>'
  }

  if (colour != '') {
    output += '</span>'
  }
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
  gameState.mouseTileX = i32(Math.round(x / (gameState.characterWidth * UPSCALE_MULTIPLIER)))
  gameState.mouseTileY = i32(Math.round(y / (gameState.characterHeight * UPSCALE_MULTIPLIER)))
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
