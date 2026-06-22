const { cmd } = require('../command');

cmd({
    pattern: "birthday",
    desc: "Naam ke sath heavy birthday caption generator.",
    category: "fun",
    react: "🎂",
    filename: __filename,
    use: ".birthday [naam]"
}, async (conn, mek, m, { reply, args }) => {
    // 1. Agar naam na likha ho
    if (!args[0]) return reply("Bhai, command ke aage naam likho! \n*Example:* .birthday Ali");
    
    // 2. Naam ko catch kiya
    const name = args.join(" ").toUpperCase();

    // 3. 30 Heavy Designs (Har design mein ${name} fit hai)
    const designs = [
        `┏━━━━━━✨━━━━━━┓\n   HAPPY BIRTHDAY\n      ${name}\n┗━━━━━━🎂━━━━━━┛`,
        `╔══════════════╗\n    👑 SALGIRAH MUBARAK \n    🌟 ${name} 🌟\n╚══════════════╝`,
        `╭━━━🔥━━━╮\n  ${name}\n╰━━━🎂━━━━━━╯`,
        `꧁༺ ${name} ༻꧂\n\nSalgirah bohot bohot mubarak!`,
        `★━━━ ${name} ━━━★\n\nKhush raho, abad raho!`,
        `◤━━━━━━━━━━◥\n    ${name}\n◣━━━━━━━━━━◢\n\nJanamdin Mubarak!`,
        `✨━━━━━━✨\n  ${name}\n✨━━━━━━✨`,
        `🔥━━━━━━🔥\n  ${name}\n🔥━━━━━━🔥`,
        `🦁━━━━━━🦁\n  ${name}\n🦁━━━━━━🦁`,
        `🎈━━━━━━🎈\n  ${name}\n🎈━━━━━━🎈`,
        `╔═══❖•ೋ°\n  ${name}\n°ೋ•❖═══╗`,
        `💎━━━━━━💎\n   ${name}\n💎━━━━━━💎`,
        `⚡━━━ ${name} ━━━⚡`,
        `░▒▓█ ${name} █▓▒░`,
        `♛┈⛧┈┈•༶ ${name} ༶•┈┈⛧┈♛`,
        `🚀━━━━━━🚀\n  ${name}\n🚀━━━━━━🚀`,
        `🌹━━━━━━🌹\n  ${name}\n🌹━━━━━━🌹`,
        `🎵━━━━━━🎵\n  ${name}\n🎵━━━━━━🎵`,
        `🌈━━━━━━🌈\n  ${name}\n🌈━━━━━━🌈`,
        `⚔️━━━━━━⚔️\n  ${name}\n⚔️━━━━━━⚔️`,
        `❄️━━━━━━❄️\n  ${name}\n❄️━━━━━━❄️`,
        `🍀━━━━━━🍀\n  ${name}\n🍀━━━━━━🍀`,
        `🏮━━━━━━🏮\n  ${name}\n🏮━━━━━━🏮`,
        `🎐━━━━━━🎐\n  ${name}\n🎐━━━━━━🎐`,
        `🧿━━━━━━🧿\n  ${name}\n🧿━━━━━━🧿`,
        `🎖️━━━━━━🎖️\n  ${name}\n🎖️━━━━━━🎖️`,
        `🌟━━━━━━🌟\n  ${name}\n🌟━━━━━━🌟`,
        `🌺━━━━━━🌺\n  ${name}\n🌺━━━━━━🌺`,
        `🥂━━━━━━🥂\n  ${name}\n🥂━━━━━━🥂`,
        `🎁━━━━━━🎁\n  ${name}\n🎁━━━━━━🎁`
    ];

    // 4. Random design pick kiya
    const randomDesign = designs[Math.floor(Math.random() * designs.length)];
    
    // 5. Final message jismein naam aur design dono hain
    const finalMsg = `🎂 *LOVE MD BIRTHDAY GENERATOR*\n\n` + randomDesign + `\n\n_Powered by Love MD_`;
    
    // 6. Bot ne message bhej diya
    await conn.sendMessage(m.chat, { text: finalMsg }, { quoted: mek });
});
