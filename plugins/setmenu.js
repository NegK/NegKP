let handler  = async (m, { conn, command, text }) => {
  let type = command.replace(/^set(menu|help|\?)/, '').toLowerCase()
  if (type == '') {
    if (text) {
      conn.menu = text
      conn.reply(m.chat, 'Menú configurado correctamenten' + info, m)
    } else {
      conn.menu = {}
      conn.reply(m.chat, 'Menu restablecido', m)
    }
  } else {
    conn.menu = typeof conn.menu == 'objeto' ? conn.menu : {}
    if (text) {
      conn.menu[type] = text
      conn.reply(m.chat, 'Menu ' + type + ' establecer con éxito' + info, m)
    } else {
      delete conn.menu[type]
      conn.reply(m.chat, 'Menu ' + type + ' restablecimiento', m)
    }
  }
}
handler.help = ['', 'before','header','body','footer','after'].map(v => 'setmenu' + v + ' <texto>')
handler.tags = ['owner']
handler.command = /^set(menu|help|\?)(before|header|body|footer|after)?$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

let info = `
Universal:
%% (%)
%p (Prefijo)
%exp (Exp actual)
$maxexp (Exp para subir de nivel)
%totalexp (Total Exp)
%xp4levelup (Exp requerido para la nivelación)
%limit (Limite)
%name (Nombre)
%week (Dia)
%date (Fecha)
%time (Hora)
%uptime (Tiempo de actividad del bot)
%rtotalreg (Número de usuarios enumerados en la base de datos)
%totalreg (Número de usuarios en la base de datos)

Sección de menú encabezado y pie de página:
%category (Categoría)

Sección del cuerpo del menú:
%cmd (Comando a realizar)
%islimit (Si el comando es...)
`.trim()
