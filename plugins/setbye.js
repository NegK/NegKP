let handler = async (m, { conn, text, isROwner, isOwner }) => {
  if (text) {
    if (isROwner) global.conn.bye = text
    else if (isOwner) conn.bye = text
    else global.DATABASE._data.chats.sBye = text
    m.reply('Depedida exitosa\n@user (Mencion)')
  } else throw '¿Qué texto?'
}
handler.help = ['setbye <texto>']
handler.tags = ['owner', 'group']
handler.rowner = true
handler.group = true
handler.command = /^setbye$/i
module.exports = handler

