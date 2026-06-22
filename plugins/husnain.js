const { cmd } = require('../command');

cmd({
    pattern: "hbday",
    desc: "VIP Heavy Birthday Wish",
    category: "fun",
    react: "🎂",
    filename: __filename
}, async (conn, mek, m, { reply, pushName }) => {

    const name = pushName || "Jaan";

    // 20 VIP Heavy Shayari for Birthday (Roman Urdu)
    const heavyShayari = [
        "┇ ✨ Sada muskurate raho tum,\n┇ ✨ Khushiyan chumein tumhare qadam!",
        "┇ 🌹 Tum salamat raho hazaar baras,\n┇ 🌹 Har baras ke hon din pachaas hazaar!",
        "┇ 💖 Phoolon si chamak ho chehre pe,\n┇ 💖 Sitaron si haseen zindagi mile tumhein!",
        "┇ 🎉 Dua hai ke tumhari har khwahish,\n┇ 🎉 Is saal zaroor puri ho jaye!",
        "┇ 👑 Duniya ki har khushi tumhari ho,\n┇ 👑 Aur gham ka kabhi saya bhi na ho!",
        "┇ 🌟 Har naya din nayi umeed laye,\n┇ 🌟 Tumhari zindagi sada jagmagaye!",
        "┇ 🎁 Khushiyon ka samandar ho tumhara,\n┇ 🎁 Kamyabi choome qadam tumhara!",
        "┇ 🎂 Tum aaye to bahaar aayi,\n┇ 🎂 Ghar mein khushiyon ki bahaar chhayi!",
        "┇ ✨ Allah pak tumhein lambi umar de,\n┇ ✨ Aur sehat-o-tandrusti ata farmaye!",
        "┇ 🎈 Haste raho, muskurate raho,\n┇ 🎈 Zindagi ke har pal ko sajate raho!",
        "┇ 🌹 Duaon mein yaad rakhte hain tumhein,\n┇ 🌹 Salgirah bohat bohat mubarak ho!",
        "┇ 💖 Har aane wala saal behtareen ho,\n┇ 💖 Tumhara har khwab poora aur haseen ho!",
        "┇ 🎉 Aaj ka din hai bohat khaas,\n┇ 🎉 Kyun ke aaj hai tumhari salgirah mere paas!",
        "┇ 👑 Tumhari is pyari si muskurahat pe,\n┇ 👑 Duniya ki har khushi fida ho jaye!",
        "┇ 🌟 Taron bhari raat aur phoolon ka din,\n┇ 🌟 Mubarak ho tumhein salgirah ka din!",
        "┇ 🎁 Zindagi ka har safar asaan ho,\n┇ 🎁 Manzilein tumhare qadmon mein hon!",
        "┇ 🎂 Tumhari umar ho chaand sitaron jaisi,\n┇ 🎂 Koi gham na aaye zindagi mein aisi!",
        "┇ ✨ Dua hai khuda se is mubarak din par,\n┇ ✨ Tumhari har dua qabool ho asmaan par!",
        "┇ 🎈 Khushiyon ki barish ho tum pe,\n┇ 🎈 Salgirah ki dheron duaein tum pe!",
        "┇ 🌹 Sada gulzaar rahe tumhara angan,\n┇ 🌹 Hamesha mehekta rahe tumhara daaman!"
    ];

    // Select a random shayari from the array
    const randomShayari = heavyShayari[Math.floor(Math.random() * heavyShayari.length)];
    
    // The Ultimate VIP Heavy Patti Design
    const finalCaption = `
┏━━━━━━━━━━━━━━━━━━━━━━┓
┇ 👑 𝐁𝐀𝐆𝐆𝐀 𝐒𝐇𝐄𝐑 𝐌𝐃 👑
┗━━━━━━━━━━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━━━━━━━━━━┓
┇ 🎂 𝐇𝐀𝐏𝐏𝐘 𝐁𝐈𝐑𝐓𝐇𝐃𝐀𝐘 🎂
┇ 👤 𝐓𝐨: ${name}
┗━━━━━━━━━━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━━━━━━━━━━┓
${randomShayari}
┗━━━━━━━━━━━━━━━━━━━━━━┛`;

    // Send the message
    return await reply(finalCaption);
});
