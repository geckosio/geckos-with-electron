const geckos = require('@geckos.io/server').default

const io = geckos()

io.listen()

io.onConnection(channel => {
  channel.onDisconnect(() => {
    console.log(`${channel.id} got disconnected`)
  })

  channel.on('number', data => {
    console.log(`got the number ${data}`)
    io.room(channel.roomId).emit('answer', data * 2)
  })
})
