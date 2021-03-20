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
  while (gameState.shouldRun) {
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
}

function gameLoop(): void {
  // Loop through each lemming and progress their action
  render()
}

declare function display(arr: string): void;
declare function clear(): void;

function render(): void {
  clear()
  // TODO:: render other elements
  if (!gameState.currentLevel) { return }

  const map = (gameState.currentLevel as Level).map
  
  for (var i = 0; i < map.length; i++) {
    display(map[i]);
  }
}
