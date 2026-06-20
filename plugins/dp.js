const { cmd } = require('../command');

cmd({
    pattern: "getpp",
    desc: "Kisi ka bhi number likh kar DP download karein.",
    category: "general",
    react: "🖼️",
    filename: __filename,
    use: ".getpp 923xxxxxxxxx"
}, async (conn, mek, m, { reply, args }) => {
    let input = args[0];
    if (!input) return reply("*Bhai, number kahan hai? Maslan: .getpp 923xxxxxxxxx*");

    // Number saaf karna
    let number = input.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
    
    try {
        // DP URL fetch karna
        let ppUrl = await conn.profilePictureUrl(number, 'image').catch(() => null);
        
        if (!ppUrl) {
            return reply("*Bhai, ya toh number galat hai ya phir uski privacy setting ne DP hide ki hui hai.*");
        }

        // Image send karna
        await conn.sendMessage(m.chat, { 
            image: { url: ppUrl }, 
            caption: "*🦁 Bagga Sher MD - Profile Pic Downloaded!*" 
        }, { quoted: mek });
        
    } catch (e) {
        return reply("*Error: Kuch garbar ho gayi hai, shayad number active nahi hai.*");
    }
});
