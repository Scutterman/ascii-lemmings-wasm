// Copied from logrocket example code - https://blog.logrocket.com/the-introductory-guide-to-assemblyscript/
const background = document.querySelector('#background')
const map = document.querySelector('#map')
const gameArea = document.querySelector('#screen')
const clickTarget = document.querySelector('#click-target')
const dimensions = measureOneCharacter()
const wasmRunner = new Worker('wasmRunner.js')

let started = false
const keyPressListenerMessage = 'keypresslistener'
const renderBackgroundMessage = 'renderbackgroundmessage'
const renderMapMessage = 'rendermapmessage'
const removeElementMessage = 'removeelement'
const showLoadingMessage = 'showloading'

wasmRunner.onmessage = (e) => {
  if (started) {
    if (e.data.instruction === keyPressListenerMessage) {
      if (e.data.shouldListen) {
        document.addEventListener('keydown', onKeyDown)
      } else {
        document.removeEventListener('keydown', onKeyDown)
      }
    } else if (e.data.instruction === showLoadingMessage) {
      document.querySelector('#loading').classList.add('shown')
      map.innerHTML = ''
    } else if (e.data.instruction === removeElementMessage) {
      document.querySelector('#' + e.data.elementId).remove()
    } else if (e.data.instruction === renderBackgroundMessage) {
      background.innerHTML = e.data.content
    } else if (e.data.instruction === renderMapMessage) {
      map.innerHTML += e.data.content
    } else {
      gameArea.innerHTML = e.data
      document.querySelector('#loading').classList.remove('shown')
    }
    return
  }

  switch(e.data.instruction) {
    case 'initcomplete':
      wasmRunner.postMessage({
        instruction: 'setdimensions',
        screenW: document.body.clientWidth,
        screenH: document.body.clientHeight,
        characterW: dimensions.width,
        characterH: dimensions.height
      })
    break
    case 'dimensionscomplete':
      setScreenSize(e.data.screenSize)      
      wasmRunner.postMessage({ instruction: 'start' })
    break
    case 'startcomplete':
      started = true
    break
  }
}

let mouseX = 0
let mouseY = 0

let enableCall = true;
window.addEventListener('mousemove', function(e) {
  if (!started || !enableCall) return;
  
  enableCall = false;
  mouseX = e.clientX - 25
  mouseY = e.clientY - 25
  wasmRunner.postMessage({ mouseX, mouseY })
  requestAnimationFrame(() => { enableCall = true })
});

clickTarget.addEventListener('click', function() {
  wasmRunner.postMessage({ clicked: true })
})

function onKeyDown(e) {
  // TODO:: May need to uppercase or lowercase the character based on what it defaults to and whether the shift key is pressed
  // What about caps lock?
  const character =  String.fromCharCode(e.keyCode)
  wasmRunner.postMessage({ instruction: 'keydown', character })
}

function setScreenSize(screenSize) {
  const style = document.createElement('style')
  style.setAttribute('type', 'text/css')
  style.appendChild(document.createTextNode(
    '#screen, #screen div, #click-target, .grid { width: ' + screenSize.width + 'px; height: ' + screenSize.height + 'px; }'
  ))
  document.head.appendChild(style)
}

function measureOneCharacter() {
  const measeureTextBox = document.createElement('span')
  measeureTextBox.classList.add('screen')
  measeureTextBox.classList.add('measure-text')
  measeureTextBox.textContent = 'A'
  document.body.appendChild(measeureTextBox)
  const box = measeureTextBox.getBoundingClientRect()
  const width = box.width
  const height = box.height
  document.body.removeChild(measeureTextBox)
  return { width, height }
}

wasmRunner.postMessage({ instruction: 'init' })
