importScripts("assemblyscript-loader.js")
const importObject = {
  index: {
    setupClientForLevel(mapWidth, mapHeight) {
      postMessage({ instruction: 'setupclientforlevel', mapWidth, mapHeight })
    },
    log(msgPtr) {
      console.log(loadedModule.exports.__getString(msgPtr))
    },
    keyPressListener(shouldListen) {
      postMessage({ instruction: 'keypresslistener', shouldListen })
    },
    messageResponse(instructionPtr, namePtr, contentPtr) {
      postMessage({
        instruction: loadedModule.exports.__getString(instructionPtr),
        name: loadedModule.exports.__getString(namePtr),
        content: loadedModule.exports.__getString(contentPtr)
      })
    }
  },
  loop: {
    // removeElement(msgPtr) {
    //   const elementId = loadedModule.exports.__getString(msgPtr)
    //   postMessage({ instruction: 'removeelement', elementId })
    // },
    // renderBackground(msgPtr) {
    //   const content = loadedModule.exports.__getString(msgPtr)
    //   postMessage({ instruction: 'renderbackgroundmessage', content })
    // },
    renderMap(msgPtr) {
      const encodedMessage = loadedModule.exports.__getString(msgPtr)
      if (encodedMessage.trim().length == 0) { return }
      const [encodedKeys, encodedContent] = encodedMessage.split(':')
      const keys = encodedKeys.split(';').map(key => key.replaceAll('{{colon}}', ':').replaceAll('{{semicolon}}', ';'))
      const contents = encodedContent.split(';').map(content => content.replaceAll('{{colon}}', ':').replaceAll('{{semicolon}}', ';'))
      postMessage({ instruction: 'rendermapmessage', keys, contents })
    },
    render(msgPtr) {
      const output = loadedModule.exports.__getString(msgPtr).replaceAll('{{colon}}', ':').replaceAll('{{semicolon}}', ';')
      postMessage(output)
    },
    onEventLoopComplete(_timeTaken) {
      requestAnimationFrame(loop)
    }
  },
  imports: {
    isEditingMap(isEditing) {
      postMessage({
        instruction: 'isediting',
        isEditing: isEditing === 1
      })
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
    if (e.data.instruction === 'keyup') {
      const string = loadedModule.exports.__newString(e.data.character)
      loadedModule.instance.exports.keyUp(string)
    } else if (e.data.instruction === 'loadlevel') {
      const level = loadedModule.exports.__newString(e.data.content)
      loadedModule.instance.exports.loadLevelFromString(level)
    } else if (e.data.instruction === 'runlevel') {
      loadedModule.instance.exports.runLevel()
    } else {
      if (e.data.mouseX != null && e.data.mouseY != null) {
        loadedModule.instance.exports.updateMouseCoordinates(e.data.mouseX, e.data.mouseY)
      }

      if (e.data.clicked != null) {
        loadedModule.instance.exports.registerMouseClick()
      }
    }

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
    width: loadedModule.instance.exports.getScreenWidth(),
    height: loadedModule.instance.exports.getScreenHeight(),
    blockWidth: loadedModule.instance.exports.getBlockWidth(),
    blockHeight: loadedModule.instance.exports.getBlockHeight()
  }
}

function start() {
  started = (loadedModule.instance.exports.start() == 1)
}

function loop () {
  loadedModule.instance.exports.triggerEventLoop()
}
