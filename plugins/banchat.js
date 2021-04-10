let handler = async (m, { conn, participants }) => {
    global.DATABASE._data.chats[m.chat].isBanned = true
    m.reply('De acuerdo Rey!')
  
}
handler.help = ['banchat']
handler.tags = ['owner']
handler.command = /^banchat$/i
handler.owner = true

module.exports = handler
