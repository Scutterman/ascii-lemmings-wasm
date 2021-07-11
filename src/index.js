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
const setupClientMessage = 'setupclientforlevel'
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
        switch (e.data.instruction) {
            case keyPressListenerMessage:
                if (e.data.shouldListen) {
                    document.addEventListener('keyup', onKeyUp)
                } else {
                    document.removeEventListener('keyup', onKeyUp)
                }
                break
            case setupClientMessage:
                document.querySelector('#loading').classList.add('shown')
                setupClient(e.data.mapWidth, e.data.mapHeight, e.data.visibleWidth, e.data.visibleHeight, e.data.buttonAreaHtml)
                break
                // TODO:: Has this instruction been removed from the game?
            case removeElementMessage:
                const element = document.querySelector('#' + e.data.elementId)
                if (element) { element.remove() }
                break
            case renderBackgroundMessage:
                background.innerHTML = e.data.content
                break
            case renderMapMessage:
                requestAnimationFrame(() => {
                    updateMapScroll(e.data.scrollX, e.data.scrollY)
                    e.data.keys.forEach((key, index) => {
                        const $element = document.querySelector('#' + key)
                        if ($element != null) {
                            $element.innerHTML = e.data.contents[index]
                        }
                    })
                })
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
                requestAnimationFrame(() => {
                    while (gameArea.firstChild) {
                        gameArea.removeChild(gameArea.lastChild);
                    }
                    gameArea.innerHTML = e.data
                    document.querySelector('#loading').classList.remove('shown')
                })
                break
        }
        return
    }

    switch (e.data.instruction) {
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
            started = true
            wasmRunner.postMessage({ instruction: 'start' })
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
                case 'load':
                    document.querySelector('#loadLevel').click()
            }
        })
    }

    wasmRunner.postMessage({ clicked: true })
})

function onKeyUp(e) {
    wasmRunner.postMessage({ instruction: 'keyup', character: e.key })
}

function setScreenSize(screenSize) {
    dimensions.screenSize = screenSize
    dimensions.scrollX = 0
    dimensions.scrollY = 0
    dimensions.blockWidthPixels = screenSize.width / screenSize.blockWidth
    dimensions.blockHeightPixels = screenSize.height / screenSize.blockHeight

    const style = document.createElement('style')
    style.setAttribute('type', 'text/css')
    let css = `
    .screen, #click-target {
      width: ${ screenSize.width }px; height: ${ screenSize.height }px !important;
    }

    .block {
      width: ${ dimensions.blockWidthPixels }px !important; height: ${ dimensions.blockHeightPixels }px !important;
      position: absolute;
      overflow: hidden;
    }
    
    .box {
      display: block;
      width: ${ dimensions.blockWidthPixels }px; height: ${ dimensions.blockHeightPixels }px !important;
      box-shadow: inset 0 0 2px #000000;
    }
  `

    style.appendChild(document.createTextNode(css))
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

function setupClient(mapWidth, mapHeight, visibleWidth, visibleHeight, buttonAreaHtml) {
    const mapContainerWidthPx = mapWidth * dimensions.blockWidthPixels
    const mapContainerHeightPx = mapHeight * dimensions.blockHeightPixels

    const visibleWidthPx = visibleWidth * dimensions.blockWidthPixels
    const visibleHeightPx = visibleHeight * dimensions.blockHeightPixels
    map = document.createElement('div')
    map.classList.add('top-level-element', 'full-map')
    for (let row = 0; row < mapHeight; row++) {
        for (let col = 0; col < mapWidth; col++) {
            const element = document.createElement('div')
            element.setAttribute('id', 'block_' + row + '_' + col)
            element.classList.add('block', 'row_' + row, 'col_' + col)
            map.appendChild(element)
        }
    }

    let css = `
    #map {
      width: ${ visibleWidthPx }px !important;
      height: ${ visibleHeightPx }px !important;
    }
  `

    for (let row = 0; row < mapHeight; row++) {
        css += '.row_' + row + ' { top: ' + (dimensions.blockHeightPixels * row) + 'px !important; }'
    }

    for (let col = 0; col < mapWidth; col++) {
        css += '.col_' + col + ' { left: ' + (dimensions.blockWidthPixels * col) + 'px !important; }'
    }

    requestAnimationFrame(() => {
        document.querySelector('#block-styles').innerHTML = css
        document.querySelector('#map').innerHTML = ''
        document.querySelector('#map').appendChild(map)
        document.querySelector('#buttonArea').innerHTML = buttonAreaHtml

        document.querySelector('#map-dimensions').innerHTML = `
      .full-map {
        width: ${ mapContainerWidthPx }px !important;
        height: ${ mapContainerHeightPx }px !important;
      }
    `
        wasmRunner.postMessage({ instruction: 'runlevel' })
    })
}

/**
 * Must call from inside requestAnimationFrame
 */
function updateMapScroll(scrollX, scrollY) {
    const hasScrolledX = scrollX != dimensions.scrollX
    const hasScrolledY = scrollY != dimensions.scrollY
    dimensions.scrollX = scrollX
    dimensions.scrollY = scrollY

    if (hasScrolledX || hasScrolledY) {
        const $maps = document.querySelectorAll('.full-map')
        for (let i = 0; i < $maps.length; i++) {
            if (hasScrolledX) {
                $maps[i].style.left = (scrollX * dimensions.blockWidthPixels) * -1
            }

            if (hasScrolledY) {
                $maps[i].style.top = (scrollY * dimensions.blockHeightPixels) * -1
            }
        }
    }
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
            accept: { 'application/json': ['.json'] },
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

function setPause(pauseState) {
    wasmRunner.postMessage({ instruction: 'setpause', pauseState })
}