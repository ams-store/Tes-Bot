/*
let handler = async(m, { conn, usedPrefix, command }) => {

    let don = `
┏━━━ꕥ〔 *${global.packname}* 〕ꕥ━⬣ 
┃Dana:  085892734104
┃Pulsa: 083155936234 ( AXIS )
┃Pulsa: 085892734104 ( IM3 )
┃Gopay: 085892734104
┗━━━ꕥ
┏━━━ꕥ〔 *Website* 〕ꕥ━⬣ 
┃Saweria: https://saweria.co/ClanDare
┃Trakteer: https://teer.id/dede_klender
┗━━━ꕥ

▢ *[ADS] Dapatkan $5 hanya dengan mengisi survey*
• *Link :* https://lootup.me?refer=3892731

Thanks for Donation!
`
let img = 'https://telegra.ph/file/77e1d9fa9c14042bcfcb4.png'
//conn.sendFile(m.chat, img, 'img.jpg', don, m)

conn.sendMessage(m.chat, {
text: don,
contextInfo: {
externalAdReply: {
title: (`Donasi`),
body: ('Dukung aku agar bot ini tetap hidup'),
thumbnailUrl: img,
sourceUrl: ('https://saweria.co/ClanDare'),
mediaType: 3,
showAdAttribution: true,
renderLargerThumbnail: false
}}})

}
handler.help = ['donate']
handler.tags = ['main']
handler.command = ['donasi', 'donate', 'dukung'] 

export default handler
*/

let { generateWAMessageFromContent, prepareWAMessageMedia, proto } = require('@adiwajshing/baileys')
let moment = require('moment-timezone')
let fetch = require('node-fetch')
let fs = require('fs')

let qris = ''
let handler = async (m, { conn, args, usedPrefix, command }) => {
const messa = await prepareWAMessageMedia({ image: await fetch(`${global.qris}`) }, { upload: conn.waUploadToServer })
const catalog = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": messa.imageMessage, 
"productId": "6639344636131773",
"title": `Donasi kepada Dede K.`,
"description": `Scan untuk Donasi`,
"currencyCode": "IDR",
"bodyText": wm,
"footerText": wm,
"priceAmount1000": "20000000",
"productImageCount": 1,
"firstImageId": 1,
"salePriceAmount1000": "15000000",
"retailerId": wm,
"url": "http://wa.me/6285892734104"
},
"businessOwnerJid": "6283155936234@s.whatsapp.net",
}
}), { userJid: m.chat, quoted: m })    

conn.relayMessage(m.chat, catalog.message, { messageId: catalog.key.id })
}
handler.help = ['donasi']
handler.tags = ['main']
handler.command = /^(donasi|donate)$/i

handle

module.exports = handler