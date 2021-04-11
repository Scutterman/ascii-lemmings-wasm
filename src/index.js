// Copied from logrocket example code - https://blog.logrocket.com/the-introductory-guide-to-assemblyscript/
(async () => {
  const screen = document.querySelector('#screen')
  const importObject = {
    index: {
      log(msgPtr) {
        console.log(module.exports.__getString(msgPtr))
      }
    },
    loop: {
      display(msgPtr, colourPtr) {
        if (screen.childNodes.length === 0) {
          console.log('No screen layers')
          return
        }
        
        const colour = module.exports.__getString(colourPtr)
        const message = module.exports.__getString(msgPtr)

        let output = message
        if (colour !== '') {
          output = `<span style="color: ${ colour };">${ output }</span>`
        }

        screen.lastChild.innerHTML += output + '<br>'
      },
      clear() {
        screen.innerHTML = ''
      },
      addLayer() {
        const newLayer = document.createElement('div')
        newLayer.classList.add('screen')
        screen.appendChild(newLayer)
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
  
  const start = module.instance.exports.start;
  const setScreenDimensions = module.instance.exports.setScreenDimensions
  const setCharacterDimensions = module.instance.exports.setCharacterDimensions
  const dimensions = measureOneCharacter()
  
  setScreenDimensions(document.body.clientWidth, document.body.clientHeight)
  setCharacterDimensions(dimensions.width, dimensions.height)

  window.addEventListener('mousemove', function(event) {
    module.instance.exports.updateMouseCoordinates(event.clientX, event.clientY)
  })

  window.addEventListener('click', function(event) {
    module.instance.exports.registerMouseClick()
  })
  
  if (!start()) {
    return
  }

  const loop = () => {
    module.instance.exports.triggerEventLoop()
  }
  
  setInterval(loop, 100)
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
