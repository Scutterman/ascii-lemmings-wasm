import { LemmingAction, lemmingActionToCharacter } from "./lemming"
import { Level, LevelState } from "./level"

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

  if (level.lemmings.length < (level.numberOfLemmings as i32)) {
    level.lemmings.push({
      action: LemmingAction.Fall,
      actionTimeLeft: 0,
      movingDown: true,
      movingLeft: false,
      movingRight: false,
      movingUp: false,
      removed: false,
      position: { x: 5, y: 4}
    })
  }
  
  render(level)
}

declare function display(arr: string): void;
declare function clear(): void;

function render(level: Level): void {
  clear()
  // TODO:: render other elements
  
  const map = level.map
  level.timeLeft--

  for (let i = 0; i < level.lemmings.length; i++) {
    const lemming = level.lemmings[i]
    if (lemming.removed) { continue }

    const line = map[lemming.position.y - 1].split('')
    line[lemming.position.x - 1] = lemmingActionToCharacter(lemming.action)
    map[lemming.position.y - 1] = line.join('')
  }
  
  for (let i = 0; i < map.length; i++) {
    display(map[i]);
  }
  display('                    ' + level.timeLeft.toString())
}
