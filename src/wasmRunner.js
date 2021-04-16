importScripts("assemblyscript-loader.js")
const timeBetweenLoops = 100

const importObject = {
  index: {
    log(msgPtr) {
      console.log(loadedModule.exports.__getString(msgPtr))
    }
  },
  loop: {
    render(msgPtr) {
      const output = loadedModule.exports.__getString(msgPtr)
      postMessage(output)
    },
    onEventLoopComplete(timeTaken) {
      const delayFor = timeBetweenLoops - timeTaken
      if (delayFor <= 0) {
        requestInpus()
      } else {
        setTimeout(requestInpus, delayFor)
      }
    }
  },
  env: {
    abort(_msg, _file, line, column) {
      console.error("abort called at index.ts:" + line + ":" + column);
    },
  }
};

let loadedModule
let started = false

onmessage = function(e) {
  if (started) {
    loadedModule.instance.exports.updateMouseCoordinates(e.data.mouseX, e.data.mouseY)
    if (e.data.clicked) {
      console.log('click web worker')
      loadedModule.instance.exports.registerMouseClick()
    }

    loop()
    return
  }
  
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
  }
}

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
  started = (loadedModule.instance.exports.start() == 1)
}

function loop () {
  loadedModule.instance.exports.triggerEventLoop()
}

function requestInpus() {
  postMessage('requestinputs')
}
