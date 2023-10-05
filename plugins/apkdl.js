//https://vihangayt.me/download/apk?id=

import fetch from 'node-fetch'
let handler = async (m, { conn, text }) => {
let limit = 50

if (!text) throw `✳️ Download aplikasi menggunakan ID\n\nContoh: !apkdl com.whatsapp`
 
try {
let ling = await fetch(`https://vihangayt.me/download/apk?id=${text}`)
let apkdl = await ling.json()
let apkname = `Nama Aplikasi : ${apkdl.data.name}.apk`

 (size.split('MB')[0] >= limit) return m.reply(` ≡  *Mika Bot YTDL*\n\n▢ *⚖️ Size* : ${size}\n▢ *🎞️ Query* : ${q}\n\n▢ _File melebihi batas unduhan_ *+${limit} MB*`)

 
let detil = `
*Nama Aplikasi:* ${apkdl.data.name}
*Update:* ${apkdl.data.lastup}
*Nama Paket:* ${apkdl.data.package}
*Ukuran:* ${apkdl.data.size}

_Sedang mengirim..._
`
let detil2 = `
*Nama Aplikasi:* ${apkdl.data.name}.apk
*Update:* ${apkdl.data.lastup}
*Nama Paket:* ${apkdl.data.package}
*Ukuran:* ${apkdl.data.size}
`

conn.sendMessage(m.chat, {text: detil,
contextInfo: {
forwardingScore: 9999,
isForwarded: true,
externalAdReply: {
title: ('APK Downloader'),
body: (`${apkdl.data.name}`),
thumbnailUrl: (`${apkdl.data.icon}`),
sourceUrl: (`https://play.google.com/store/apps/details?id=${apkdl.data.package}`),
mediaType: 1,
renderLargerThumbnail: false
}}},
{quoted: m})

await conn.sendFile(m.chat, apkdl.data.dllink, (`${apkdl.data.name} (Mika Bot).apk`), detil2, m)

 }
 catch {
		m.reply(`❎ Error: Ada sebuah kesalahan`)
	}
}
handler.help = ['apkdl']
handler.tags = ['dl']
handler.command = /^apkdl$/i
handler.diamond = 3
export default handler

