const { cmd } = require('../command');

// Munir Ahmed Command
cmd({
    pattern: "munir",
    desc: "Sends Munir Ahmed profile audio card",
    category: "owner",
    react: "🔥",
    filename: __filename
}, async (conn, mek, m, { reply }) => {
    let contextInfo = { 
        "waveform": [99,0,99,0,99], 
        "forwardingScore": 55555, 
        "isForwarded": true, 
        "externalAdReply": { 
            "title": "LOVE MD", 
            "body": "- Thııx Hɘɑrt , Dııɘd F0r All'w ; 💔", 
            "mediaType": 4, 
            "thumbnail": "https://cdn.ironman.my.id/i/yewsfo.jpg", 
            "mediaUrl": "https://www.instagram.com/officialbaloch003/profilecard/?igsh=MXY3bnZibWNhMnN5MQ==", 
            "sourceUrl": "https://🇵🇰+𝟫𝟤𝟥𝟦𝟫𝟦𝟥𝟧𝟥0𝟩𝟩 🇵🇰/https://wa.me/qr/3JHKCD2RWYMUP1", 
            "showAdAttribution": true 
        }
    };
    await conn.sendMessage(m.chat, { audio: { url: "https://cdn.ironman.my.id/i/7p5plg.mp4" }, mimetype: 'audio/mp4', ptt: true, contextInfo: contextInfo }, { quoted: mek });
});

// Muzamil Command
cmd({
    pattern: "muzamil",
    desc: "Sends Muzamil profile audio card",
    category: "owner",
    react: "👑",
    filename: __filename
}, async (conn, mek, m, { reply }) => {
    let contextInfo = { 
        "waveform": [99,0,99,0,99], 
        "forwardingScore": 55555, 
        "isForwarded": true, 
        "externalAdReply": { 
            "title": "LOVE MD", 
            "body": "- Thııx Hɘɑrt , Dııɘd F0r All'w ; 💔", 
            "mediaType": 4, 
            "thumbnail": "https://cdn.ironman.my.id/i/252yjc.jpg", 
            "mediaUrl": "https://www.instagram.com/xeon5_4/profilecard/?igsh=MXY3bnZibWNhMnN5MQ==", 
            "sourceUrl": "https://🇵🇰+92xxxx 🇵🇰/https://wa.me/qr/3JHKCD2RWYMUP1", 
            "showAdAttribution": true 
        }
    };
    await conn.sendMessage(m.chat, { audio: { url: "https://cdn.ironman.my.id/i/ekgf4w.mp4" }, mimetype: 'audio/mp4', ptt: true, contextInfo: contextInfo }, { quoted: mek });
});
