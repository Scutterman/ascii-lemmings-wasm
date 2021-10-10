import { allowedUserInputCharacters, stringOnlyContainsSafeCharacters } from "../../shared/src/wasm-safe"
import { getImport } from "./parserHelper"

enum AnimationSection {
  None,
  SingleCharacterAnimation,
  Animation,
  Frame
}

export class AnimationParser {
  private static readonly allowedColours: string[] = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#'.split('')
  private static readonly allowedNames: string[] = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_'.split('')
  private imports = ''
  private animations: string = ''
  private animationItems: string = ''
  private flippedAnimation: string = ''
  private inAnimation: boolean = false
  private needsFlipping: boolean = false
  private inFrame: boolean = false
  private currentSection: AnimationSection = AnimationSection.None
  private singleCharacterAnimations: Map<string, string> = new Map<string, string>()

  public getSingelCharacterAnimation(): Map<string, string> {
    return this.singleCharacterAnimations
  }

  private reset(): void {
    this.currentSection = AnimationSection.None
    this.animations = ''
    this.animationItems = ''
    this.flippedAnimation = ''
    this.inAnimation = false
    this.needsFlipping = false
    this.imports = ''
    this.singleCharacterAnimations = new Map<string, string>()
    this.imports += getImport('../animation', ['Animation'])
    this.imports += getImport('../maps/types', ['AnimationListItem', 'SingleCharacterAnimation', 'StandardAnimation'])
  }

  public parseAnimationsFile(animationsContent: string): string {
    this.reset()
    const animationLines: string[] = animationsContent.replaceAll('\r\n', '\n').split('\n')
    
    for (let i = 0; i < animationLines.length; i++) {
      let line = animationLines[i]
      
      if (this.currentSection != AnimationSection.Frame) {
        line = line.trim()
      }

      if (line.length === 0) {
        continue
      }

      if (line.startsWith('//')) {
        const instructions = line.substr(2).split('::')

        if (instructions.length < 2) {
          continue
        }

        if (instructions[0] != 'EDITORHINT') {
          continue
        }

        if (this.inFrame) {
          this.endFrame()
        }

        if (this.inAnimation && instructions[1] != 'FRAME') {
          this.endAnimation()
        }
        
        switch (true) {
          case instructions[1] == 'ANIMATION_SINGLE':
            this.addCharacterAnimation(instructions)
            this.currentSection = AnimationSection.None
          break
          case instructions[1] == 'ANIMATION':
            this.setupNewAnimation(instructions)
            this.currentSection = AnimationSection.None
          break
          case instructions[1] == 'FRAME':
            this.setupNewFrame()
            this.currentSection = AnimationSection.Frame
          break
        }

        continue
      }
      
      switch (true) {
        case this.currentSection == AnimationSection.Frame:
          this.addToFrame(line)
        break
      }
    }

    if (this.inFrame) {
      this.endFrame()
    }

    if (this.inAnimation) {
      this.endAnimation()
    }
    
    return '' +
      this.imports +
      this.animations +
      'export const animationItems = new Map<string, AnimationListItem>()\n' +
      this.animationItems
  }

  private addCharacterAnimation(instructions: string[]): void {
    if (instructions.length < 6) {
      return
    }
    
    const name = instructions[2]
    const character = instructions[3]
    const colour = instructions[4]
    
    if (!allowedUserInputCharacters.includes(character)) { return }
    
    this.singleCharacterAnimations.set(name, character)
    this.addAnimationItem(name, colour, 'SingleCharacterAnimation', '"' + character + '"', instructions[5])
  }

  private setupNewAnimation(instructions: string[]): void {
    if (instructions.length < 5) {
      this.inAnimation = false
      return
    }

    const name = instructions[2]
    const colour = instructions[3]
    this.addAnimationItem(name, colour, 'StandardAnimation', name + 'Animation', instructions[4])
    
    if (name.startsWith('LEMMING_')) {
      this.needsFlipping = true
      const flippedName = name + '_FLIPPED'
      this.addAnimationItem(flippedName, colour, 'StandardAnimation', flippedName + 'Animation', instructions[4])
    }

    this.startAnimation(name)
  }

  private addAnimationItem(name: string, colour: string, type: string, value: string, blockSideImport: string): void {
    if (!stringOnlyContainsSafeCharacters(name, AnimationParser.allowedNames) || !stringOnlyContainsSafeCharacters(colour, AnimationParser.allowedColours)) {
      return
    }
    
    this.animationItems += 'const ' + name + ' = new ' + type + '(' + value + ', "' + colour + '", ' + this.getCanDestroyValue(blockSideImport) + ')\n'
    this.animationItems += 'animationItems.set("' + name + '", ' + name + ')\n'
  }

  private getCanDestroyValue(input: string): number {
    const blockSideImport = input.split('')
    if (blockSideImport.length != 4) { return 0 }

    let multiplier = 1
    let total = 0
    for (let bit = blockSideImport.length - 1; bit >= 0; bit--) {
      total += blockSideImport[bit] == '1' ? multiplier : 0
      multiplier *= 2
    }

    return total
  }

  private setupNewFrame(): void {
    if (!this.inAnimation) {
      this.inFrame = false
      return
    }

    if (this.inFrame) {
      this.endFrame()
    }

    this.startFrame()
  }

  private startAnimation(name: string): void {
    if (!stringOnlyContainsSafeCharacters(name, AnimationParser.allowedNames)) {
      return
    }
    this.inAnimation = true
    
    this.animations += 'const ' + name + 'Animation = new Animation([\n'

    if (this.needsFlipping) {
      this.flippedAnimation += 'const ' + name+ '_FLIPPED' + 'Animation = new Animation([\n'
    }

  }

  private endAnimation(): void {
    this.animations += '])\n'

    if (this.needsFlipping) {
      this.flippedAnimation += '])\n'
      this.animations += this.flippedAnimation
      this.flippedAnimation = ''
      this.needsFlipping = false
    }

    this.inAnimation = false
  }

  private startFrame(): void {
    this.animations += '[\n'
    if (this.needsFlipping) {
      this.flippedAnimation += '[\n'
    }
    
    this.inFrame = true
  }

  private endFrame(): void {
    this.animations += '],\n'
    if (this.needsFlipping) {
      this.flippedAnimation += '],\n'
    }
    
    this.inFrame = false
  }

  private addToFrame(line: string, addToFlipped = false): void {
    if (line.length == 0) { return }

    let change = ''
    change += '['
    const lineCharacters = line.split('')
    for (var i = 0; i < lineCharacters.length; i++) {
      let char = lineCharacters[i]
      if (!allowedUserInputCharacters.includes(char)) { continue }
      if (char == '\\') { char += '\\' }
      change += '"' + char + '"' + ','
    }

    change = change.substr(0, change.length - 1) + '],\n'

    if (!addToFlipped) {
      this.animations += change
    } else {
      this.flippedAnimation += change
    }

    if (!addToFlipped && this.needsFlipping) {
      this.addToFrame(line.split('').reverse().join(''), true)
    }
  }
}
