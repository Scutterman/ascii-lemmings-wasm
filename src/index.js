// Copied from logrocket example code - https://blog.logrocket.com/the-introductory-guide-to-assemblyscript/
const screen = document.querySelector('#screen')
const dimensions = measureOneCharacter()
const wasmRunner = new Worker('wasmRunner.js')
wasmRunner.onmessage = (e) => {
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
      registerAdditionalEvents()
    break
    case 'render':
      screen.innerHTML = e.data.output
    break
  }
}

function registerAdditionalEvents() {
  window.addEventListener('mousemove', function(e) {
    wasmRunner.postMessage({
      instruction: 'mousemove',
      clientX: e.clientX,
      clientY: e.clientY
    })
  })

  window.addEventListener('click', function() {
    console.log('click js')
    wasmRunner.postMessage({ instruction: 'click' })
  })
}

wasmRunner.postMessage({ instruction: 'init' })

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
