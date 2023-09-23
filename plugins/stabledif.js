
import fetch from 'node-fetch'
let handler = async (m, { conn, text }) => {
	
if (!text) throw `✳️ Membuat Gambar AI menggunakan perintah yang diberikan pengguna\n\nContoh: !stabledif 1girls`
m.react('💬')

//code area
try {
let diff2 = await fetch(`https://api.zayn-c.my.id/ai-diffusion?text=${text}`)
	    
let stabdif = await diff2.json()
  let tes = results.all
  let teks = results.all.map(v => {
    switch (v.type) {
      case 'setabil': return `
▢ ${v.filename}
▢ *Link* : ${v.url}
   `.trim()
      case 'channel': return `
▢ *${v.name}* (${v.url})
▢${v.subCountLabel} (${v.subCount}) Subscriber
▢ ${v.videoCount} video
`.trim()
    }
  }).filter(v => v).join('\n\n________________________\n\n')	
conn.sendMessage(m.chat, stabdif.result, 'img.jpg', `*[ STABLE DIFFUSION ]*\n\nPROMPT:\n${text}`, m)
	}
	catch {
		m.reply(`❎ Error: Ada sebuah kesalahan`)
	}
//end

}
handler.help = ['stabledif <text>']
handler.tags = ['ai']
handler.command = ['diff','stabledif']
handler.premium = false
handler.diamond = 3

export default handler

/*let gpt = await fetch(`https://api.azz.biz.id/api/gpt?q=${text}&key=mangea`)*/