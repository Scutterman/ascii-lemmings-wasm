import { clearScreen } from "../loop";
import { load } from "../maps/meta/metaScreenMap";
import { Level } from "./level";

export class MetaScreen extends Level {
  protected mapRendered: boolean = false
  protected renderGameSection: boolean = false

  constructor(tag: string) {
    super(tag, 'meta', 0, 0, load(), true)
  }
  
  public renderLevel(): void {
    clearScreen()
    if (!this.mapRendered) {
      this.render(this.map, this.renderGameSection)
      this.mapRendered = true
      this.renderGameSection = false
    }
    this.renderControls(false)
  }
}