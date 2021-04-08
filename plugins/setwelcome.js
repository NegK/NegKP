let handler = async (m, { conn, text, isROwner, isOwner }) => {
  if (text) {
    if (isROwner) global.conn.welcome = text
    else if (isOwner) conn.welcome = text
    else global.DATABASE._data.chats.sWelcome = text
    m.reply('Bievenida exitosa\n@user (Mencion)\n@subject (Titulo del grupo)')
  } else throw '¿Qué texto?'
}
handler.help = ['setwelcome <texto>']
handler.tags = ['owner', 'grupo']

handler.command = /^setwelcome$/i
module.exports = handler

