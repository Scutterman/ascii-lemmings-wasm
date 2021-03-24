// Copied from logrocket example code - https://blog.logrocket.com/the-introductory-guide-to-assemblyscript/
(async () => {
  const screen = document.querySelector('#screen')
  const importObject = {
    loop: {
      display(msgPtr) {
        screen.innerHTML += module.exports.__getString(msgPtr) + '<br>'
      },
      clear() {
        screen.innerHTML = ''
      }
    },
    env: {
      abort(_msg, _file, line, column) {
        console.error("abort called at index.ts:" + line + ":" + column);
      },
    }
  };

  const response = await fetch("/build/untouched.wasm");
  const buffer = await response.arrayBuffer();
  const module = await loader.instantiate(
    buffer,
    importObject
  );
  
  let loopIntervalHandle
  const test = module.instance.exports.test;

  test();

  const loop = () => {
    module.instance.exports.eventLoop()
  }
  
  console.log('Starting the loop')
  loopIntervalHandle = setInterval(loop, 100)
})();
