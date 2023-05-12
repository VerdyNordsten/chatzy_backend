const { v4: uuidv4 } = require("uuid")
const chatModel = require("../models/chatModel")

module.exports = (io, socket) => {
  socket.on("join-room", (id) => {
    try {
      socket.join(id)
    } catch (error) {
      console.log(error)
    }
  })
  
  socket.on("chat-history", async (data) => {
    try {
      const { sender, receiver } = data
      const listChat = await chatModel.list(sender, receiver)
      io.to(sender).emit("send-message-response", listChat.rows)
    } catch (error) {
      console.log(error)
    }
  })

  socket.on("send-message", async (data) => {
    try {
      const { sender, receiver, chat } = data
      await chatModel.store({
        id: uuidv4(),
        sender,
        receiver,
        chat,
        date: new Date(),
        chatType: "text",
      })
      const listChat = await chatModel.list(sender, receiver)
      io.to(data.receiver).emit("send-message-response", listChat.rows)
    } catch (error) {
      console.log(error)
    }
  })

  socket.on("edit-message", async (data) => {
    try {
      const { sender, receiver, chatId, chat } = data
      await chatModel.updateChat(chatId, chat)
      const listChat = await chatModel.list(sender, receiver)
      io.to(sender).emit("send-message-response", listChat.rows)
      io.to(receiver).emit("send-message-response", listChat.rows)
    } catch (error) {
      console.log(error)
    }
  })

  socket.on("delete-message", async (data) => {
    try {
      const { sender, receiver, chatId } = data
      await chatModel.deleteChat(chatId)
      const listChat = await chatModel.list(sender, receiver)
      io.to(sender).emit("send-message-response", listChat.rows)
      io.to(receiver).emit("send-message-response", listChat.rows)
    } catch (error) {
      console.log(error)
    }
  })
}
