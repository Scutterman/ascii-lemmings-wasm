// Copied from logrocket example code - https://blog.logrocket.com/the-introductory-guide-to-assemblyscript/
const gameArea = document.querySelector('#screen')
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
      gameArea.innerHTML = e.data
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
  if (!started || !enableCall) return;
  
  enableCall = false;
  const _clicked = clicked
  clicked = false
  mouseX = e.clientX - 25
  mouseY = e.clientY - 25
  wasmRunner.postMessage({ mouseX, mouseY, clicked: _clicked })
  requestAnimationFrame(() => { enableCall = true })
  //setTimeout(function () { enableCall = true }, 33);
});

clickTarget.addEventListener('click', function() {
  clicked = true
})

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
