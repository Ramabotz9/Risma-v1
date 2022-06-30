const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let fs = require('fs')
let handler = async (m) => {
let krizyn = `
╭─────{ *𝗥𝗨𝗟𝗘𝗦* }─────
│•➪𝐍𝐨 𝐡𝐢𝐧𝐚 𝐛𝐨𝐭
│•➪𝐍𝐨 𝐬𝐩𝐚𝐦
│•➪𝐍𝐨 𝘁𝗲𝗹𝗳𝗼𝗻
│•➪𝐍𝐨 𝐬𝐡𝐚𝐫𝐞 𝘃𝗶𝗿𝘁𝗲𝘅
│•➪𝐉𝐚𝐧𝐠𝐚𝐧 𝐩𝐚𝐤𝐚𝐢 𝗱𝗼𝗮𝗻𝗴 𝗱𝗼𝗻𝗮𝘀𝗶 𝗱𝗲𝗰𝗸
┬
╰──────────···
╭─────{ *𝗛𝗨𝗞𝗨𝗠* }─────
│•➪𝐁𝐚𝐧 𝐩𝐞𝐫𝐦𝐚𝗻𝗲𝗻
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
               displayText: 'Donasi',
               id: 'donasi',
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
