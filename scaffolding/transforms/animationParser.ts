import { allowedUserInputCharacters } from "../../assembly/text"
import { getImport } from "./parserHelper"

enum AnimationSection {
  None,
  SingleCharacterAnimation,
  Animation,
  Frame
}

export class AnimationParser {
  private static readonly colourRegex: RegExp = new RegExp(/^\#[0-9a-fA-F]+$/)
  private static readonly nameRegex: RegExp = new RegExp(/^[a-zA-Z0-9_]+$/)
  private imports = ''
  private animations: string = ''
  private animationItems: string = ''
  private inAnimation: boolean = false
  private inFrame: boolean = false
  private currentSection: AnimationSection = AnimationSection.None

  private reset(): void {
    this.currentSection = AnimationSection.None
    this.animations = ''
    this.animationItems = ''
    this.inAnimation = false
    this.imports = ''
    this.imports += getImport('../animation', ['Animation'])
    this.imports += getImport('../maps/types', ['AnimationListItem', 'SingleCharacterAnimation', 'StandardAnimation'])
  }

  public parseAnimationsFile(animationsContent: string): string {
    this.reset()
    const animationLines = animationsContent.replaceAll('\r\n', '\n').split('\n')

    for (let i = 0; i < animationLines.length; i++) {
      const line = animationLines[i].trim()

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
    if (instructions.length < 5) {
      return
    }
    
    const name = instructions[2]
    const character = instructions[3]
    const colour = instructions[4]

    if (!allowedUserInputCharacters.includes(character)) { return }

    this.addAnimationItem(name, colour, 'SingleCharacterAnimation', '"' + character + '"')
  }

  private setupNewAnimation(instructions: string[]): void {
    if (instructions.length < 3) {
      this.inAnimation = false
      return
    }

    let colour = '#000000'
    if (instructions.length >= 4) {
      colour = instructions[3]
    }
    
    const name = instructions[2]
    this.addAnimationItem(name, colour, 'StandardAnimation', name + 'Animation')
    this.startAnimation(name)
  }

  private addAnimationItem(name: string, colour: string, type: string, value: string): void {
    if (!AnimationParser.nameRegex.test(name) || !AnimationParser.colourRegex.test(colour)) {
      return
    }
    
    this.animationItems += 'const ' + name + ' = new ' + type + '(' + value + ', "' + colour + '")\n'
    this.animationItems += 'animationItems.set("' + name + '", ' + name + ')\n'
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
    if (!AnimationParser.nameRegex.test(name)) {
      return
    }
    this.animations += 'const ' + name + 'Animation = new Animation([\n'
    this.inAnimation = true
  }

  private endAnimation(): void {
    this.animations += '])\n'
    this.inAnimation = false
  }

  private startFrame(): void {
    this.animations += '[\n'
    this.inFrame = true
  }

  private endFrame(): void {
    this.animations += '],\n'
    this.inFrame = false
  }

  private addToFrame(line: string): void {
    if (line.length == 0) { return }

    this.animations += '['
    const lineCharacters = line.split('')
    for (let char of lineCharacters) {
      if (!allowedUserInputCharacters.includes(char)) { continue }
      if (char == '\\') { char += '\\' }
      this.animations += '"' + char + '"' + ','
    }

    this.animations = this.animations.substr(0, this.animations.length - 1) + '],\n'
  }
}
