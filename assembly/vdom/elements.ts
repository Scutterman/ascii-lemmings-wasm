export const ITEM_SET_RELATIVE = 'relative'
export const ITEM_SET_MAP = 'map'
export const ITEM_SET_BACKGROUND = 'background'

const items = new Map<string, Map<string, string>>()
items.set(ITEM_SET_RELATIVE, new Map())
items.set(ITEM_SET_MAP, new Map())
items.set(ITEM_SET_BACKGROUND, new Map())

export function setItem(id: string, content: string, itemSet: string = ITEM_SET_RELATIVE): void {
  if (id.length > 0 && items.has(itemSet)) {
    items.get(itemSet).set(id, content)
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
  const html = compileItemSet(ITEM_SET_BACKGROUND) + compileItemSet(ITEM_SET_MAP) + compileItemSet(ITEM_SET_RELATIVE)
  return html
}

function compileItemSet(itemSet: string): string {
  return '<div class="screen">' + items.get(itemSet).values().join('') + '</div>'
}
