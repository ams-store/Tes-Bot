//import db from '../lib/database.js'


let handler = async (m, { text, conn }) => {
    let user = global.db.data.users[m.sender]
    user.afk = + new Date
    user.afkReason = text
    let mika = `
  😴 *AFK* 
Sekarang Kamu AFK

▢ *User:* ${conn.getName(m.sender)} 
▢ *Alasan:* ${text ? text : ''}
  `
  
conn.sendMessage(m.chat, {
text: mika,
contextInfo: {
externalAdReply: {
title: (`${conn.getName(m.sender)}`),
body: ('SEDANG AFK'),
thumbnailUrl: global.ppmika,
sourceUrl: global.fbku,
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: false
}}})
  
}
handler.help = ['afk <Alasan>']
handler.tags = ['fun']
handler.command = ['afk']
handler.group = true

export default handler
