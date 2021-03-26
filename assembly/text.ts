import { LevelTiles } from "./map";
import { Vec2 } from "./position";

export function insertText(map: LevelTiles, message: string, position: Vec2): LevelTiles {
  if ((position.y as i32) >= map.length) {
    throw new Error('insertText: line argument out of map bounds');
  }

  if (position.y == -1) {
    position.y = Math.floor((map.length - 1) / 2) as u8
  }

  if (message.length > (map[position.y].length - 2)) {
    throw new Error('insertText: text out of map bounds');
  }

  if (position.x == -1) {
    position.x = Math.floor((map[position.y].length - message.length) / 2) as u8
  }
  
  const messageArray = message.split('');
  for (var i = 0; i < messageArray.length; i++) {
    map[position.y][position.x + i] = messageArray[i];
  }

  return map;
}
