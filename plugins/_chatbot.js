/*
import fetch from 'node-fetch'

export async function before(m, { conn }) {
if (m.isBaileys && m.fromMe)
        return !0
    if (!m.isGroup) return !1
    let user = global.db.data.users[m.sender]
    
      if (!user.chatbot)
        return !0
        let api = await fetch(`https://api.azz.biz.id/api/alicia?q=${text}&user=Mika%20Bot&key=mangea`)
        let res = await api.json()
        m.reply(res.respon.replace('alicia','Mika Bot'))
    
}
*/

import fetch from 'node-fetch'

export async function before(m, { conn }) {

if (m.isBaileys && m.fromMe)
        return !0

if (!m.isGroup) return !0
    let user = global.db.data.users[m.sender]
    
if (!user.chatbot)
return !0

let mika = await fetch(`https://api.azz.biz.id/api/alicia?q=${text}&user=Mika%20Bot&key=mangea`)

let res = await mika.json()

m.reply(res.result.respon.replace('Alicia','Mika Bot'))
}