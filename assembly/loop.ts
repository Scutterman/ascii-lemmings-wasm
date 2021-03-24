import { Lemming, lemmingActionToCharacter } from "./lemming"
import { Level, LevelState } from "./level"
import { getSurroundingTiles, LevelTiles } from "./map"

const baseMillisecondsPerGameLoop: u16 = 1000 as u16
const fastForwardMultiplier: u8 = 2 as u8

class GameState {
  shouldRun: boolean
  levelState: LevelState
  lastGameLoopRunTime: i64
  fastForward: boolean // double the game speed
  millisecondsPerGameLoop: u16
  releaseRate: u8
  minimumReleaseRate: u8
  currentLevel: Level | null
}

const gameState: GameState = {
  fastForward: false,
  millisecondsPerGameLoop: baseMillisecondsPerGameLoop,
  lastGameLoopRunTime: Date.now(),
  minimumReleaseRate: 50,
  releaseRate: 50,
  shouldRun: true,
  levelState: LevelState.TitleScreen,
  currentLevel: null
}

export function endGame(): void {
  gameState.shouldRun = false
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
  
  for (let i = 0; i < map.length; i++) {
    display(map[i].join(''));
  }

  display('                    ' + level.timeLeft.toString())
}
