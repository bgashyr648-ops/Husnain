const { cmd } = require('../command');

cmd({
    pattern: "v",
    desc: "Random video share karne ke liye",
    category: "fun",
    react: "🎥",
    filename: __filename,
    use: ".v"
}, async (conn, mek, m, { reply }) => {
    try {
        const videoUrls = [
            "https://files.catbox.moe/n5esbw.mp4",
            "https://files.catbox.moe/d3qdyp.mp4",
            "https://files.catbox.moe/iyh1cu.mp4",
            "https://files.catbox.moe/q27i3h.mp4",
        ];

        const randomUrl = videoUrls[Math.floor(Math.random() * videoUrls.length)];

        await conn.sendMessage(m.chat, { 
            video: { url: randomUrl }, 
            mimetype: "video/mp4",
            caption: "*Ye lo, Bagga Sher ki taraf se ek nayi video!* 🎬\n\n*Powered by Love MD*" 
        }, { quoted: mek });

    } catch (e) {
        console.log("Error in v command: ", e);
        reply("*Bhai, video load hone mein masla aa raha hai, baad mein try karo.*");
    }
});
