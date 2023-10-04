
import fetch from 'node-fetch'
let handler = async (m, { text }) => {

if (!text) throw `✳️ Masukkan model dan teks\n\nContoh: !voice siti Hai

*Daftar Suara:*
Ardi 
Gadis
Jannie
Aoi
Daichi
Mayu
Naoki
Shiori
Dimas
Tuti
Jajang
`
m.react(rwait)

try {
let model = text.split('|')[0] ? text.split('|')[0] : '-'
  let teks = text.split('|')[1] ? text.split('|')[1] : '-'
    
let simiv = await fetch(`https://api.yanzbotz.my.id/api/tts/${encodeURIComponent(model)}?query=${encodeURIComponent(teks)}`)

conn.sendMessage(m.chat, { audio: Buffer.from(simiv.data, "base64"), mimetype: "audio/mp4" }, {quoted: m})

m.react(done)
}
catch {
		m.reply(`❎ Error: Ada sebuah kesalahan`)
	}
}
handler.help = ['voice', 'simiv'].map(v => v + ' <teks>')
handler.tags = ['fun']
handler.command = /^(voice|simiv)$/i

export default handler
