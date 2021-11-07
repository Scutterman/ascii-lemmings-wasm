import { LemmingGift, LevelState } from "./types"
import { currentLevel, gameState, loadEndSlate, log } from './index'
import { BOUNDARIES_X, BOUNDARIES_Y, CONTROLS_Y, VISIBLE_X, VISIBLE_Y } from "./map"
import { UPSCALE_MULTIPLIER } from './upscale'
import { UILabel } from './ui/uiLabel'
import { getCharacterRender } from "./text"
import { Rect, Vec2 } from "./position"
import { UIControl } from "./ui/uiControl"
import { Editor } from "./levels/editor"
import { compileItems, compileMapChanges, ITEM_SET_BACKGROUND, ITEM_SET_MAP, removeItem, resetItems, setItem } from "./vdom/elements"
import { defaultColour } from "./colours"
import { Textbox } from "./ui/Textbox"

const millisecondsPerFrameRender: i64 = Math.round(1000 / 60) as i64

function isCursorInBounds(checkGameArea: boolean): boolean {
  if (currentLevel.isMetaScreen && !(currentLevel instanceof Editor)) {
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

function getClippedCursorPosition(): Vec2 {
  let x: i16 = i16(gameState.mouseTileX)
  let y: i16 = i16(gameState.mouseTileY)
  const maxX = i16(VISIBLE_X + BOUNDARIES_X - 1)
  const maxY = i16(VISIBLE_Y + BOUNDARIES_Y + CONTROLS_Y - 1)

  if (x < 0) { x = 0 }
  else if (x > maxX) { x = maxX }
  
  if (y < 0) { y = 0 }
  else if (y > maxY) { y = maxY }

  return new Vec2(x, y)
}

function processInputs(): void {
  const currentFocused = gameState.focusedUiControl
  let processLemmingClick = (
    gameState.mouseClicked &&
    gameState.selectedGift != LemmingGift.None &&
    gameState.selectedGift != LemmingGift.Nuke &&
    isCursorInBounds(true)
  )
  
  let clickProcessed = !gameState.mouseClicked
  gameState.mouseClicked = false

  if (isCursorInBounds(false)) {
    const controlHasBeenClicked = processControlClicks(clickProcessed)
    if (controlHasBeenClicked) {
      clickProcessed = true
      processLemmingClick = false
    }
  }

  if (!clickProcessed) {
    gameState.focusedUiControl = null
  }
  
  if (gameState.focusedUiControl !== currentFocused) {
    gameState.userEnteredText = ''
  } else if (gameState.focusedUiControl instanceof Textbox) {
    ;(gameState.focusedUiControl as Textbox).updateText(gameState.userEnteredText)
  }
  
  if (currentLevel instanceof Editor) {
    if (!clickProcessed) {
      clickProcessed = (currentLevel as Editor).mapSquareClicked(gameState.mouseTileX, gameState.mouseTileY)
    }
  } else {
    clickProcessed = currentLevel.processLemmingSelect(gameState.mouseTileX, gameState.mouseTileY, processLemmingClick)
  }
}

function processControlClicks(clickProcessed: boolean): boolean {
  for (let containerIndex = currentLevel.uiPanelContainers.length -1; containerIndex >= 0; containerIndex--) {
    const container = currentLevel.uiPanelContainers[containerIndex]
    const panels = container.getItems()
    for (let panelIndex = panels.length - 1; panelIndex >= 0; panelIndex--) {
      const panel = panels[panelIndex]

      if (!panel.isShowing() || panel.isOffscreen()) {
        continue
      }

      const items = panel.getItems()
      for (let itemIndex = items.length - 1; itemIndex >= 0; itemIndex--) {
        clickProcessed = processLabelEvents(items[itemIndex], clickProcessed)
      }
    }
  }

  for (let i = currentLevel.uiPanels.length - 1; i >= 0; i--) {
    const panel = currentLevel.uiPanels[i]
    if (!panel.isShowing() || panel.isOffscreen()) {
      continue
    }
    const items = panel.getItems()
    for (let j = items.length - 1; j >= 0; j--) {
      clickProcessed = processLabelEvents(items[j], clickProcessed)
    }
  }

  for (let i = currentLevel.uiLabels.length - 1; i >= 0; i--) {
    clickProcessed = processLabelEvents(currentLevel.uiLabels[i], clickProcessed)
  }

  for (let i = currentLevel.uiControls.length - 1; i >= 0; i--) {
    clickProcessed = processLabelEvents(currentLevel.uiControls[i], clickProcessed)
  }
  
  return clickProcessed
}

function processLabelEvents(label: UILabel, clickProcessed: boolean): boolean {
  const hasFocus = label.isShowing() && label.isInBounds(gameState.mouseTileX, gameState.mouseTileY) && label.getCanReceiveFocus()
  label.setFocus(hasFocus)

  
  if (!clickProcessed && hasFocus) {
    gameState.focusedUiControl = label
    clickProcessed = true
    if (label instanceof UIControl) {
      const ctrl = label as UIControl
      ctrl.clicked()
    }
  }
  
  return clickProcessed
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
  if (!currentLevel.canScroll || currentLevel.map.length === 0) { return }
  // TODO:: beware off-by-one bugs that are triggered by boundaries
  // TODO:: Notify level that scroll has happened so the render function knows to re-render
  if (gameState.mouseTileX < 0 && currentLevel.scrollPosition.x > 0) {
    currentLevel.scrollPosition.x--
  } else if (gameState.mouseTileX > i32(VISIBLE_X) && (currentLevel.scrollPosition.x + VISIBLE_X + BOUNDARIES_X) < currentLevel.map[0].length) {
    currentLevel.scrollPosition.x++
  }

  if (gameState.mouseTileY < 0 && currentLevel.scrollPosition.y > 0) {
    currentLevel.scrollPosition.y--
  } else if (gameState.mouseTileY > i32(VISIBLE_Y + BOUNDARIES_Y + CONTROLS_Y - 1) && (currentLevel.scrollPosition.y + VISIBLE_Y + BOUNDARIES_Y - 1) < currentLevel.map.length) {
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
    render(compileItems())
    renderMap(compileMapChanges(), currentLevel.scrollPosition.x, currentLevel.scrollPosition.y)
    resetItems(ITEM_SET_MAP)
  }

  loopCompleted(start)
}

const loopCompleted = (start: i64): void => {
  const end: i64 = Date.now()
  const timeTaken = i32(end - start)
  onEventLoopComplete(timeTaken)
}

// declare function removeElement(elementId: string): void;
// declare function renderBackground(content: string): void;
declare function renderMap(content: string, scrollX: i16, scrollY: i16): void;
declare function render(output: string): void;
declare function onEventLoopComplete(timeTakenToComplete: i32): void;

let relativeItemId = 1
export const lineBreak = '<br />'

let cursorId = ''
function renderCursor(): void {
  const clippedCursorPosition = getClippedCursorPosition()
  removeItem(cursorId)
  cursorId = renderBoxAroundBlock(clippedCursorPosition.x, clippedCursorPosition.y)
}

export function renderBoxAroundBlock(blockX: i16, blockY: i16): string {
  return renderRelativeElement('<span class="box"></span>', new Vec2(blockX, blockY))
}

export function renderBoxWithoutText(position: Vec2, size: Vec2, backgroundColour: string = '#ffffff00'): string {
  const width = (gameState.characterWidth * f32(size.x) * f32(UPSCALE_MULTIPLIER)).toString()
  const height = (gameState.characterHeight * f32(size.y) * f32(UPSCALE_MULTIPLIER)).toString()

  const elementId = getElementId()
  const html = '<span' +
    ' id="' + elementId + '"' +
    ' class="block row_' + position.y.toString() + ' col_' + position.x.toString() + '"' +
    ' style="' +
      ' background-color: ' + backgroundColour + ';' +
      'width: ' + width + 'px !important; height: ' + height + 'px !important;' +
    ' "' +
    '></span>'
  setItem(elementId, html)
  return elementId
}

export function getRenderedTextArray(textToRender: string, text: string[] = []): string[] {
  const elementTextCharacters = textToRender.split('')
  
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

  return text
}

export function getSizeFromRenderedTextArray(text: string[]): Vec2 {
  if (text.length == 0) { return new Vec2(0,0) }

  return new Vec2(
    i16(Math.ceil(f32(text[0].length) / f32(UPSCALE_MULTIPLIER))),
    i16(Math.ceil(f32(text.length) / f32(UPSCALE_MULTIPLIER)))
  )
}

export function getTextDimensions(text: string[], position: Vec2): Rect {
  const labelDimensions = new Rect(position.clone(), new Vec2(0,0))
  if (text.length == 0) {
    return labelDimensions
  }
  
  const size = getSizeFromRenderedTextArray(text)
  labelDimensions.size = size

  if (labelDimensions.position.x == -1) {
    const mapLengthInBlocks = i16(VISIBLE_X + BOUNDARIES_X)
    labelDimensions.position.x = i16(f32(mapLengthInBlocks - labelDimensions.size.x) / 2)
  }
  
  if (labelDimensions.position.y == -1) {
    const mapHeightInBlocks = i16(VISIBLE_Y + BOUNDARIES_Y + CONTROLS_Y)
    labelDimensions.position.y = i16(f32(mapHeightInBlocks - labelDimensions.size.y) / 2)
  }

  return labelDimensions
}

class RenderedTextArray {
  constructor (public id: string, public dimensions: Rect) {}
}

export function renderTextArrayToScreen(text: string[], position: Vec2, border: boolean = true, colour: string = defaultColour, backgroundColour: string = '#ffffff00'): RenderedTextArray {
  const labelDimensions = getTextDimensions(text, position)
  const id = renderRelativeElement(text.join(lineBreak), labelDimensions.position, border, colour, backgroundColour)
  return new RenderedTextArray(id, labelDimensions)
}

class RelativeElement {
  constructor(public html: string, public id: string) {}
}

function getElementId(): string {
  const id = 'RELATIVE_' + relativeItemId.toString()
  relativeItemId++
  return id
}

export function constructRelativeElement(text: string, blockPosition: Vec2, border: boolean = false, colour: string = defaultColour, backgroundColour: string = '#ffffff00'): RelativeElement {
  const borderStyles = border ? 'box-shadow: inset 0 0 1px ' + defaultColour + ';' : ''
  const elementId = getElementId()
  const elementIdHtml = 'id="' + elementId + '"'
  
  const html = '<span ' +
    elementIdHtml +
    ' class="block row_' + blockPosition.y.toString() + ' col_' + blockPosition.x.toString() + '"' +
    ' style="' + borderStyles +
    ' color: ' + colour + ';' +
    ' background-color: ' + backgroundColour + ';' +
    ' display: block; width: auto !important; height: auto !important;">' +
      text +
    '</span>'
  return new RelativeElement(html, elementId)
}

export function renderRelativeElement(text: string, blockPosition: Vec2, border: boolean = false, colour: string = defaultColour, backgroundColour: string = '#ffffff00'): string {
  const element = constructRelativeElement(text, blockPosition, border, colour, backgroundColour)
  setItem(element.id, element.html)
  return element.id
}

export function removeMapTile(elementId: string): void {
  if (elementId.length > 0) {
    setItem(elementId, '', ITEM_SET_MAP)
  }
}

export function renderMapTile(text: string[], blockPosition: Vec2, colour: string = defaultColour): string {
  let content = text.join(lineBreak)
  if (colour != defaultColour) {
    content = '<span style="color: ' + colour + ';">' + content + '</span>'
  }

  const elementId = 'block_' + blockPosition.y.toString() + '_' + blockPosition.x.toString()
  setItem(elementId, content, ITEM_SET_MAP)
  return elementId
}

export function renderBackgroundToScreen(text: string, blockPosition: Vec2, border: boolean = false, colour: string = defaultColour): string {
  const element = constructRelativeElement(text, blockPosition, border, colour)
  setItem(element.id, element.html, ITEM_SET_BACKGROUND)
  return element.id
}

/** EXPORTED TO JS */

export function updateMouseCoordinates(x: f32, y: f32): void {
  gameState.mouseTileX = i32(Math.floor(x / (gameState.characterWidth * UPSCALE_MULTIPLIER)))
  gameState.mouseTileY = i32(Math.floor(y / (gameState.characterHeight * UPSCALE_MULTIPLIER)))
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
