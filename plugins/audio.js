const { cmd } = require('../command');

cmd({
    pattern: "style",
    desc: "Bina kisi pareshani ke har tarah ke stylish font hasil karein.",
    category: "fun",
    react: "✨",
    filename: __filename,
    use: ".style [naam]"
}, async (conn, mek, m, { reply, args }) => {
    if (!args[0]) return reply("Bhai, naam to likho jise style karna hai!");
    
    const input = args.join(" ");
    
    const styles = [
        "𝔅𝔞𝔤𝔤𝔞 𝔖𝔥𝔢𝔯 " + input, "𝐒𝐡𝐞𝐫 𝐄 " + input, "Sʜᴇʀ " + input, "𝓢𝓱𝓮𝓻 𝓔 " + input,
        "𝕊𝕙𝕖𝐫 𝔼 " + input, "S̶h̶e̶r̶ ̶" + input, "丂卄乇尺 " + input, "ʂԋҽɾ " + input,
        "ֆɦɛʀ " + input, "ꓢꃅꍟꋪ " + input, "sʜᴇʀ " + input.toUpperCase(), "sʰᵉʳ " + input,
        "Ṡḧëŕ " + input, "S̾h̾e̾r̾ " + input, "S̸h̸e̸r̸ " + input, "S⃠h⃠e⃠r⃠ " + input,
        "Sℋℰℛ " + input, "𝓢𝓗𝓔𝓡 " + input, "𝕊ℍ𝔼ℝ " + input, "𝕾𝕳𝕰𝕽 " + input,
        "𝒮ℋℰℛ " + input, "ＳＨＥＲ " + input, "SᕼEᖇ " + input, "Sʜᴇʀ " + input,
        "ֆɦɛʀ " + input, "ƧΉΣЯ " + input, "丂卄乇尺 " + input, "ᔕᕼEᖇ " + input,
        "ՏHᗴᖇ " + input, "ֆɦɛʀ " + input, "𝓼𝓱𝓮𝓻 " + input, "𝓈𝒽ℯ𝓇 " + input,
        "𝓼𝓱𝓮𝓻 " + input, "丂卄乇尺 " + input, "ˢʰᵉʳ " + input, "shєr " + input,
        "s̶h̶e̶r̶ " + input, "s̲h̲e̲r̲ " + input, "s̴h̴e̴r̴ " + input, "s̷h̷e̷r̷ " + input,
        "s̽h̽e̽r̽ " + input, "s̷h̷e̷r̷ " + input, "S͎h͎e͎r͎ " + input, "S͙h͙e͙r͙ " + input,
        "S͆h͆e͆r͆ " + input, "S҉h҉e҉r҉ " + input, "S͓̽h͓̽e͓̽r͓̽ " + input, "🅂🄷🄴🅁 " + input
    ];
    
    const randomStyle = styles[Math.floor(Math.random() * styles.length)];
    
    await conn.sendMessage(m.chat, { text: "✨ STYLISH NAME:\n\n" + randomStyle }, { quoted: mek });
});
