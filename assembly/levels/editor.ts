import { currentLevel, gameState, keyPressListener, log, messageResponse, resetText } from ".."
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
import { animationItems } from "../generatedLevels/animationItems"
import { LevelMetadata } from "../maps/mapParserBase"
import { LabelledButton } from "../ui/labelledButton"

declare function addBlocks(startRow: u8, endRow: u8, startCol: u8, endCol: u8): void

class EasyLabelledButton extends LabelledButton {
  constructor(labelText: string, tag?: string) {
    super(new Vec2(0,0), labelText, () => {}, tag)
  }
}

export class Editor extends MetaScreen {
  private actionPanel: Panel = new Panel(new Vec2(-1, 38))
  private levelLoaded: boolean = false
  private tileOptions: Panel = new Panel(new Vec2(-1,-1))
  private selectedBlockKey: string = ''
  private selectedBlockX: i16 = -1
  private selectedBlockY: i16 = -1
  private metaMap: LevelMapDetail = new LevelMapDetail([])
  private newLevelPanel: Panel = new Panel(new Vec2(-1,-1))
  private canAcceptTextTags: string[] = ['META_DIFFICULTY', 'META_NAME', 'META_CODE']
  private canAcceptNumberTags: string[] = [
    'META_NUMBER', 'META_SPAWN', 'META_SUCCESS',
    'SKILL_CLIMB', 'SKILL_FLOAT', 'SKILL_BOMB', 'SKILL_BLOCK',
    'SKILL_BUILD', 'SKILL_BASH', 'SKILL_MINE', 'SKILL_DIG'
  ]

  constructor() {
    super('EDITOR')

    this.uiPanels.push(this.actionPanel)
    
    this.actionPanel.addItem(new UIControl(new Vec2(0, 0), "New", () => {
      (currentLevel as Editor).newMap()
    }))

    this.actionPanel.addItem(new UIControl(new Vec2(0, 0), "Load", () => {
      messageResponse('load', '', '')
    }))

    this.tileOptions.setBackgroundColour('#ffffff')
    this.tileOptions.hide()
    this.uiPanels.push(this.tileOptions)

    this.uiPanels.push(this.newLevelPanel)
    this.newLevelPanel.hide()
    this.newLevelPanel.addItem(new EasyLabelledButton('Difficulty', 'META_DIFFICULTY'))
    this.newLevelPanel.addItem(new EasyLabelledButton('Number', 'META_NUMBER'))
    this.newLevelPanel.addItem(new EasyLabelledButton('Name', 'META_NAME'))
    this.newLevelPanel.addItem(new EasyLabelledButton('Code', 'META_CODE'))
    this.newLevelPanel.addItem(new EasyLabelledButton('Spawn', 'META_SPAWN'))
    this.newLevelPanel.addItem(new EasyLabelledButton('Success', 'META_SUCCESS'))
    this.newLevelPanel.addLinebreak()
    this.newLevelPanel.addItem(new EasyLabelledButton('Climbers', 'SKILL_CLIMB'))
    this.newLevelPanel.addItem(new EasyLabelledButton('Floaters', 'SKILL_FLOAT'))
    this.newLevelPanel.addItem(new EasyLabelledButton('Bombers', 'SKILL_BOMB'))
    this.newLevelPanel.addItem(new EasyLabelledButton('Blockers', 'SKILL_BLOCK'))
    this.newLevelPanel.addItem(new EasyLabelledButton('Builders', 'SKILL_BUILD'))
    this.newLevelPanel.addItem(new EasyLabelledButton('Bashers', 'SKILL_BASH'))
    this.newLevelPanel.addItem(new EasyLabelledButton('Miners', 'SKILL_MINE'))
    this.newLevelPanel.addItem(new EasyLabelledButton('Diggers', 'SKILL_DIG'))
    this.newLevelPanel.addLinebreak()
    this.newLevelPanel.addItem(new UIControl(new Vec2(0,0), 'Create', () => {
      (currentLevel as Editor).createMap()
    }))
    
    // TODO:: Reset these before leaving
    keyPressListener(true)
    resetText()
    
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
      
      const lastCharacter = metaMapRow.substr(metaMapRow.length - 1)
      this.metaMap.tiles[row] = metaMapRow.substr(0, metaMapRow.length - 1) + tile + lastCharacter

      const last = this.map[row].pop().clone()
      const detail = this.metaMap.detailFromTile(tile, row, this.map.length)
      detail.elementId = last.elementId
      detail.isDirty = true
      
      if (tile == TILE_AIR) {
        detail.needsRemoval = true
      }
      
      this.map[row].push(detail)
      
      const newLast = this.metaMap.detailFromTile(last.tile, row, this.map[row].length)
      newLast.isDirty = true
      this.map[row].push(newLast)
    }

    addBlocks(u8(0), u8(this.map.length), u8(this.map[0].length - 1), u8(this.map[0].length))
  }

  private showOptionsAfterLoad(): void {
    this.actionPanel.empty()
    this.actionPanel.addItem(new UIControl(new Vec2(0, 0), "Add Row", () => {
      log('Add Row')
      ;(currentLevel as Editor).addRow()
    }))
    this.actionPanel.addItem(new UIControl(new Vec2(0, 0), "Add Col", () => {
      log('Add Col')
      ;(currentLevel as Editor).addColumn()
    }))
    this.actionPanel.addItem(new UIControl(new Vec2(0, 0), "Save", () => {
      log('Add Save')
      ;const lvl = currentLevel as Editor
      const levelName = lvl.metaMap.meta.difficulty + '_' +
        lvl.metaMap.meta.number.toString() + '_' +
        lvl.metaMap.meta.code + '.map'
      messageResponse('save',  levelName, lvl.metaMap.export())
    }))
  }

  public mapSquareClicked(mouseTileX: i32, mouseTileY: i32): boolean {
    const x = i16(mouseTileX) + this.scrollPosition.x
    const y = i16(mouseTileY) + this.scrollPosition.y
    if (y >= 0 && y < this.metaMap.tiles.length && x >= 0 && x < this.metaMap.tiles[y].length) {
      this.selectedBlockKey = x.toString() + ',' + y.toString()
      this.selectedBlockX = x
      this.selectedBlockY = y
      this.showTilePanel()
      return true
    }

    return false
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

    const animationListItemKeys = animationItems.keys()
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
    this.handleTextEntry()
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

  private newMap(): void {
    this.newLevelPanel.show()
  }

  private createMap(): void {
    const difficulty = this.getLabelValueByTag('META_DIFFICULTY')
    const name = this.getLabelValueByTag('META_NAME')
    const code = this.getLabelValueByTag('META_CODE')
    const number = this.getLabelNumberValueByTag('META_NUMBER')

    const spawn = this.getLabelNumberValueByTag('META_SPAWN')
    const success = this.getLabelNumberValueByTag('META_SUCCESS')
    const climb = this.getSkillValue('SKILL_CLIMB')
    const float = this.getSkillValue('SKILL_FLOAT')
    const bomb = this.getSkillValue('SKILL_BOMB')
    const block = this.getSkillValue('SKILL_BLOCK')
    const build = this.getSkillValue('SKILL_BUILD')
    const bash = this.getSkillValue('SKILL_BASH')
    const mine = this.getSkillValue('SKILL_MINE')
    const dig = this.getSkillValue('SKILL_DIG')

    const metaMap = new LevelMapDetail([])
    metaMap.meta = new LevelMetadata(name, number, code, difficulty, spawn, success)
    metaMap.meta.skills.set('ClimbingBoots', climb)
    metaMap.meta.skills.set('Umbrella', float)
    metaMap.meta.skills.set('Bomb', bomb)
    metaMap.meta.skills.set('Block', block)
    metaMap.meta.skills.set('BrickSack', build)
    metaMap.meta.skills.set('Hammer', bash)
    metaMap.meta.skills.set('Pickaxe', mine)
    metaMap.meta.skills.set('Shovel', dig)
    this.mapSwapped(metaMap)
    this.newLevelPanel.hide()
  }

  private getSkillValue(tag: string): u8 {
    const value = this.getLabelValueByTag(tag)
    if (value == '-') { return u8.MAX_VALUE}
    else { return U8.parseInt(value) }
  }

  private handleTextEntry(): void {
    const text = gameState.userEnteredText
    if (text.length == 0) {
      return
    }

    const _focused = gameState.focusedUiControl
    if (_focused == null || !(_focused instanceof LabelledButton)) {
       return
    }

    const focused = _focused as LabelledButton
    const tag = focused.getTag()
    if (tag.length == 0) {
      return
    }

    let existingText = focused.getControlText()
    
    if (this.canAcceptTextTags.includes(tag)) {
      focused.setControlText(existingText + text)
      resetText()
    } else if (this.canAcceptNumberTags.includes(tag)) {
      if (existingText == '∞') { existingText = '' }
      
      if (text == '-') {
        focused.setControlText('∞')
      } else {
        existingText = U8.parseInt(existingText + text, 10).toString(10)
        // existingText = existingText.substr(0, existingText.indexOf('.'))
        focused.setControlText(existingText)
      }

      resetText()
    }
  }

  public clone(): Editor {
    return new Editor()
  }
}
