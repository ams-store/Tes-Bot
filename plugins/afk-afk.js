//import db from '../lib/database.js'

let handler = async (m, { text, conn }) => {
    let user = global.db.data.users[m.sender]
    user.afk = + new Date
    user.afkReason = text
    let mika = `
  😴 *AFK* 
Sekarang Kamu AFK sampai Kamu mengirim pesan 
▢ *User:* ${conn.getName(m.sender)} 
▢ *Alasan:* ${text ? text : ''}
  `
  
conn.sendMessage(m.chat, {
text: mika,
contextInfo: {
externalAdReply: {
title: ('Mika Misono Bot'),
body: ('Jangan Spam Bot!'),
thumbnailUrl: thumb,
sourceUrl: global.dygp,
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: true
}}})
  
}
handler.help = ['afk <Alasan>']
handler.tags = ['fun']
handler.command = ['afk']
handler.group = true

export default handler
