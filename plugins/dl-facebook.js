
import fb from 'api-dylux'
import ferch from 'node-fetch'
let limit = 15

let handler = async (m, { conn, args, usedPrefix, command }) => {

 
 if (!text) throw `✳️ Kirim tautan video Facebook\n\n📌 Contoh :\n*${usedPrefix + command}* https://www.facebook.com/dede2015k/videos/574910124852978/`
    m.react(rwait)
   try {
    let result = await fetch(`https://vihangayt.me/download/fb?url=${text}`)
    let fbdl = result.json()
    
    if (size.split('MB')[0] >= limit) return m.reply(` ≡  *Mika Bot YTDL*\n\n▢ *⚖️ Size* : ${size}\n▢ *🎞️ Query* : ${q}\n\n▢ _The file exceeds the download limit_ *+${limit} MB*`)
    
    let tex = `
┌─⊷ *Mika Bot FBDL*`;
    conn.sendFile(m.chat, fbdl.data.download.url, 'fb.mp4', tex, m);
    m.react(done);
  } catch (error) {
 	m.reply('Error: Coba lagi dengan tautan lain')
 	} 
}
handler.help = ['facebook'].map(v => v + ' <url>')
handler.tags = ['dl']
handler.command = /^((facebook|fb)(downloder|dl)?)$/i
handler.diamond = true

export default handler
