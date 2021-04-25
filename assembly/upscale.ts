export const UPSCALE_MULTIPLIER: u8 = 4


/**
 * We want to upscale all tile characters.
 * For buttons and labels, we want to upscale so the text is still readable.
 * We need to ensure the cursor renders correctly.
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
