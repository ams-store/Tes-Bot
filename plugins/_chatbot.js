
import CharacterAI from "node_characterai"

let characterAI = new CharacterAI()

(async () => {
  await characterAI.authenticateAsGuest()

  const characterId = "YntB_ZeqRq2l_aVf2gWDCZl4oBttQzDvhj9cXafWcF8"

  const chat = await characterAI.createOrContinueChat(characterId)

  const response = await chat.sendAndAwaitResponse("Hello discord mod!", true)

  console.log(response.text)
})()


/*import fetch from 'node-fetch'

export async function before(m, { conn }) {
await m.react(💬)

if (m.isBaileys && m.fromMe)
        return !0

if (!m.isGroup) return !0
    let user = global.db.data.users[m.sender]
    
if (!user.chatbot)
return !0

let mika = await fetch(`https://api.yanzbotz.my.id/api/ai/characterai?text=${m.text}&name=Mika`)

let res = await mika.json()


m.reply(res.result.replace('darling','Sensei').replace('dear','Sensei').replace('dearest','Sensei').replace('sayang','Sensei').replace('[Nama pengguna]', 'Sensei').replace('Anda','Sensei').replace('Hey there','Hey Sensei').replace('Hi there','Hi Sensei').replace('Hello there', 'Hello Sensei'),replace('Anda','Kamu'))
}*/

//let mika = await fetch(`https://api.yanzbotz.my.id/api/ai/characterai?id=id3xBWK9-mcu8Y8JOQjbKzzAmOzgGgmp8HomTp-UOq8&query=${m.text}`)