

import fetch from 'node-fetch'
let handler = async (m, { conn, text }) => {
	
if (!text) throw `✳️ Mencari chord lagu dari perintah yang diberikan pengguna\n\nContoh: !chord iwan fals manusia setengah dewa`
m.reply(wait)

//code area
try {
    let animdif = await conn.getFile(`https://api.zahwazein.xyz/searching/chordlagu?query=wali&apikey=zenzkey_f59c1aacf2${text}`)
    
// let diff = await conn.getFile(`https://api.azz.biz.id/api/animediffusion?q=${text}&key=mangea`)
	    
conn.sendFile(m.chat, animdif.data, 'img.jpg', `*[ ANIME DIFFUSION ]*\n\nPROMPT:\n${text}`, m)
	}
	catch {
		m.reply(`❎ Error: Ada sebuah kesalahan`)
	}
//end

}
handler.help = ['animedif (Your Prompt)']
handler.tags = ['ai']
handler.command = ['animedif','nimedif']
handler.premium = false
handler.diamond = true

export default handler

/*let gpt = await fetch(`https://api.azz.biz.id/api/gpt?q=${text}&key=mangea`)*/

//https://api.zahwazein.xyz/searching/chordlagu?query=wali&apikey=zenzkey_f59c1aacf2