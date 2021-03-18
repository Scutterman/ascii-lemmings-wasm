const express = require('express')
const fs = require('fs')
const path = require('path')

const app = express()

express.static('src')

app.get('/', (req, res) => {
    const filePath = path.join(__dirname, '..', 'src', 'index.html')
    const content = fs.readFileSync(filePath)
    res.set('Content-Type', 'text/html')
    res.send(content)
})

app.get('/index.js', (req, res) => {
    const filePath = path.join(__dirname, '..', 'src', 'index.js')
    const content = fs.readFileSync(filePath)
    res.send(content)
})

app.get('/as-utils.js', (req, res) => {
    const filePath = path.join(__dirname, '..', 'src', 'as-utils.js')
    const content = fs.readFileSync(filePath)
    res.send(content)
})

app.get('/wasm', (req, res) => {
    const filePath = path.join(__dirname, '..', 'build', 'optimized.wasm')
    const content = fs.readFileSync(filePath)
    res.set('Content-Type', 'application/wasm')
    res.send(content)
})

app.listen(8080, () => { console.log('listening on port 8080') })
