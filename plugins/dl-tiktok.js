
import fg from 'api-dylux' 
import { tiktokdl } from '@bochilteam/scraper'
    let limit = 10
let handler = async (m, { conn, text, args, usedPrefix, command}) => {

    
if (!args[0]) throw `✳️ Masukan link Tiktok\n\n 📌 Contoh : ${usedPrefix + command} https://vm.tiktok.com/L3N2t1Kt02/`
if (!args[0].match(/tiktok/gi)) throw `❎  Mohon periksa apakah link berasal dari TikTok`
m.react(rwait)

try {
let ling = await fetch(`https://api.azz.biz.id/api/tiktok?url=${text}`)
let ttdl = await ling.json()

let detil = `
*User:* ${ttdl.result.nickname}
*ID:* ${ttdl.result.unique_id}

_Sedang mengirim..._
`
let detil2 = `
*User:* ${ttdl.result.title}
*ID:* ${ttdl.result.unique_id}
`

conn.sendMessage(m.chat, {text: detil,
contextInfo: {
forwardingScore: 9999,
isForwarded: true,
externalAdReply: {
title: ('Facebook Downloader'),
body: (`${ttdl.result.title}`),
thumbnailUrl: (`${ttdl.result.avatar}`),
sourceUrl: global.fbku,
mediaType: 1,
renderLargerThumbnail: true
}}},
{quoted: m})

await conn.sendFile(m.chat, ttdl.result.sd, 'ig.mp4', 'TikTok Downloader\n© Mika Bot', m)

 }
 catch {
		m.reply(`❎ Error: Ada sebuah kesalahan`)
	}
}
    
}  
handler.help = ['tiktok']
handler.tags = ['dl']
handler.command = /^(tiktok|ttdl|tiktokdl|tiktoknowm)$/i
handler.diamond = true

export default handler

//https://api.azz.biz.id/api/tiktok?url=https://www.tiktok.com/@omagadsus/video/7025456384175017243?is_from_webapp=1&sender_device=pc&web_id6982004129280116226&key=global