// Copied from logrocket example code - https://blog.logrocket.com/the-introductory-guide-to-assemblyscript/
(async () => {
    const screen = document.querySelector('#screen')
    const importObject = {
        index: {
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
    
    const response = await fetch("/build/optimized.wasm");
    const buffer = await response.arrayBuffer();
    const module = await loader.instantiate(
        buffer,
        importObject
    );
    
    const test = module.instance.exports.test;
    test();
})();
