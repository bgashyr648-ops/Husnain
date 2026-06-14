const { cmd } = require("../command");

// ═══════════════════════════════════════════════════════════
// 😂 JAO COMMAND - RANDOM FUN PIC
// ═══════════════════════════════════════════════════════════
cmd(
    {
        pattern: "l",
        desc: "Send a random fun pic.",
        category: "attitude",
        react: "😂",
        filename: __filename,
        use: "",
    },
    async (conn, mek, m, { reply }) => {
        try {
            // Random pic array
            const pics = [
                "https://files.catbox.moe/0nrhju.jpg",
                "https://files.catbox.moe/8blu2k.jpg",
                "https://files.catbox.moe/wagifa.jpg",
                "https://files.catbox.moe/ec5gs4.jpg",
                "https://files.catbox.moe/gzmfy9.jpg",
                "https://files.catbox.moe/1xbdv1.jpg",
                "https://files.catbox.moe/aqs71k.jpg",
                "https://files.catbox.moe/rtufl6.jpg",
                "https://files.catbox.moe/qun5rq.jpg",
                "https://files.catbox.moe/oj3g6z.jpg",
                "https://files.catbox.moe/wm7cze.jpg",
                "https://files.catbox.moe/9p922w.jpg",
                "https://files.catbox.moe/la0toh.jpg",
                "https://files.catbox.moe/95gdzy.jpg",
                "https://files.catbox.moe/ly9zbp.jpg",
                "https://files.catbox.moe/j7efl9.jpg"
            ];

            // Pick random pic
            const randomPic = pics[Math.floor(Math.random() * pics.length)];

            // Send image
            await conn.sendMessage(
                mek.chat,
                { 
                    image: { url: randomPic }, 
                    caption: `> BAGGA-MD 🖤` 
                },
                { quoted: mek }
            );

        } catch (error) {
            console.error("❌ Error in .jao command:", error);
            reply("❌ *Error in .jao command:*\n" + error.message);
        }
    }
);
