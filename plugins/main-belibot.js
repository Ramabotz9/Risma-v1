let handler = async (m, { conn }) => {
const ftroli = {
    key : {
    remoteJid: '6285850539404-1614953337@g.us',
    participant : '0@s.whatsapp.net'
    },
    message: {
    orderMessage: {
    itemCount : 2022,
    status: 1,
    surface : 1,
    message: 'Sewa Bot', 
    orderTitle: `JarotOfc`,
    thumbnail: 'https://telegra.ph/file/eabb6696cf296336effba.jpg', 
    sellerJid: '0@s.whatsapp.net' 
    }
    }
    }
	conn.reply(m.chat, price1, ftroli)
}

handler.help = ['sewa', 'sewabot']
handler.tags = ['info']
handler.command = /^(sewa|sewabot)?$/i

module.exports = handler
