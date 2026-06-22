const { cmd } = require('../command');

cmd({
    pattern: "style",
    desc: "Convert text to extreme heavy stylish fonts",
    category: "fun",
    react: "👑",
    filename: __filename,
    use: ".style [naam]"
}, async (conn, mek, m, { reply, args }) => {
    let text = args.join(" ");
    if (!text) return reply("Bhai, apna naam to likho jise style karna hai!");

    // Extreme Heavy Designs
    const heavyStyles = [
        (t) => `𝕿𝕳𝕰 𝕷𝕰𝕲𝕰𝕹𝕯 ➺ ` + t.toUpperCase(),
        (t) => `💎 𝔖𝔗𝔜𝔏𝔈 𝔅𝔒𝔗 ➺ ` + t,
        (t) => `🔥 𝕷𝕺𝖁𝕰 𝕸𝕯 𝕻𝕽𝕺 ➺ ` + t,
        (t) => `⚡ 𝕬𝕿𝕿𝕴𝕿𝖀𝕯𝕰 ➺ ` + t.toUpperCase(),
        (t) => `♛ 𝓚𝓘𝓝𝓖 𝓞𝓕 𝓛𝓞𝓥𝓔 𝓜𝓓 ➺ ` + t,
        (t) => `⚔️ 𝔇𝔄𝔎ℜ 𝔎𝔑ℑ𝔊ℌ𝔗 ➺ ` + t,
        (t) => `💀 𝕯𝕰𝕬𝕯𝕷𝖄 𝕾𝕿𝖄𝕷𝕰 ➺ ` + t,
        (t) => `🧿 𝕾𝖀𝕻𝕰𝕽 𝕳𝕰𝕬𝖁𝖄 ➺ ` + t.toUpperCase(),
        (t) => `⫸ 𝕷𝕺𝖁𝕰 𝕸𝕯 𝕮𝕺𝕸𝕸𝕬𝕹𝕯 ⫷ ` + t,
        (t) => `『 ♛ ` + t.toUpperCase() + ` ♛ 』`,
        (t) => `𓂀 𝔐𝔄𝔖𝔗𝔈𝔑 𝔒𝔉 𝔏𝔒𝔙𝔈 𝔐𝔇 𓂀 ` + t,
        (t) => `◥◣ 𝕳𝕰𝕬𝖁𝖄 𝕾𝕿𝖄𝕷𝕴𝕾𝕳 ◢◤ ` + t
    ];

    const randomStyle = heavyStyles[Math.floor(Math.random() * heavyStyles.length)];
    const stylishName = randomStyle(text);

    let response = `✨ *LOVE MD HEAVY STYLER*\n\n${stylishName}\n\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n*Powered by Love MD*`;
    
    return await conn.sendMessage(m.chat, { text: response }, { quoted: mek });
});
