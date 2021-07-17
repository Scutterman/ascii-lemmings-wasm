import { Parser } from 'assemblyscript';
import { Transform } from 'assemblyscript/cli/transform'
import { Parser as MapParser } from './parser'

export class GenerateMapTransform extends Transform {
  private mapParser: MapParser = new MapParser()
  private parser: Parser
  private difficultyLevels: string[] = ['fun', 'tricky', 'taxing', 'mayhem']

  public afterParse(parser: Parser): void {
    this.parser = parser
    this.log('Beginning map transform')
    this.processDifficulties()
    this.log('Ending map transform')
  }

  private processDifficulties(): void {
    for (let i = 0; i < this.difficultyLevels.length; i++) {
      this.processDifficulty(this.difficultyLevels[i])
    }
  }
  
  private processDifficulty(difficulty: string): void {
    let files = this.listFiles('assembly/maps/' + difficulty, this.baseDir)
    if (files == null) { files = [] }
    
    this.log('Processing map directory ' + difficulty)
    
    if (files.length > 0) {
      for (let i = 0; i < files.length; i++) {
        this.log('found file ' + i.toString() + ': "' + files[i] + '"')
        const map = this.readFile('assembly/maps/fun/1_CAJJLDLBCS.ts', this.baseDir)
        if (map == null) {
          this.log('Could not read map ' + difficulty + '/' + files[i])
        } else {
          this.log('read map, contains ' + map.length.toString() + ' characters')
          const parts = files[i].substr(0, files[i].length - 3).split('_')
          if (parts.length < 2) {
            this.log('Could not split file name into number and code')
            continue
          }

          const result = this.mapParser.parseGeneratedMap(map, difficulty, u8(parseInt(parts[0])), parts[1], 3, 1)
          this.log('got result ' + result.length.toString())
          const name = `assembly/generatedLevels/${ difficulty }_${ parts[0] }_${ parts[1] }`
          this.writeFile(
            name + '.ts',
            result,
            this.baseDir
          )
          
          this.parser.parseFile(result, './' + name + '.ts', false)
          // this.parser.backlog.push(name)
        }
      }
    } else {
      this.log('Found no files')
    }
  }
}

module.exports = GenerateMapTransform
