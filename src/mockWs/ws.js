const WebSocket = require('ws')
const wss = new WebSocket.Server({ port: 3001 })

const sendWsMsg = (rpcId, data) => {
  this.ws.send(JSON.stringify({ rpcId: rpcId, data: data }))
}

// 接收到websocket客户端的消息 根据rpcId返回相应数据
wss.on('connection', (ws) => {
  this.ws = ws
  ws.on('message', (message) => {
    const json = JSON.parse(message)
    switch (json.rpcId) {
      case 'checkIsConnection':
        return sendWsMsg('checkIsConnection', 'ws is connection')
      case 'addMessage':
        return sendWsMsg('addMessage', json.data)
      default:
        console.log('服务端：没有找到此消息对应的rpcId')
    }
  })
})
