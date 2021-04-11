// Copied from logrocket example code - https://blog.logrocket.com/the-introductory-guide-to-assemblyscript/
async function startGame (file) {
  const screen = document.querySelector('#screen')
  const importObject = {
    index: {
      log(msgPtr) {
        console.log(module.exports.__getString(msgPtr))
      }
    },
    loop: {
      display(msgPtr) {
        if (screen.childNodes.length === 0) {
          console.log('No screen layers')
          return
        }
        
        screen.lastChild.innerHTML += module.exports.__getString(msgPtr) + '<br>'
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

  const response = await fetch(file);
  const buffer = await response.arrayBuffer();
  const module = await loader.instantiate(
    buffer,
    importObject
  );
  
  const start = module.instance.exports.start;
  const setScreenDimensions = module.instance.exports.setScreenDimensions
  const setCharacterDimensions = module.instance.exports.setCharacterDimensions
  const dimensions = measureOneCharacter()
  const screenPaddingTop = screen.getBoundingClientRect().top
  setScreenDimensions(screen.clientWidth, screen.clientHeight)
  setCharacterDimensions(dimensions.width, dimensions.height)

  window.addEventListener('mousemove', function(event) {
    module.instance.exports.updateMouseCoordinates(event.clientX, event.clientY - screenPaddingTop)
  })

  window.addEventListener('click', function(_event) {
    module.instance.exports.registerMouseClick()
  })
  
  if (!start()) {
    return
  }

  const loop = () => {
    module.instance.exports.triggerEventLoop()
  }
  
  setInterval(loop, 100)
}

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