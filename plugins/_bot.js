let handler = async (m, { conn, text, usedPrefix, command }) => {
let name = await conn.getName(m.sender)
  let wm = global.wm
hyzer = {
    key : {
  remoteJid: 'status@broadcast',
  participant : '0@s.whatsapp.net'
    },
  message: { 
  "extendedTextMessage": {
  "text": '*Ada yang bisa saya bantu?*',
  "title": wm,
  'jpegThumbnail': 'https://telegra.ph/file/ce4bb9b4b4ff355759299.jp',
        }
       } 
     }
conn.sendImageAsSticker(m.chat, 'https://telegra.ph/file/ce4bb9b4b4ff355759299..png', hyzer, { packname: "sticker by", author: "Rismaoffc" })
}

handler.customPrefix = /^(Bang|Bot|Woy|cok|pe|Hay|hay|hallo|Hallo)$/i
handler.command = new RegExp

module.exports = handler
