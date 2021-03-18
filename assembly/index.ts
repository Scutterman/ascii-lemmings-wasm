// The entry file of your WebAssembly module.

export function add(a: i32, b: i32): i32 {
  return a + b;
}

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
