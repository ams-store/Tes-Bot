import uploadImage from '../lib/uploadImage.js'
const { sticker } from '../lib/sticker.js'

let handler = async (m, { conn, text, usedPrefix }) => {
 try {
  let [teks1 = text.split('|')[0] ? text.split('|')[0] : '-'
  
//atas = text.split('|')[0] ? text.split('|')[0] : '-'
//bawah = text.split('|')[1] ? text.split('|')[1] : '-'
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'Tidak ada foto'
  if (!/image\/(jpe?g|png)/.test(mime)) throw `Mime ${mime} tidak support`
  let img = await q.download()
  let url = await uploadImage(img)
  let wasted = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${url}`
//  let wasted = `http://docs-jojo.herokuapp.com/api/meme-gen?top=${teks}&bottom=${teks2}&img=${url}`
  let stiker = await sticker(null, wasted, packname, author)
  conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
 } catch (e) {
   m.reply(`Masukan format!!\nReply image dengan caption ${usedPrefix}smeme teks1|teks2\n*Jangan reply sticker*`)
  }
}
handler.help = ['smeme']
handler.tags = ['sticker']
handler.command = /^smeme$/i
handler.diamond = false
handler.fail = null

export default handler