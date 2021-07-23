import { Transform } from 'assemblyscript/cli/transform'
import { Parser as MapParser } from './parser'
import { readdirSync } from 'fs'

export class GenerateMapTransform extends Transform {
  private mapParser: MapParser = new MapParser()
  private difficultyLevels: string[] = ['fun', 'tricky', 'taxing', 'mayhem']

  constructor() {
    super()
    this.log('Beginning map transform')
    this.processDifficulties()
    this.processLevelSelect()
    this.processAvailableLevels()
    this.log('Ending map transform')
  }

  private processDifficulties(): void {
    for (let i = 0; i < this.difficultyLevels.length; i++) {
      this.processDifficulty(this.difficultyLevels[i])
    }
  }
  
  private processDifficulty(difficulty: string): void {
    let files = readdirSync('./assembly/maps/' + difficulty)
    if (files == null) { files = [] }
    this.log(files.join('\n'))
    files = files.filter(file => file.endsWith('.map'))
    
    this.log('Processing map directory ' + difficulty)
    
    if (files.length > 0) {
      for (let i = 0; i < files.length; i++) {
        this.log('found file ' + i.toString() + ': "' + files[i] + '"')
        const map = this.readFile(`assembly/maps/${ difficulty }/${ files[i] }`, this.baseDir)
        if (map == null) {
          this.log('Could not read map ' + difficulty + '/' + files[i])
        } else {
          this.log('read map, contains ' + map.length.toString() + ' characters')
          const parts = files[i].substr(0, files[i].length - 4).split('_')
          if (parts.length < 2) {
            this.log('Could not split file name into number and code')
            continue
          }

          const result = this.mapParser.parseGeneratedMap(map, difficulty, parseInt(parts[0]), parts[1], 4, 1)
          this.log('got result ' + result.length.toString())
          const name = `assembly/generatedLevels/${ difficulty }_${ parts[0] }_${ parts[1] }`
          this.writeFile(
            name + '.ts',
            result,
            this.baseDir
          )
        }
      }
    } else {
      this.log('Found no files')
    }
  }

  private processLevelSelect(): void {
    const levelSelect = this.mapParser.generateLevelSelectFile()
    const name = 'select'
    this.writeFile(
      'assembly/generatedLevels/' + name + '.ts',
      levelSelect,
      this.baseDir
    )
  }

  private processAvailableLevels(): void {
    const availableLevels = this.mapParser.generateAvailableLevelFile()
    const name = 'available'
    this.writeFile(
      'assembly/generatedLevels/' + name + '.ts',
      availableLevels,
      this.baseDir
    )
  }
}

module.exports = GenerateMapTransform
