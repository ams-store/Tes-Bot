
import fetch from 'node-fetch'
let handler = async (m, { conn, text }) => {
let thumb = 'https://telegra.ph/file/016c521fb63069af28cec.jpg'
m.reply(wait)


try {
let ncnlstat = await fetch(`https://api.mcstatus.io/v2/status/bedrock/play.zybra.eu.org:29427`)
let sevre = await ncnlstat.json()
    
let tegs = `
${global.htki} *Zybra Server* ${global.htka}
${global.gz} *Version:* ${sevre.version.name}
${global.gz} *MOTD:* ${sevre.motd.clean}
${global.gz} *Game Mode:* ${sevre.gamemode}
${global.gz} *Player:* ${sevre.players.online}
${global.gz} *Max Player:* ${sevre.players.max}
${global.gz} *Online:* ${sevre.online}
${global.sb}

${global.htki} *HOST & PORT* ${global.htka}
${global.gz} *Host:* ${sevre.host}
${global.gz} *Port:* ${sevre.port}
${global.sb}
    `
    
conn.sendMessage(m.chat, {
text: tegs,
contextInfo: {
externalAdReply: {
title: (`NCNL Stalker`),
body: ('Status Server'),
thumbnailUrl: thumb,
sourceUrl: ('minecraft://?addExternalServer=NCNL Legacy|DE-1.retslav:29427'),
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: false
}}})

	}
	catch {
		m.reply(`❎ Error: Ada sebuah kesalahan`)
	}
//end

}
handler.help = ['mcstalk']
handler.tags = ['tools']
handler.command = ['mcstalk']
handler.premium = false
handler.diamond = false

export default handler

/*let gpt = await fetch(`https://api.azz.biz.id/api/gpt?q=${text}&key=mangea`)*/