/*
import fetch from 'node-fetch'
let handler = async (m, { text }) => {
  let res = await fetch(global.API(`https://api.zahwazein.xyz/entertainment/simisimi?text=halo&apikey=zenzkey_f59c1aacf2`))
  let json = await res.json()
  if (json.result) m.reply(json.result.replace('simi','Mika').replace('simsimi','Mika'))
  else throw json
}
handler.help = ['simi', 'simsimi', 'simih'].map(v => v + ' <teks>')
handler.tags = ['fun']
handler.command = /^((sim)?simi|simih)$/i

export default handler
*/