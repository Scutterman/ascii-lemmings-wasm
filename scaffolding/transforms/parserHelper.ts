export function getImport(path: string, items: string[]): string {
  if (items.length === 0) { return }

  let importStatement = 'import { '
  for (var itemIndex = 0; itemIndex < items.length; itemIndex++) {
    importStatement += items[itemIndex] + ', '
  }

  importStatement = importStatement.substr(0, importStatement.length - 2)
  importStatement += ' } from "' + path + '"\n'
  return importStatement
}