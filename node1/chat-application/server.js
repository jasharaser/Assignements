const io = require('socket.io')(3000)
const users = {}

io.on('connection', socket => {
  socket.on('new-user', username => {
    users[socket.id] = username
    socket.broadcast.emit('user-connected', username)
    console.log(`User ${username} Connected`)
  })
  socket.on('send-chat-message', message => {
    socket.broadcast.emit('chat-message', { message: message, username: users[socket.id] })
  })
  socket.on('disconnect', () => {
    socket.broadcast.emit('user-disconnected', users[socket.id])
    delete users[socket.id]
  })
})
