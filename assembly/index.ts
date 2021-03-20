// The entry file of your WebAssembly module.
const numberOfLemmings: i32 = 1

const level: string[] = [
  '____OO______________',
  '|                EE|',
  '|GGGGGGGGGGGGGGGGGG|',
  '____________________'
]

declare function display(arr: string): void;
declare function clear(): void;

export function test(): void {
  clear()
  for (var i = 0; i < level.length; i++) {
    display(level[i]);
  }
}
