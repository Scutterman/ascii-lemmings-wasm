// Wasm setup explained here: https://blog.logrocket.com/the-introductory-guide-to-assemblyscript/
const background = document.querySelector('#background')
let map // html element containing all map squares
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
const saveMessage = 'save'
const loadMessage = 'load'
const isEditing = 'isediting'

/*
  can be a function:
  ({
    cancel: boolean
    instruction?: string
    name?: string
    content?: string
  }): void {}
*/
let messageResponseCallback = undefined
let isEditingMap = false

function setMessageResponseCallback(cb) {
  if (typeof messageResponseCallback === 'function') {
    messageResponseCallback({
      cancel: true
    })
  }

  messageResponseCallback = cb
}

wasmRunner.onmessage = (e) => {
  if (started) {
    switch(e.data.instruction) {
      case keyPressListenerMessage:
        if (e.data.shouldListen) {
          document.addEventListener('keyup', onKeyUp)
        } else {
          document.removeEventListener('keyup', onKeyUp)
        }
      break
      case showLoadingMessage:
        document.querySelector('#loading').classList.add('shown')
        map.innerHTML = ''
      break
      case removeElementMessage:
        const element = document.querySelector('#' + e.data.elementId)
        if (element) { element.remove() }
      break
      case renderBackgroundMessage:
        background.innerHTML = e.data.content
      break
      case renderMapMessage:
        map.innerHTML += e.data.content
      break
      case isEditing:
        isEditingMap = e.data.isEditing
        editStateChanged(isEditingMap)
      break
      case saveMessage:
      case loadMessage:
        if (typeof messageResponseCallback === 'function') {
          messageResponseCallback({
            cancel: false,
            ...e.data
          })
        }
      default:
        gameArea.innerHTML = e.data
        document.querySelector('#loading').classList.remove('shown')
      break
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
  if (isEditingMap) {
    setMessageResponseCallback(data => {
      if (data.cancel === true) {
        return
      }

      setMessageResponseCallback(undefined)

      switch (data.instruction) {
        case 'save':
          if (data.content.length > 0) {
            saveFile(data.name, data.content)
          }
        break
        case 'load': {
          document.querySelector('#loadLevel').click()
        }
      }
    })
  }
  
  wasmRunner.postMessage({ clicked: true })
})

function onKeyUp(e) {
  wasmRunner.postMessage({ instruction: 'keyup', character: e.key })
}

function setScreenSize(screenSize) {
  const blockWidthPixels = screenSize.width / screenSize.blockWidth
  const blockHeightPixels = screenSize.height / screenSize.blockHeight

  const style = document.createElement('style')
  style.setAttribute('type', 'text/css')
  let css = `
    #screen, #screen div, #click-target, .grid {
      width: ${ screenSize.width }px; height: ${ screenSize.height }px !important;
    }

    .block {
      width: ${ blockWidthPixels }px; height: ${ blockHeightPixels }px !important;
      position: absolute;
    }
  `

  for (let row = 0; row < screenSize.blockHeight; row++) {
    css += '.row_' + row + ' { top: ' + (blockHeightPixels * row) + 'px !important; }'
  }

  for (let col = 0; col < screenSize.blockWidth; col++) {
    css += '.col_' + col + ' { left: ' + (blockWidthPixels * col) + 'px !important; }'
  }
  
  style.appendChild(document.createTextNode(css))
  
  map = document.createElement('div')
  map.classList.add('screen', 'top-level-element')
  for (let row = 0; row < screenSize.blockHeight; row++) {
    for (let col = 0; col < screenSize.blockWidth; col++) {
      const element = document.createElement('div')
      element.setAttribute('id', 'block_' + row + '_' + col)
      element.classList.add('block', 'row_' + row, 'col_' + col)
      map.appendChild(element)
    }
  }
  
  document.head.appendChild(style)
  document.body.appendChild(map)
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

/**
 * web assembly tells javascript when it's editing a file
 * for every click, call into web assembly to see whether the downlod button was clicked
 * if so, save the file
 */

async function saveFile(name, content) {
  const newHandle = await window.showSaveFilePicker({
    suggestedName: name,
    types: [{
      description: 'JSON file',
      accept: {'application/json': ['.json']},
    }],
  })
  const writableStream = await newHandle.createWritable()
  await writableStream.write(new Blob([content], {
    type: 'application/json'
  }))
  await writableStream.close();
}

function editStateChanged(isEditing) {
  if (isEditing) {
    document.querySelector('#loadLevel').addEventListener('change', loadLevelChanged)
  } else {
    document.querySelector('#loadLevel').removeEventListener('change', loadLevelChanged)
  }
}

function loadLevelChanged() {
  const file = this.files[0]
  const reader = new FileReader();
  reader.onload = function(e) {
    wasmRunner.postMessage({ instruction: 'loadlevel', content: e.target.result })
  }
  reader.readAsText(file);
}
