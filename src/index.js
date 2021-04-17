// Copied from logrocket example code - https://blog.logrocket.com/the-introductory-guide-to-assemblyscript/
const screen = document.querySelector('#screen')
const clickTarget = document.querySelector('#click-target')
const dimensions = measureOneCharacter()
const wasmRunner = new Worker('wasmRunner.js')

let started = false
const requestInputsMessage = 'requestinputs'
wasmRunner.onmessage = (e) => {
  if (started) {
    if (e.data === requestInputsMessage) {
      const _clicked = clicked
      clicked = false
      wasmRunner.postMessage({ mouseX, mouseY, clicked: _clicked })
    } else {
      screen.innerHTML = e.data
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
      wasmRunner.postMessage({ instruction: 'start' })
    break
    case 'startcomplete':
      started = true
    break
  }
}

let mouseX = 0
let mouseY = 0
let clicked = false

let enableCall = true;
window.addEventListener('mousemove', function(e) {
  if (!enableCall) return;

  enableCall = false;
  mouseX = e.clientX
  mouseY = e.clientY
  setTimeout(function () { enableCall = true }, 50);
});

clickTarget.addEventListener('click', function() {
  clicked = true
})

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

wasmRunner.postMessage({ instruction: 'init' })
