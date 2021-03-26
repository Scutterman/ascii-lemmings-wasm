import { LevelTiles } from "./map";

export function insertText(map: LevelTiles, message: string, line: u8): LevelTiles {
  if ((line as i32) >= map.length) {
    throw new Error('insertText: line argument out of map bounds');
  }

  if (message.length > (map[line].length - 2)) {
    throw new Error('insertText: text out of map bounds');
  }

  const leftPadding = Math.floor((map[line].length - message.length) / 2) as u8

  const messageArray = message.split('');
  for (var i = 0; i < messageArray.length; i++) {
    map[line][leftPadding + i] = messageArray[i];
  }

  return map;
}
