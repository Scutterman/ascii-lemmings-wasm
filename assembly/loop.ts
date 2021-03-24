import { Lemming, LemmingAction, lemmingActionToCharacter } from "./lemming"
import { Level, LevelState } from "./level"
import { getSurroundingTiles, LevelTiles, mapToTiles } from "./map"

const baseMillisecondsPerGameLoop: u16 = 1000 as u16
const fastForwardMultiplier: u8 = 2 as u8

const NEEDED_LINE: u8 = 2
const NEEDED_REPLACE_START: u8 = 21
const RESCUED_LINE: u8 = 3
const RESCUED_REPLACE_START: u8 = 21

const MESSAGE_1_LINE: u8 = 5
const MESSAGE_2_LINE: u8 = 6

const MESSAGE_SUCCESS_1: string = 'You passed the level!'
const MESSAGE_SUCCESS_2: string = 'Can you do it again...?'
const MESSAGE_SUCCESS_1_REPLACE_START: u8 = 7
const MESSAGE_SUCCESS_2_REPLACE_START: u8 = 6

const MESSAGE_FAIL_1: string = 'You didn\'t save enough this time'
const MESSAGE_FAIL_2: string = 'Would you like to try again?'
const MESSAGE_FAIL_1_REPLACE_START: u8 = 1
const MESSAGE_FAIL_2_REPLACE_START: u8 = 3

const endSlate = mapToTiles([
  '__________________________________',
  '|   All lemmings accounted for   |',
  '|        You needed              |',
  '|        You rescued             |',
  '|                                |',
  '|                                |',
  '|                                |',
  '__________________________________'
])

class GameState {
  shouldRun: boolean
  levelState: LevelState
  lastGameLoopRunTime: i64
  fastForward: boolean // double the game speed
  millisecondsPerGameLoop: u16
  releaseRate: u8
  minimumReleaseRate: u8
  currentLevel: Level | null
  screenWidth: i32
  screenHeight: i32
  characterWidth: i32
  characterHeight: i32
}

const gameState: GameState = {
  fastForward: false,
  millisecondsPerGameLoop: baseMillisecondsPerGameLoop,
  lastGameLoopRunTime: Date.now(),
  minimumReleaseRate: 50,
  releaseRate: 50,
  shouldRun: true,
  levelState: LevelState.TitleScreen,
  currentLevel: null,
  screenWidth: 0,
  screenHeight: 0,
  characterWidth: 0,
  characterHeight: 0
}

export function setScreenDimensions(screenWidth: i32, screenHeight: i32): void {
  gameState.screenWidth = screenWidth
  gameState.screenHeight = screenHeight
}

export function setCharacterDimensions(characterWidth: i32, characterHeight: i32): void {
  gameState.characterWidth = characterWidth
  gameState.characterHeight = characterHeight
}

export function canStart(): boolean {
  return (
    gameState.screenWidth > 0 &&
    gameState.screenHeight > 0 &&
    gameState.characterWidth > 0 &&
    gameState.characterHeight > 0
  )
}

function insertText(map: LevelTiles, message: string, line: u8, start: u8 = 0): LevelTiles {
  if ((line as i32) >= map.length) {
    throw new Error('insertText: line argument out of map bounds')
  }
  
  if ((start + message.length) >= map[line].length) {
    throw new Error('insertText: text out of map bounds')
  }
  
  const messageArray = message.split('')
  for (var i = 0; i < messageArray.length; i++) {
    map[line][start + i] = messageArray[i]
  }

  return map
}

function endLevel(level: Level): void {
  gameState.shouldRun = false
  let endSlateToRender = cloneMap(endSlate)

  const needed = level.numberOfLemmingsForSucces.toString()
  const rescued = level.numberOfLemmingsSaved.toString()
  endSlateToRender = insertText(endSlateToRender, needed, NEEDED_LINE, NEEDED_REPLACE_START)
  endSlateToRender = insertText(endSlateToRender, rescued, RESCUED_LINE, RESCUED_REPLACE_START)

  if (rescued > needed) {
    endSlateToRender = insertText(endSlateToRender, MESSAGE_SUCCESS_1, MESSAGE_1_LINE, MESSAGE_SUCCESS_1_REPLACE_START)
    endSlateToRender = insertText(endSlateToRender, MESSAGE_SUCCESS_2, MESSAGE_2_LINE, MESSAGE_SUCCESS_2_REPLACE_START)
  } else {
    endSlateToRender = insertText(endSlateToRender, MESSAGE_FAIL_1, MESSAGE_1_LINE, MESSAGE_FAIL_1_REPLACE_START)
    endSlateToRender = insertText(endSlateToRender, MESSAGE_FAIL_2, MESSAGE_2_LINE, MESSAGE_FAIL_2_REPLACE_START)
  }

  render(endSlateToRender)
}

export function toggleFastForward(): void {
  gameState.fastForward = !gameState.fastForward
  gameState.millisecondsPerGameLoop = baseMillisecondsPerGameLoop
  if (gameState.fastForward) {
    gameState.millisecondsPerGameLoop /= fastForwardMultiplier
  }
}

export function loadLevel(level: Level): void {
  gameState.currentLevel = level
  gameState.levelState = LevelState.LevelRunning
}

export function eventLoop(): void {
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
  if (levelRunning && gameLoopOverdue) {
    gameState.lastGameLoopRunTime = currentTime
    gameLoop()
  }
}

function gameLoop(): void {
  // Loop through each lemming and progress their action
  if (!gameState.currentLevel) { return }

  const level = (gameState.currentLevel as Level)

  for (let i = 0; i < level.lemmings.length; i++) {
    if (level.lemmings[i].removed) { continue }
    level.lemmings[i].update(getSurroundingTiles(level.map, level.lemmings[i].position))
    if (level.lemmings[i].action == LemmingAction.Exited) {
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
    endLevel(level)
    return
  } else if (lemmingsLeftToSpawn) {
    level.lemmings.push(new Lemming())
  }

  renderLevel(level)
}

declare function display(arr: string): void;
declare function clear(): void;

function cloneMap(map: LevelTiles): LevelTiles {
  const mapClone: LevelTiles = []
  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[i].length; j++) {
      if (j == 0) { mapClone[i] = [] }
      mapClone[i].push(map[i][j])
    }
  }
  return mapClone
}

function renderLevel(level: Level): void {
  const map = cloneMap(level.map)
  for (let i = 0; i < level.lemmings.length; i++) {
    const lemming = level.lemmings[i]
    if (lemming.removed) { continue }
    map[lemming.position.y][lemming.position.x] = lemmingActionToCharacter(lemming.action)
  }
  
  const rightmostColumn = render(map)
  const timeLeft = level.timeLeft.toString()
  const paddingRequired = rightmostColumn - timeLeft.length
  display(' '.repeat(paddingRequired) + timeLeft)
}

function padRows(totalRows: i32, usedRows: i32): void {
  for (var i = totalRows; i > usedRows; i -= 2) {
    display('')
  }
}

function padColumn(totalColumns: i32, text: string): string {
  const charactersSpare = totalColumns - text.length
  const charactersRequiredOnLeft = Math.floor(charactersSpare / 2) as i32
  return ' '.repeat(charactersRequiredOnLeft) + text
}

function render(map: LevelTiles): i32 {
  const totalColumns = gameState.screenWidth / gameState.characterWidth
  const totalRows = gameState.screenHeight / gameState.characterHeight
  const usedRows = map.length
  
  clear()
  padRows(totalRows, usedRows)
  let rightmostColumn = 0
  for (let i = 0; i < map.length; i++) {
    const column = padColumn(totalColumns, map[i].join(''))
    rightmostColumn = Math.max(rightmostColumn, column.length) as i32
    display(column);
  }

  return rightmostColumn
}
