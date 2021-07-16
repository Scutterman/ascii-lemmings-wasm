import { currentLevel, gameState, messageResponse } from ".."
import { TILE_AIR, TILE_BOUNDARY, TILE_BRICK, TILE_EXIT, TILE_GROUND, TILE_SIDE } from "../map"
import { LevelMapDetail } from "../maps/types"
import { Vec2 } from "../position"
import { Panel } from "../ui/panel"
import { UIControl } from "../ui/uiControl"
import { MetaScreen } from "./metascreen"
import { renderBoxAroundBlock } from "../loop"
import { removeItem } from "../vdom/elements"
import { UILabel } from "../ui/uiLabel"
import { TileDetail } from "../types"

declare function addBlocks(startRow: u8, endRow: u8, startCol: u8, endCol: u8): void

export class Editor extends MetaScreen {
  private actionPanel: Panel = new Panel(new Vec2(-1, 38))
  private levelLoaded: boolean = false
  private tileOptions: Panel = new Panel(new Vec2(-1,-1))
  private selectedBlockKey: string = ''
  private selectedBlockX: i16 = -1
  private selectedBlockY: i16 = -1
  private metaMap: LevelMapDetail = new LevelMapDetail([])

  constructor() {
    super('EDITOR')
    
    this.uiPanels.push(this.actionPanel)
    this.actionPanel.addItem(new UIControl(new Vec2(0, 0), "Load", () => {
      messageResponse('load', '', '')
    }))

    this.tileOptions.setBackgroundColour('#ffffff')
    this.tileOptions.hide()
    this.uiPanels.push(this.tileOptions)
  }

  private addRow(): void {
    const cols = this.metaMap.tiles.length == 0 ? 1 : this.metaMap.tiles[0].length
    this.metaMap.tiles.push(TILE_SIDE + TILE_AIR.repeat(cols - 2) + TILE_SIDE)
    
    const row: TileDetail[] = []
    for (let col = 0; col < cols; col++) {
      const tile = col == 0 || col == cols - 1 ? TILE_SIDE : TILE_AIR
      const detail = this.metaMap.detailFromTile(tile, this.metaMap.tiles.length - 1, col)
      detail.isDirty = true
      if (tile == TILE_AIR) {
        detail.needsRemoval = true
      }
      row.push(detail)
    }
    this.map.push(row)
    
    addBlocks(u8(this.map.length - 1), u8(this.map.length), u8(0), u8(cols))
  }

  private addColumn(): void {
    const rows = this.metaMap.tiles.length
    for (let row = 0; row < rows; row++) {
      const tile = row == 0 ? TILE_BOUNDARY : TILE_AIR
      const metaMapRow = this.metaMap.tiles[row]
      
      const lastCharacter = metaMapRow.substr(metaMapRow.length - 2)
      this.metaMap.tiles[row] = metaMapRow.substr(0, metaMapRow.length - 2) + tile + lastCharacter

      const col = this.map[row].length - 1
      const last = this.map[row][col]
      const detail = this.metaMap.detailFromTile(tile, row, col)
      if (tile == TILE_AIR) {
        detail.needsRemoval = true
      }
      detail.isDirty = true
      last.isDirty = true

      this.map[row][col] = detail
      this.map[row].push(last)
    }

    addBlocks(u8(0), u8(this.map.length), u8(this.map[0].length - 1), u8(this.map[0].length))
  }

  private showOptionsAfterLoad(): void {
    this.actionPanel.empty()
    this.actionPanel.addItem(new UIControl(new Vec2(0, 0), "Add Row", () => {
      (currentLevel as Editor).addRow()
    }))
    this.actionPanel.addItem(new UIControl(new Vec2(0, 0), "Add Col", () => {
      (currentLevel as Editor).addColumn()
    }))
    this.actionPanel.addItem(new UIControl(new Vec2(0, 0), "Save", () => {
      messageResponse('save', 'foobar.json', '{ "hello": "world" }')
    }))
  }

  public mapSquareClicked(mouseTileX: i32, mouseTileY: i32): void {
    const x = i16(mouseTileX) + this.scrollPosition.x
    const y = i16(mouseTileY) + this.scrollPosition.y
    if (y >= 0 && y < this.metaMap.tiles.length && x >= 0 && x < this.metaMap.tiles[y].length) {
      this.selectedBlockKey = x.toString() + ',' + y.toString()
      this.selectedBlockX = x
      this.selectedBlockY = y
      this.showTilePanel()
    }
  }

  public setBlockAnimation(animationName: string): void {
    animationName = animationName.replace('ANIMATION_LIST_ITEM_KEY_', '')
    
    if (animationName == 'Cancel') {
      return
    } else if (animationName != 'None') {
      this.metaMap.customAnimations.set(this.selectedBlockKey, animationName)
    } else if (this.metaMap.customAnimations.has(this.selectedBlockKey)) {
      this.metaMap.customAnimations.delete(this.selectedBlockKey)
    }

    const id = this.map[this.selectedBlockY][this.selectedBlockX].elementId
    const tile = this.metaMap.tiles[this.selectedBlockY].slice(this.selectedBlockX, this.selectedBlockX + 1)
    const tileDetail = this.metaMap.detailFromTile(tile, this.selectedBlockY, this.selectedBlockX)
    tileDetail.elementId = id
    tileDetail.isDirty = true
    this.map[this.selectedBlockY][this.selectedBlockX] = tileDetail

    this.renderGameSection = true
    this.mapRendered = false
  }
 
  public setTileOption(tile: string): void {
    tile = tile.replace('TILE_OPTION_', '')
    
    if (tile == 'Cancel') {
      return
    } else  {
      const row = this.metaMap.tiles[this.selectedBlockY]
      const beginning = row.slice(0, this.selectedBlockX)
      const end = row.slice(this.selectedBlockX + 1)
      this.metaMap.tiles[this.selectedBlockY] = beginning + tile + end
    }

    const id = this.map[this.selectedBlockY][this.selectedBlockX].elementId
    const tileDetail = this.metaMap.detailFromTile(tile, this.selectedBlockY, this.selectedBlockX)
    tileDetail.elementId = id
    tileDetail.isDirty = true
    if (tile == TILE_AIR) {
      tileDetail.needsRemoval = true
    }
    this.map[this.selectedBlockY][this.selectedBlockX] = tileDetail

    this.renderGameSection = true
    this.mapRendered = false
  }
 
  public showTilePanel(): void {
    this.tileOptions.show()
  }
  
  private populatePanels(): void {
    this.tileOptions.empty()
    
    const tileOptions = [TILE_AIR, TILE_GROUND, TILE_BRICK, TILE_EXIT, 'Cancel']
    this.tileOptions.addItem(new UILabel(new Vec2(0,0), 'Tile:'))
    this.tileOptions.addLinebreak()

    for (let i = 0; i < tileOptions.length; i++) {
      this.tileOptions.addItem(new UIControl(new Vec2(0,0), tileOptions[i], tag => {
        if (typeof tag != 'undefined') {
          (currentLevel as Editor).setTileOption(tag)
        }
      }, 'TILE_OPTION_' + tileOptions[i]))
    }

    this.tileOptions.addLinebreak()
    this.tileOptions.addItem(new UILabel(new Vec2(0,0), 'Animation:'))
    this.tileOptions.addLinebreak()

    const animationListItemKeys = this.metaMap.animationList.keys()
    animationListItemKeys.push('None')
    animationListItemKeys.push('Cancel')
    
    for (let i = 0; i < animationListItemKeys.length; i++) {
      this.tileOptions.addItem(new UIControl(new Vec2(0,0), animationListItemKeys[i], tag => {
        if (typeof tag != 'undefined') {
          (currentLevel as Editor).setBlockAnimation(tag)
        }
      }, 'ANIMATION_LIST_ITEM_KEY_' + animationListItemKeys[i]))
    }

    this.tileOptions.addLinebreak()
    this.tileOptions.addLinebreak()
    this.tileOptions.addItem(new UIControl(new Vec2(0,0), 'Done', () => {
      (currentLevel as Editor).tileOptions.hide()
    }))
  }

  public mapSwapped(map: LevelMapDetail): void {
    this.metaMap = map
    const tileDetail = this.metaMap.toTileDetail()
    this.map = tileDetail

    this.populatePanels()
    this.showOptionsAfterLoad()
    this.levelLoaded = true
    this.firstRender = true
    this.renderGameSection = true
    this.mapRendered = false
  }

  private selectedBlockId: string = ''
  public renderLevel(): void {
    if (this.firstRender && this.levelLoaded) {
      this.scrollPosition = new Vec2(0,0)
      this.canScroll = true
      gameState.mouseTileX = 1
      gameState.mouseTileY = 1
    }

    super.renderLevel()
    
    if (this.selectedBlockX >= 0 && this.selectedBlockY >= 0) {
      removeItem(this.selectedBlockId)
      this.selectedBlockId =  renderBoxAroundBlock(i16(this.selectedBlockX) - this.scrollPosition.x, i16(this.selectedBlockY) - this.scrollPosition.y)
    }
  }

  public blocksAdded(): void {
    this.mapRendered = false
  }

  public clone(): Editor {
    return new Editor()
  }
}
