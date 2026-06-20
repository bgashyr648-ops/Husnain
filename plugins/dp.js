const { cmd } = require('../command');

cmd({
    pattern: "getpp",
    desc: "Number likh kar DP download karein.",
    category: "general",
    react: "🖼️",
    filename: __filename
}, async (conn, mek, m, { reply, args }) => {
    let input = args[0];
    if (!input) return reply("*Bhai, koi number toh likho! Maslan: .getpp 923001234567*");

    let number = input.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
    
    try {
        let ppUrl = await conn.profilePictureUrl(number, 'image');
        // m.chat ki jagah ye logic use kar, ye group/personal dono mein kaam karega
        let id = m.chat || m.sender; 
        await conn.sendMessage(id, { image: { url: ppUrl }, caption: "*Love MD - Profile Pic Downloaded*" }, { quoted: mek });
    } catch (e) {
        reply("*Bhai, ya toh number galat hai ya phir uski DP private hai.*");
    }
});
