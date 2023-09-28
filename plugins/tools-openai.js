
import fetch from 'node-fetch'
let handler = async (m, { conn, text }) => {
	
if (!text) throw `✳️ Masukkan Teks\n\nContoh: !gpt Siapa pendiri WhatsApp`
m.react('💬')

// gpt

	try {
	    
	    let gpt = await fetch(`https://api.azz.biz.id/api/gpt?q=${text}&key=mangea`)
     ;
        let res = await gpt.json()
        await m.reply(res.respon.replace('Azz-ai','Mika Bot').replace('yang terdiri dari Miftah dan Riki', 'dari ZuroX Project').replace('Miftah dan Riki','ZuroX Project'))
	} catch {
		m.reply(`❎ Error: Ada sebuah kesalahan`)
	}

}
handler.help = ['gpt <text>']
handler.tags = ['ai']
handler.command = ['ai', 'chatgpt', 'openai', 'gpt']
handler.premium = false
handler.diamond = true

export default handler
