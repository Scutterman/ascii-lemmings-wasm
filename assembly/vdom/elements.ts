export const ITEM_SET_RELATIVE = 'relative'
export const ITEM_SET_MAP = 'map'
export const ITEM_SET_BACKGROUND = 'background'

const items = new Map<string, Map<string, string>>()
items.set(ITEM_SET_RELATIVE, new Map())
items.set(ITEM_SET_MAP, new Map())
items.set(ITEM_SET_BACKGROUND, new Map())

function makeSafeForTransmission(value: string): string {
  return value.replaceAll(':', '{{colon}}').replaceAll(';', '{{semicolon}}')
}

// Id and content has colon and semicolon replaced by {{colon}} and {{semicolon}}
export function setItem(id: string, content: string, itemSet: string = ITEM_SET_RELATIVE): void {
  if (id.length > 0 && items.has(itemSet)) {
    items.get(itemSet).set(makeSafeForTransmission(id), makeSafeForTransmission(content))
  }
}

export function removeItem(id: string, itemSet: string = ITEM_SET_RELATIVE): void {
  if (id.length > 0 && items.has(itemSet)) {
    items.get(itemSet).delete(id)
  }
}

export function resetItems(itemSet: string = ITEM_SET_RELATIVE): void {
  if (items.has(itemSet)) {
    items.get(itemSet).clear()
  }
}

export function compileItems(): string {
  return '<div class="screen">' + items.get(ITEM_SET_RELATIVE).values().join('') + '</div>'
}

// Returns changed map tiles in the format:
// id1;id2;id3;...idN:content1;content2;content3;...contentN
// Two pieces of data separated by a colon.
// Left hand side is a list of all ids joined with a semicolon joined with a semicolon between each one
// Right hand side is a list of all content joined with a semicolon between each one
export function compileMapChanges(): string {
  if (items.get(ITEM_SET_MAP).size == 0) { return '' }
  return items.get(ITEM_SET_MAP).keys().join(';') + ':' + items.get(ITEM_SET_MAP).values().join(';')
}
