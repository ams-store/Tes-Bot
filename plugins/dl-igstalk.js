
import fg from 'api-dylux'
let handler= async (m, { conn, args, text, usedPrefix, command }) => {
	
    if (!args[0]) throw `✳️ Masukan Username Instagram\n\n📌Contoh: ${usedPrefix + command} dede_klender` 
    try {
    let res = await fg.igStalk(args[0])
    let teks = `
┌──「 *STALKING* 
▢ *🔖 Name:* ${res.name} 
▢ *🔖 Username:* ${res.username}
▢ *👥 Followers:* ${res.followersH}
▢ *🫂 Following:* ${res.followingH}
▢ *📌 Bio:* ${res.description}
▢ *🏝️ Posts:* ${res.postsH}
▢ *🔗 Link* : https://instagram.com/${res.username.replace(/^@/, '')}
└────────────`
     //await conn.sendFile(m.chat, res.profilePic, 'igstalk.png', teks, m)
      } catch {
        m.reply(`✳️ Pastikan nama pengguna ada di *Instagram*`)
      }
}
handler.help = ['igstalk']
handler.tags = ['dl']
handler.command = ['igstalk','stalkig'] 

export default handler
