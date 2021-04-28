export const UPSCALE_MULTIPLIER: u8 = 4

/**
 * We want to upscale each lemming animation frame.
 * We want to ensure the skills are in the correct position
 */
export function upscale(outputLine: string): string[] {
  const upscaledOutput: string[] = []
  for (let i: u8 = 0; i < UPSCALE_MULTIPLIER; i++) { upscaledOutput.push('') }

  const characters = outputLine.split('')
  for (let characterIndex = 0; characterIndex < characters.length; characterIndex++) {
    for (let outputLine: u8 = 0; outputLine < UPSCALE_MULTIPLIER; outputLine++) {
      upscaledOutput[outputLine] += characters[characterIndex].repeat(UPSCALE_MULTIPLIER)
    }
  }

  return upscaledOutput
}
