import { currentLevel, messageResponse } from ".."
import { BOUNDARIES_X, BOUNDARIES_Y, CONTROLS_Y, TILE_AIR, TILE_GROUND, VISIBLE_X, VISIBLE_Y } from "../map"
import { LevelMapDetail } from "../maps/types"
import { Vec2 } from "../position"
import { Panel } from "../ui/panel"
import { UIControl } from "../ui/uiControl"
import { MetaScreen } from "./metascreen"
import { TileDetail } from '../types'
import { Animation } from "../animation"

export class Editor extends MetaScreen {
  private actionPanel: Panel = new Panel(new Vec2(-1, 38))
  private levelLoaded: boolean = false
  private animationListItemKeys: Panel = new Panel(new Vec2(-1,-1))
  private tileOptions: Panel = new Panel(new Vec2(-1,-1))
  private selectedBlockKey: string = ''
  private selectedBlockX: i32 = -1
  private selectedBlockY: i32 = -1
  private metaMap: LevelMapDetail = new LevelMapDetail([])

  constructor() {
    super('EDITOR')

    this.uiPanels.push(this.actionPanel)
    this.actionPanel.items.push(new UIControl(new Vec2(0, 0), "Load", () => {
      messageResponse('load', '', '')
    }))

    this.uiPanels.push(this.tileOptions)
    this.uiPanels.push(this.animationListItemKeys)
  }

  private showOptionsAfterLoad(): void {
    this.actionPanel.items = []
    this.actionPanel.items.push(new UIControl(new Vec2(0, 0), "Save", () => {
      messageResponse('save', 'foobar.json', '{ "hello": "world" }')
    }))

    this.actionPanel.items.push(new UIControl(new Vec2(0, 0), "Tile", () => {
      if (currentLevel instanceof Editor) {
        const editor = currentLevel as Editor
        editor.showTilePanel()
      }
    }))

    this.actionPanel.items.push(new UIControl(new Vec2(0, 0), "Animation", () => {
      if (currentLevel instanceof Editor) {
        const editor = currentLevel as Editor
        editor.showAnimationPanel()
      }
    }))
  }

  public mapSquareClicked(mouseTileX: i32, mouseTileY: i32): void {
    if (mouseTileY >= 0 && mouseTileY < this.metaMap.tiles.length && mouseTileX >= 0 && mouseTileY < this.metaMap.tiles[mouseTileY].length) {
      this.selectedBlockKey = mouseTileX.toString() + ',' + mouseTileY.toString()
      this.selectedBlockX = mouseTileX
      this.selectedBlockY = mouseTileY
    }
  }

  public setBlockAnimation(animationName: string): void {
    animationName = animationName.replace('ANIMATION_LIST_ITEM_KEY_', '')
    this.animationListItemKeys.items = []

    if (animationName == 'Cancel') {
      return
    } else if (animationName != 'None') {
      this.metaMap.customAnimations.set(this.selectedBlockKey, animationName)
    } else if (this.metaMap.customAnimations.has(this.selectedBlockKey)) {
      this.metaMap.customAnimations.delete(this.selectedBlockKey)
    }

    const tile = this.metaMap.tiles[this.selectedBlockY].slice(this.selectedBlockX, this.selectedBlockX + 1)
    const tileDetail = this.metaMap.detailFromTile(tile, this.selectedBlockY, this.selectedBlockX)
    this.map[this.selectedBlockY][this.selectedBlockX] = tileDetail
  }
 
  public setTileOption(tile: string): void {
    tile = tile.replace('TILE_OPTION_', '')
    this.tileOptions.items = []

    if (tile == 'Cancel') {
      return
    } else  {
      const row = this.metaMap.tiles[this.selectedBlockY]
      const beginning = row.slice(0, this.selectedBlockX)
      const end = row.slice(this.selectedBlockX + 1)
      this.metaMap.tiles[this.selectedBlockY] = beginning + tile + end
    }

    const tileDetail = this.metaMap.detailFromTile(tile, this.selectedBlockY, this.selectedBlockX)
    this.map[this.selectedBlockY][this.selectedBlockX] = tileDetail
  }
 
  public showTilePanel(): void {
    const tileOptions = [TILE_AIR, TILE_GROUND, 'Cancel']
    for (let i = 0; i < tileOptions.length; i++) {
      this.tileOptions.items.push(new UIControl(new Vec2(0,0), tileOptions[i], tag => {
        if (typeof tag != 'undefined') {
          (currentLevel as Editor).setTileOption(tag)
        }
      }, 'TILE_OPTION_' + tileOptions[i]))
    }
  }

  public showAnimationPanel(): void {
    const animationListItemKeys = ['None', 'ground', 'grass', 'Cancel']
    for (let i = 0; i < animationListItemKeys.length; i++) {
      this.animationListItemKeys.items.push(new UIControl(new Vec2(0,0), animationListItemKeys[i], tag => {
        if (typeof tag != 'undefined') {
          (currentLevel as Editor).setBlockAnimation(tag)
        }
      }, 'ANIMATION_LIST_ITEM_KEY_' + animationListItemKeys[i]))
    }
  }

  public mapSwapped(map: LevelMapDetail): void {
    this.mapRendered = false
    this.metaMap = map
    const tileDetail = this.metaMap.toTileDetail()
    let maxY: i32 = VISIBLE_Y + CONTROLS_Y + BOUNDARIES_Y
    let maxX: i32 = VISIBLE_X + BOUNDARIES_X
    for (let row = tileDetail.length; row < maxY; row++) {
      tileDetail.push([])
      for (let col = 0; col < maxX; col++) {
        tileDetail[row].push(new TileDetail(' ', '#000000', new Animation([])))
      }
    }
    this.map = tileDetail

    this.showOptionsAfterLoad()
  }

  public clone(): Editor {
    return new Editor()
  }
}
