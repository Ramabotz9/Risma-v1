const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let fs = require('fs')
let handler = async (m) => {
let krizyn = `
╭─────{ *R͓̽U͓̽L͓̽E͓̽S͓̽* }─────
│•➪𝐍𝐨 𝐡𝐢𝐧𝐚 𝐛𝐨𝐭
│•➪𝐍𝐨 𝐬𝐩𝐚𝐦
│•➪𝐍𝐨 𝐭𝐞𝐥𝐟𝐨𝐧/𝐕𝐜
│•➪𝐍𝐨 𝐬𝐡𝐚𝐫𝐞 𝐯𝐢𝐫𝐭𝐞𝐱 𝐤𝐞 𝐰𝐚 𝐛𝐨𝐭
│•➪𝐉𝐚𝐧𝐠𝐚𝐧 𝐩𝐚𝐤𝐚𝐢 𝐝𝐨𝐚𝐧𝐠 𝐝𝐞𝐤
┬
╰──────────···
╭─────{ *H͓̽U͓̽K͓̽U͓̽M͓̽* }─────
│•➪𝐁𝐚𝐧 𝐩𝐞𝐫𝐦𝐚𝐧𝐞𝐧
╰──────────···
	`.trim()
  let message = await prepareWAMessageMedia({ image: await (await require('node-fetch')(fotonya2)).buffer()}, { upload: conn.waUploadToServer }) 
    const template = generateWAMessageFromContent(m.key.remoteJid, proto.Message.fromObject({
        templateMessage: {
            hydratedTemplate: {
                hydratedContentText: krizyn,
                imageMessage: message.imageMessage, 
           hydratedFooterText: '🤖 PILIH MENU BIBAWAH',
           hydratedButtons: [{
             urlButton: {
               displayText: '🤖GroupBot🤖',
               url: 'https://chat.whatsapp.com/IqZke0cAG6G3iVsnB9myfL'
             }

           },
                {
               urlButton: {
               displayText: 'YOUTUBE ME',
               url: 'https://youtube.com/channel/UCW7iXlE7TgvJMIXQck4NYBQ'
             }

           },
               {
             quickReplyButton: {
               displayText: 'JANGAN DIPENCET',
               id: '',
             }
             
           },
               {
             quickReplyButton: {
               displayText: 'MENU',
               id: '.menu',
             }
             
             },
               {
             quickReplyButton: {
               displayText: 'RUNTIME',
               id: '.runtime',
             }

           }]
         }
       }
     }), { userJid: m.sender, quoted: m });
    //conn.reply(m.chat, text.trim(), m)
    return await conn.relayMessage(
         m.chat,
         template.message,
         { messageId: template.key.id }
     )
}

handler.tags = ['main', 'update']
handler.command = /^(rules|rule|snk)$/i
handler.help = ['rules']
module.exports = handler
