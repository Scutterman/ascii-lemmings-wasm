// Copied from logrocket example code - https://blog.logrocket.com/the-introductory-guide-to-assemblyscript/
(async () => {
  const screen = document.querySelector('#screen')
  const importObject = {
    loop: {
      display(msgPtr) {
        screen.innerHTML += module.exports.__getString(msgPtr) + '<br>'
      },
      clear() {
        screen.innerHTML = ''
      }
    },
    env: {
      abort(_msg, _file, line, column) {
        console.error("abort called at index.ts:" + line + ":" + column);
      },
    }
  };

  const response = await fetch("/build/untouched.wasm");
  const buffer = await response.arrayBuffer();
  const module = await loader.instantiate(
    buffer,
    importObject
  );
  
  let loopIntervalHandle
  const start = module.instance.exports.start;
  const setCharacterDimensions = module.instance.exports.setCharacterDimensions
  const dimensions = measureOneCharacter()
  console.log(dimensions)
  setCharacterDimensions(dimensions.width, dimensions.height)
  start()

  const loop = () => {
    module.instance.exports.eventLoop()
  }
  
  console.log('Starting the loop')
  loopIntervalHandle = setInterval(loop, 100)
})();

function measureOneCharacter() {
  const screen = document.createElement('span')
  screen.classList.add('screen')
  screen.classList.add('measure-text')
  screen.textContent = 'A'
  document.body.appendChild(screen)
  const width = screen.clientWidth
  const height = screen.clientHeight
  document.body.removeChild(screen)
  return { width, height }
}
