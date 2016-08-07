'use strict'

const http = require('http')
const fs = require('fs')
const port = process.env.PORT || 8080
const server = http.createServer()

server.on('request', onRequest)
server.on('listening', onListening)

server.listen(port)

function onRequest(req,res){
//  res.end('Hola mundo! io.js')
  let file = fs.readFileSync('public/index.html')
  res.end(file)
}

function onListening(){
  console.log('Servidor escuchando en puerto '+ port)
}
