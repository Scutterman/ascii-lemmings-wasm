importScripts("assemblyscript-loader.js")
const importObject = {
  index: {
    log(msgPtr) {
      console.log(loadedModule.exports.__getString(msgPtr))
    }
  },
  loop: {
    display(msgPtr, colourPtr) {
      const colour = loadedModule.exports.__getString(colourPtr)
      const message = loadedModule.exports.__getString(msgPtr)

      let output = message
      if (colour !== '') {
        output = `<span style="color: ${ colour };">${ output }</span>`
      }
      
      postMessage({ instruction: 'display', output })
    },
    clear() {
      postMessage({ instruction: 'clear' })
    },
    addLayer() {
      postMessage({ instruction: 'addLayer' })
    },
    onEventLoopComplete(timeTaken) {
      const delayFor = 100 - timeTaken
      if (delayFor <= 0) {
        loop()
      } else {
        setTimeout(loop, delayFor)
      }
    }
  },
  env: {
    abort(_msg, _file, line, column) {
      console.error("abort called at index.ts:" + line + ":" + column);
    },
  }
};

onmessage = function(e) {
  switch (e.data.instruction) {
    case 'init':
      init().then(() => {
        postMessage({ instruction: 'initcomplete' })
      })
    break
    case 'setdimensions':
      setDimensions(e.data.screenW, e.data.screenH, e.data.characterW, e.data.characterH)
      postMessage({ instruction: 'dimensionscomplete' })
    break
    case 'start':
      start()
      postMessage({ instruction: 'startcomplete' })
      loop()
    break
    case 'mousemove':
      loadedModule.instance.exports.updateMouseCoordinates(e.data.clientX, e.data.clientY)
    break
    case 'click':
      console.log('click worker')
      loadedModule.instance.exports.registerMouseClick()
    break
  }
}

let loadedModule
let started = false

async function init() {
  const response = await fetch("/build/untouched.wasm");
  const buffer = await response.arrayBuffer();
  loadedModule = await loader.instantiate(
    buffer,
    importObject
  );
}

function setDimensions(clientWidth, clientHeight, characterWidth, characterHeight) {
  loadedModule.instance.exports.setScreenDimensions(clientWidth, clientHeight)
  loadedModule.instance.exports.setCharacterDimensions(characterWidth, characterHeight)
}

function start() {
  started = loadedModule.instance.exports.start()
}

function loop () {
  loadedModule.instance.exports.triggerEventLoop()
}
