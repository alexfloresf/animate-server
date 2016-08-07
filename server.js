'use strict'

const http = require('http')
const fs = require('fs')
const path = require('path')
const port = process.env.PORT || 8080
const server = http.createServer()

server.on('request', onRequest)
server.on('listening', onListening)

server.listen(port)

function onRequest(req,res){
  let url = req.url

  if (url.startsWith('/index') || url === '/'){
    return serverIndex(res)
  }
  if (url === '/app.js'){
    return serverApp(res)
  }
  res.statusCode = 404
  res.end(`404 not found: ${url}`)
}

function serverIndex(res){
  let index = path.join(__dirname,'public','index.html')
  let rs = fs.createReadStream(index)

  res.setHeader('Content-Type','text/html')
  rs.pipe(res)

  rs.on('error',function(err){
    res.setHeader('Content-Type','text/plain')
    res.end(err.message)
  })
}

function serverApp(res){
  let app = path.join(__dirname,'public','app.js')
  let rs = fs.createReadStream(app)

  res.setHeader('Content-Type','text/javascript')
  rs.pipe(res)

  rs.on('error',function(err){
    res.setHeader('Content-Type','text/plain')
    res.end(err.message)
  })
}

function onListening(){
  console.log(`Servidor escuchando en puerto ${port}`)
}
