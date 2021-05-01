let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, text}) => {
    if (!text) throw 'A quien quieres prohibir?'
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw 'Etiqueta a uno de ellos'
    let users = global.DATABASE._data.users
    users[who].banned = true
    conn.reply(m.chat, `Ha sido prohibido`, m)
}
handler.help = ['ban']
handler.tags = ['owner']
handler.command = /^ban$/i
handler.rowner = true
handler.group = true

module.exports = handler
