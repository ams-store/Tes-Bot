let handler = async (m, { conn }) => {
let name = await conn.getName(m.sender)
let thumb = 'https://telegra.ph/file/bd044275940ed1b62efcd.jpg'
let mika = `Hai ${name} 👋\n\nAda yang bisa ${global.namebot} bantu?\n\nKetik !help untuk membuka Menu`
conn.sendMessage(m.chat, {
text: mika,
contextInfo: {
externalAdReply: {
title: namebot,
body: packname,
thumbnailUrl: thumb,
sourceUrl: sig,
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: false
}}})
}
handler.customPrefix = /^(bot|bot?|bott|mika|oy|bang)$/i
handler.command = new RegExp

export default handler