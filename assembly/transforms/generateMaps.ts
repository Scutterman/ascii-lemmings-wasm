import { Parser } from 'assemblyscript';
import { Transform } from 'assemblyscript/cli/transform'

export class GenerateMapTransform extends Transform {
  private difficultyLevels: string[] = ['fun', 'tricky', 'taxing', 'mayhem']
  public afterParse(parser: Parser): void {
    this.log('Beginning map transform')
    // const map = this.readFile('assembly/maps/fun/1_CAJJLDLBCS.ts', this.baseDir)
    // console.log('read map, contains ' + (map?.length ?? 0).toString() + ' characters')
    for (let i = 0; i < this.difficultyLevels.length; i++) {
      const difficulty = this.difficultyLevels[i]
      let files = this.listFiles('assembly/maps/' + difficulty, this.baseDir)
      if (files == null) { files = [] }
    
      this.log('Processing map directory ' + difficulty)
      
      if (files.length > 0) {
        for (let i = 0; i < files.length; i++) {
          this.log('found file ' + i.toString() + ': "' + files[i] + '"')
        }
      } else {
        this.log('Found no files')
      }
    }
    this.log('Ending map transform')
  }
}

module.exports = GenerateMapTransform
