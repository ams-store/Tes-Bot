import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, args, command }) => {
	let type = (args[1] || '').toLowerCase()
    let _type = (args[1] || '').toLowerCase()
    if (!args[0]) return m.reply('Apikeynya mana?')
  
try {
let zenz = await fetch(`https://api.zahwazein.xyz/user/cekapi?apikey=zenzkey_f59c1aacf2`)
let zenzapi = await zenz.json()

let tegs = `
${global.htki} *API Stalker* ${global.htka}
${global.gz} *Dibuat pada:* ${zenzapi.created}
${global.gz} *Diupdate:* ${zenzapi.updated}
${global.gz} *Nama pengguna:* ${zenzapi.username}
${global.gz} *Hit:* ${zenzapi.today_hits}/${zenzapi.total_hits}
${global.gz} *Premium:* ${zenzapi.premium_expired}
${global.sb}
`
    
conn.sendMessage(m.chat, {
text: tegs,
contextInfo: {
externalAdReply: {
title: (`API Stalker`),
body: ,
thumbnailUrl: thumb,
sourceUrl: ('minecraft://?addExternalServer=NCNL Legacy|play.ncnl.eu.org:40383'),
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: false
}}})

	}
	catch {
		m.reply(`👾 ERROR`)
	}
}

handler.command = /^(cek(key|api))$/i
export default handler

//https://api.zahwazein.xyz/user/cekapi?apikey=zenzkey_f59c1aacf2