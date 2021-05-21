importScripts("assemblyscript-loader.js")
const importObject = {
  index: {
    showLoading() {
      postMessage({ instruction: 'showloading' })
    },
    log(msgPtr) {
      console.log(loadedModule.exports.__getString(msgPtr))
    },
    keyPressListener(shouldListen) {
      postMessage({ instruction: 'keypresslistener', shouldListen })
    }
  },
  loop: {
    removeElement(msgPtr) {
      const elementId = loadedModule.exports.__getString(msgPtr)
      postMessage({ instruction: 'removeelement', elementId })
    },
    renderBackground(msgPtr) {
      const content = loadedModule.exports.__getString(msgPtr)
      postMessage({ instruction: 'renderbackgroundmessage', content })
    },
    renderMap(msgPtr) {
      const content = loadedModule.exports.__getString(msgPtr)
      postMessage({ instruction: 'rendermapmessage', content })
    },
    render(msgPtr) {
      const output = loadedModule.exports.__getString(msgPtr)
      postMessage(output)
    },
    onEventLoopComplete(_timeTaken) {
      requestAnimationFrame(loop)
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
    if (e.data.instruction === 'keydown') {
      const string = loadedModule.exports.__newString(e.data.character)
      loadedModule.instance.exports.keyDown(string)
    } else {
      if (e.data.mouseX != null && e.data.mouseY != null) {
        loadedModule.instance.exports.updateMouseCoordinates(e.data.mouseX, e.data.mouseY)
      }

      if (e.data.clicked != null) {
        loadedModule.instance.exports.registerMouseClick()
      }
    }

    // loop()
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
      const screenSize = getScreenSize()
      postMessage({ instruction: 'dimensionscomplete', screenSize })
    break
    case 'start':
      start()
      postMessage({ instruction: 'startcomplete' })
      loop()
    break
  }
}

async function init() {
  const response = await fetch("/build/untouched.wasm?t=" + Date.now());
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

function getScreenSize() {
  return {
    width: loadedModule.instance.exports.getScreenWidth(), height: loadedModule.instance.exports.getScreenHeight() }
}

function start() {
  started = (loadedModule.instance.exports.start() == 1)
}

function loop () {
  loadedModule.instance.exports.triggerEventLoop()
}
