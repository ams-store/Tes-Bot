
import fb from 'api-dylux'
import ferch from 'node-fetch'
let limit = 15

let handler = async (m, { conn, args, usedPrefix, command }) => {

 
if (!text) throw `✳️ Download Video Facebook\n\nContoh: !fbdl https://www.facebook.com/dede2015k/videos/574910124852978`
 
try {
let ling = await fetch(`https://vihangayt.me/download/fb2?url=${text}`)
let fbdl = await ling.json()
let apkname = `Nama Aplikasi : ${fbdl.data.name}.apk`
let ukur = `${fbdl.data.size}`

if (ukur.split('MB')[0] >= limit)
return m.reply(`
${global.htki} *Mika Bot FBDL* ${global.htka}

${global.htjava} *Nama Aplikasi* : ${fbdl.data.name}
${global.htjava} *Size* : ${fbdl.data.size}

${global.htjava} _File melebihi batas unduhan_ *+${limit} MB*`)

let detil = `
*Judul:* ${fbdl.data.title}
*Deskripsi:* ${fbdl.data.desc}

_Sedang mengirim..._
`
let detil2 = `
*Judul:* ${fbdl.data.title}
*Deskripsi:* ${fbdl.data.desc}
`

conn.sendMessage(m.chat, {text: detil,
contextInfo: {
forwardingScore: 9999,
isForwarded: true,
externalAdReply: {
title: ('Facebook Downloader'),
body: (`${fbdl.data.name}`),
thumbnailUrl: (`${fbdl.data.thumb}`),
sourceUrl: (`https://play.google.com/store/apps/details?id=${fbdl.data.package}`),
mediaType: 1,
renderLargerThumbnail: true
}}},
{quoted: m})

await conn.sendFile(m.chat, fbdl.data.dllink, (`${fbdl.data.name} (Mika Bot).apk`), detil2, m)

 }
 catch {
		m.reply(`❎ Error: Ada sebuah kesalahan`)
	}
}
handler.help = ['facebook'].map(v => v + ' <url>')
handler.tags = ['dl']
handler.command = /^((facebook|fb)(downloder|dl)?)$/i
handler.diamond = true

export default handler
