import { Vec2 } from "../position"
import { LemmingGift, LevelTileDetail } from "../types"
import { UIControl } from "../ui/uiControl"
import { UILabel } from "../ui/uiLabel"
import { Panel } from "../ui/panel"
import { allowedUserInputCharacters } from "../../shared/src/wasm-safe"
import { LevelMapDetail } from "../maps/types"
import { PanelContainer } from "../ui/panelContainer"

export abstract class BaseLevel {
  public numberOfLemmings: u8
  public numberOfLemmingsForSuccess: u8
  public timeLeft: u16 = 300
  public numberOfLemmingsSaved: u8 = 0
  public numberOfLemmingsRemoved: u8 = 0
  public uiControls: UIControl[] = []
  public uiLabels: UILabel[] = []
  public uiPanels: Panel[] = []
  public uiPanelContainers: PanelContainer[] = []
  public isMetaScreen: boolean
  public hasEnded: boolean = false
  public scrollPosition: Vec2 = new Vec2(0,0)
  protected lastScrollPosition: Vec2 = new Vec2(0,0)
  protected firstRender: boolean = true
  public canScroll: boolean = true

  public abstract processLemmingSelect(mouseTileX: i32, mouseTileY: i32, processLemmingClick: boolean): boolean
  public abstract updateLemmings(): void
  public abstract gameLoop(): boolean
  public abstract nuke(): void
  public abstract giveGiftToLemming(lemmingNumber: u8, gift: LemmingGift): void
  public abstract clone(): BaseLevel
  public abstract renderLevel(): void
  protected abstract render(map: LevelTileDetail, isRenderingGameSection: boolean, resetAll: boolean): void

  public abstract canUseSkill(skill: LemmingGift): boolean
  public abstract skillUsed(skill: LemmingGift): void
  public abstract skillSelected(skill: LemmingGift): void

  protected tag: string = ''
  public map: LevelTileDetail

  constructor(tag: string, lemmingsToSpawn: u8, numberOfLemmingsForSucces: u8, map: LevelMapDetail, isMetaScreen: boolean = false) {
    this.map = map.toTileDetail()
    const tagCharacters = tag.split('')
    for (let i = 0; i < tagCharacters.length; i++) {
      if (allowedUserInputCharacters.includes(tagCharacters[i])) {
        this.tag += tagCharacters[i]
      }
    }
    
    this.numberOfLemmings = lemmingsToSpawn
    this.numberOfLemmingsForSuccess = numberOfLemmingsForSucces
    this.isMetaScreen = isMetaScreen
  }
  
  public getLemmingSavedPercent(): u8 {
    if (this.numberOfLemmings == 0) { return 100 }
    return u8(Math.round(this.numberOfLemmingsSaved / (this.numberOfLemmings * 0.01)))
  }
  
  public getLemmingNeededPercent(): u8 {
    if (this.numberOfLemmings == 0) { return 0 }
    return u8(Math.round(this.numberOfLemmingsForSuccess / (this.numberOfLemmings * 0.01)))
  }
  
  protected cloneMap(): LevelTileDetail {
    const mapClone: LevelTileDetail = []
    for (let i = 0; i < this.map.length; i++) {
      for (let j = 0; j < this.map[i].length; j++) {
        if (j == 0) { mapClone[i] = [] }
        mapClone[i].push(this.map[i][j].clone())
      }
    }
    return mapClone
  }

  public updateLabel(tag: string, newText: string): void {
    const label = this.getUIByTag(tag)
    if (label != null) {
      label.updateText(newText)
    }
  }

  public getLabelValueByTag(tag: string, defaultValue: string = ''): string {
    const label = this.getUIByTag(tag)
    if (label != null) {
      return label.getText()
    } else {
      return defaultValue
    }
  }

  public getLabelNumberValueByTag(tag: string, defaultValue: u8 = 0): u8 {
    const label = this.getUIByTag(tag)
    if (label != null) {
      return U8.parseInt(label.getText())
    } else {
      return defaultValue
    }
  }

  protected getUIByTag(tag: string): UILabel | null {
    if (tag == '') {
      return null
    }
    
    for (let i = 0; i < this.uiLabels.length; i++) {
      if (this.uiLabels[i].getTag() == tag) {
        return this.uiLabels[i]
      }
    }
    
    for (let i = 0; i < this.uiControls.length; i++) {
      if (this.uiControls[i].getTag() == tag) {
        return this.uiControls[i]
      }
    }
    
    for (let i = 0; i < this.uiPanels.length; i++) {
      const item = this.uiPanels[i].getUIByTag(tag)
      if (item != null) { return item }
    }
    
    return null
  }

  protected renderControls(isDirty: boolean): void {
    for (let i = 0; i < this.uiControls.length; i++) {
      this.uiControls[i].render()
    }

    for (let i = 0; i < this.uiLabels.length; i++) {
      this.uiLabels[i].render()
    }

    for (let i = 0; i < this.uiPanels.length; i++) {
      this.uiPanels[i].render(isDirty)
    }

    for (let i = 0; i < this.uiPanelContainers.length; i++) {
      this.uiPanelContainers[i].render(isDirty)
    }
  }
}
