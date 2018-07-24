'use strict'

var httpProxy = require('http-proxy')
var { Agent } = require('http')

var proxy = httpProxy.createProxyServer({
  target: 'http://localhost:3001',
  agent: new Agent({
    keepAlive: true,
    keepAliveMsecs: 60 * 1000, // 1 minute
    maxSockets: 2048,
    maxFreeSockets: 2048
  })
})

proxy.on('error', function (e) {
  console.log(e)
})

proxy.listen(3000)
