let handler = async (m, { conn }) => {
const ftroli = {
    key : {
    remoteJid: '6285828764046-1614953337@g.us',
    participant : '0@s.whatsapp.net'
    },
    message: {
    orderMessage: {
    itemCount : 2022,
    status: 1,
    surface : 1,
    message: 'LiST PRICE JOIN GROUP', 
    orderTitle: `nadinbotz`,
    thumbnail: 'https://telegra.ph/file/f2d073b20bb1eefc93ccc.jpg', 
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
