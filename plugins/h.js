const { cmd } = require('../command');

cmd({
    pattern: "tiktok",
    desc: "List mein se random video bhejne ke liye",
    category: "fun",
    react: "🎥",
    filename: __filename,
    use: ".tiktok"
}, async (conn, mek, m, { reply }) => {
    try {
        // Yahan apne saare URLs daal do bhai
        const videoUrls = [
            "https://files.catbox.moe/n5esbw.mp4",
            "https://files.catbox.moe/d3qdyp.mp4",
            "https://files.catbox.moe/iyh1cu.mp4",
            "https://files.catbox.moe/q27i3h.mp4",
        ];

        // Random link pick karne ke liye logic
        const randomUrl = videoUrls[Math.floor(Math.random() * videoUrls.length)];

        reply("*Bagga Sher video dhoond raha hai...* ⏳");
        
        await conn.sendMessage(m.chat, { 
            video: { url: randomUrl }, 
            caption: "*Ye lo bhai, aapki video hazir hai!* 🎬\n\n*Powered by Bagga Sher MD*" 
        }, { quoted: mek });

    } catch (e) {
        console.log(e);
        reply("*Bhai, video bhejne mein koi masala aa gaya!* ❌");
    }
});
