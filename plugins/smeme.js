
import uploadImage from '../lib/uploadImage.js'
import { sticker } from '../lib/sticker.js'

let handler = async (m, { conn, text, usedPrefix }) => {
 try {
  let teks1 = text.split('|')[0] ? text.split('|')[0] : '-'
  let teks2 = text.split('|')[1] ? text.split('|')[1] : '-'
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'Tidak ada foto'
  if (!/image\/(jpe?g|png)/.test(mime)) throw `Mime ${mime} tidak support`
  let img = await q.download()
  let url = await uploadImage(img)
  let wasted = `https://api.zahwazein.xyz/creator/smeme?text=${encodeURIComponent(teks1)}&text2=${encodeURIComponent(teks2)}&url=${url}&apikey=zenzkey_f59c1aacf2`
  
//  let wasted = `http://docs-jojo.herokuapp.com/api/meme-gen?top=${teks}&bottom=${teks2}&img=${url}`
  let stiker = await sticker(null, wasted, global.packname, global.author)
  conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
 } catch (e) {
   m.reply(`Masukan format!!\nReply image dengan caption ${usedPrefix}smeme teks1|teks2\n*Jangan reply sticker*`)
  }
}
handler.help = ['smeme']
handler.tags = ['sticker']
handler.command = /^smeme$/i

export default handler