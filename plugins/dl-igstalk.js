
import fg from 'api-dylux'
let handler= async (m, { conn, args, text, usedPrefix, command }) => {
	
    if (!text) throw `✳️ Masukan Username Instagram\n\n📌Contoh: ${usedPrefix + command} dede_klender` 
    try {
        
    let igestak = await fetch(`https://api.zahwazein.xyz/stalker/ig?username=${text}&apikey=zenzkey_f59c1aacf2`)
    
    let res = await igestak.json()
    
    let teks = `
┌──「 *STALKING* 
▢ *🔖 Name:* ${res.result.full_name} 
▢ *🔖 Username:* ${res.result.username}
▢ *👥 Followers:* ${res.result.follower_count}
▢ *🫂 Following:* ${res.result.following_count}
▢ *📌 Bio:* ${res.result.biography}
▢ *🏝️ Posts:* ${res.result.media_count}
▢ *📱 Reels:* ${res.result.total_igtv_videos}
▢ *🔗 Link:* https://instagram.com/${res.result.username.replace(/^@/, '')}
└────────────`

if (teks) return conn.sendMessage(m.chat, {
text: teks,
contextInfo: {
externalAdReply: {
title: ('Instagram Stalker'),
body: (`${res.result.username}`),
thumbnailUrl: (`${res.result.profile_pic_url}`),
sourceUrl: (`https://www.instagram.com/${res.result.username.replace(/^@/, '')}`),
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: false
}}}, res)
     
//await conn.sendFile(m.chat, , teks, m)
      } catch {
        m.reply(`✳️ Pastikan nama pengguna ada di *Instagram*`)
      }
}
handler.help = ['igstalk']
handler.tags = ['dl']
handler.command = ['igstalk','stalkig'] 

export default handler
