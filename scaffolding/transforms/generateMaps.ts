import { Parser as MapParser } from './parser'
// import { readdirSync, readFileSync, writeFileSync } from 'fs'
import { AnimationParser } from './animationParser'
// import { resolve } from 'path'
import { Transform } from 'assemblyscript/cli/transform'

class GenerateMapTransform extends Transform {
  private mapParser: MapParser = new MapParser()
  private animationParser: AnimationParser = new AnimationParser()
  private difficultyLevels: string[] = ['fun', 'tricky', 'taxing', 'mayhem']

  constructor() {
    super()
    console.log('Beginning map transform')
    this.processAnimations()
    this.processDifficulties()
    this.processLevelSelect()
    this.processAvailableLevels()
    console.log('Ending map transform')
  }

  // private readFile(path: string): string {
  //   return readFileSync(resolve(__dirname, '..', '..', path)).toString('ascii')
  // }

  // private writeFile(path: string, content: string | Buffer): void {
  //   writeFileSync(resolve(__dirname, '..', '..', path), content)
  // }

  // private log(text: string): void {
  //   console.log(text)
  // }

  private processAnimations(): void {
    const fileContent = this.readFile('assembly/maps/global.animation', '../')
    if (fileContent == null) {
      this.log('Could not read animation file')
    } else {
      const animationContent = this.animationParser.parseAnimationsFile(fileContent)
      const name = 'animationItems'
      this.writeFile('assembly/generatedLevels/' + name + '.ts', animationContent, '../')
    }
  }

  private processDifficulties(): void {
    for (let i = 0; i < this.difficultyLevels.length; i++) {
      this.processDifficulty(this.difficultyLevels[i])
    }
  }
  
  private processDifficulty(difficulty: string): void {
    let files = this.listFiles('./assembly/maps/' + difficulty, '../')
    if (files == null) { files = [] }
    this.log(files.join('\n'))
    files = files.filter(file => file.endsWith('.map'))
    
    this.log('Processing map directory ' + difficulty)
    
    if (files.length > 0) {
      for (let i = 0; i < files.length; i++) {
        this.log('found file ' + i.toString() + ': "' + files[i] + '"')
        const map = this.readFile(`assembly/maps/${ difficulty }/${ files[i] }`, '../')
        if (map == null) {
          this.log('Could not read map ' + difficulty + '/' + files[i])
        } else {
          this.log('read map, contains ' + map.length.toString() + ' characters')
          const parts = files[i].substr(0, files[i].length - 4).split('_')
          if (parts.length < 2) {
            this.log('Could not split file name into number and code')
            continue
          }

          const number = parseInt(parts[0])
          const code = parts[1]

          this.log('parsing map ' + difficulty + ' ' + number + ' ' + code)
          const result = this.mapParser.parseGeneratedMap(map, this.animationParser.getSingelCharacterAnimation())
          this.log('got result ' + result.length.toString())
          const name = `assembly/generatedLevels/${ difficulty }_${ parts[0] }_${ parts[1] }`
          this.writeFile(name + '.ts',result, '../')
        }
      }
    } else {
      this.log('Found no files')
    }
  }

  private processLevelSelect(): void {
    const levelSelect = this.mapParser.generateLevelSelectFile()
    const name = 'select'
    this.writeFile('assembly/generatedLevels/' + name + '.ts', levelSelect, '../')
  }

  private processAvailableLevels(): void {
    const availableLevels = this.mapParser.generateAvailableLevelFile()
    const name = 'available'
    this.writeFile('assembly/generatedLevels/' + name + '.ts', availableLevels, '../')
  }
}

export = GenerateMapTransform
