let handler  = async (m, { conn }) => {
  conn.reply(m.chat,`“${pickRandom(global.citas)}”`, m)
}
handler.help = ['citas']
handler.tags = ['citas']
handler.command = /^(citas)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.citas = [
  "Tienes que perdonar a mi corazón. Solo piensa en amarte.",
  "Parece mentira, tantas personas en el mundo y con la única persona que quiero estar es junto a ti.",
  "Si tuviese la suerte de ser el mar y tú una roca, lo que más desearía es que subiese la marea para besar tu boca.",
  "Fue la forma en la que sonreíste... súper que siempre querría eso en mi vida. Tus imperfecciones te convierten en la mujer perfecta. Desearía poder hablarte, desearía poder sonreírte, desearía poder abrazarte, pero sobre todo desearía poder besarte.",
  "No me importa que pasen las horas, los días y los años; lo único que deseo es que todo ese tiempo que pase sea a tu lado.",
  "He escrito novelas románticas sobre papel, pero en mi corazón se encuentra mi amor por ti, el más fiel.",
  "Quiero ser el único, no uno de ellos.",
  "Si algún día no puedo mirarte, para mí será un día oscuro, porque tú eres mi único sol, el que me ilumina, amor mío.",
  "Del cielo bajó un pintor para pintar tu figura, pero no encontró color para tanta hermosura.",
  "Eres un lindo paisaje con el que me quiero deleitar, tus ojos las flores, tu rostro la pradera y tu boca el mar.",
  "Temo despertarme una mañana y que ya no estés al otro lado de la cama.",
  "Jamás pensé que llegaría el día en el que realmente me enamoraría. Pero fue verte por primera vez y me di cuenta de que todo iba a cambiar.",
  "Eres la única estrella que brilla ante mis ojos y ante mi corazón.",
  "Tengo un problema. Ayer por la noche me puse a mirar las estrellas y di a cada una de ellas una razón por la que te quiero. El problema es que me quedé sin estrellas.",
  "Te quiero no por cómo eres, sino por como soy yo cuando tengo la suerte de estar a tu lado.",
  "El amor consta de un alma presente en dos cuerpos, y de un corazón que reside en dos almas.",
  "No cambiaría un minuto de ayer contigo por cien años de vida sin ti.",
  "El destino de nuestros labios es encontrarse, ¿para qué alargarlo más?",
  "Te amo en formas que jamás podrías adivinar...",
  "Tómate tiempo en escoger un amigo, pero sé más lento aún en cambiarlo...",
  "Los amigos se convierten con frecuencia en ladrones de nuestro tiempo.",
  "Sí, el amor está muy bien a su modo, pero la amistad es una cosa mucho más alta.",
  "Realmente nada hay en el mundo más noble y raro que una amistad verdadera.",
  "Un amigo es aquel que te da la libertad de ser tú mismo.",
  "No pases el tiempo con alguien que no esté dispuesto a pasarlo contigo."
]
