
const baseMillisecondsPerGameLoop = 1000
const fastForwardMultiplier = 2

interface GameState {
  shouldRun: boolean
  lastGameLoopRunTime: i64
  fastForward: boolean // double the game speed
  millisecondsPerGameLoop: u8
  releaseRate: u8
  minimumReleaseRate: u8
}

const gameState: GameState = {
  fastForward: false,
  millisecondsPerGameLoop: baseMillisecondsPerGameLoop,
  lastGameLoopRunTime: Date.now(),
  minimumReleaseRate: 50,
  releaseRate: 50,
  shouldRun: true
}

export function endGame(): void {
  gameState.shouldRun = false
}

export function toggleFastForward() {
  gameState.fastForward = !gameState.fastForward
  gameState.millisecondsPerGameLoop = baseMillisecondsPerGameLoop
  if (gameState.fastForward) {
    gameState.millisecondsPerGameLoop /= fastForwardMultiplier
  }
}

export function eventLoop(): void {
  while (gameState.shouldRun) {

    // Process inputs from browser
    // Send browser contextual clue updates
    // Check if frame loop should run
    const currentTime = Date.now()
    if ((currentTime - gameState.lastGameLoopRunTime) >= gameState.millisecondsPerGameLoop) {
      gameState.lastGameLoopRunTime = currentTime
      gameLoop()
    }
  }
}

function gameLoop(): void {
  // Loop through each lemming and progress their action
}