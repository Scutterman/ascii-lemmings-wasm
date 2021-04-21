import { LevelTiles } from "./types";
import { Vec2 } from "./position";
import { log } from ".";

/**
 * Insert text into the map
 * 
 * Postion can contain -1 for either or both dimensions
 * and will centre the text in that dimension then update the Vec2 position.
 * 
 * This will cascade back up and change the position values
 * stored in the object at its origin
 **/
 export function insertText(map: LevelTiles, message: string, position: Vec2): LevelTiles {
  if ((position.y as i32) >= map.length) {
    log('insertText: line argument out of map bounds');
    return map
  }

  if (position.y == -1) {
    position.y = Math.floor((map.length - 1) / 2) as u8
  }

  if (message.length > (map[position.y].length - 2)) {
    log('insertText: text out of map bounds');
    return map
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
