const { cmd } = require('../command');

// Islamic Good Morning Command (50 Quotes)
cmd({
    pattern: "goodmorning",
    desc: "Send Islamic Good Morning wishes",
    category: "general",
    react: "🌅",
    filename: __filename,
}, async (conn, mek, m, { reply }) => {
    const quotes = [
        "Assalam-o-Alaikum! Allah aap ka din khair-o-barkat wala banaye. 🌅", "Subha bakhair! Allah aaj ke din aap ki tamam pareshaniyan door farmaye. ✨",
        "Is khoobsurat subha ke sath Allah se dua hai ke wo aap ko sakoon aur kamyabi ata farmaye. 🤲", "Allah ki rehmaton ke saaye mein aap ka din shuru ho. Subha bakhair!",
        "Nayi subha, naye iraday. Allah aap ke liye asaaniyan paida kare.", "Subha ki pehli kiran aap ke liye khushiyan laye. Allah Hafiz-o-Nasir!",
        "Allah kare aaj ka din aap ke liye eman afroz ho. Subha bakhair!", "Har subha Allah ka shukar ada karna lazmi hai.",
        "Allah aap ke rizq mein barkat dale.", "Subha ka aghaz Allah ke zikr se behtareen hai.",
        "Allah aap ki har jaiz dua qubool farmaye.", "Is din mein Allah aap ki hifazat farmaye.",
        "Subha bakhair! Allah aap ke dil ko sukoon de.", "Allah aap ki mushkilat ko asaani mein badal de.",
        "Nayi subha, nayi umeed. Allah kher kare.", "Allah aap ko har bala se mehfooz rakhe.",
        "Subha bakhair! Aaj ka din Allah ki rehmaton se bhara ho.", "Allah aap ke ilm aur amal mein barkat de.",
        "Subha uthte hi Allah ko yaad karna sukoon deta hai.", "Allah aap ke ghar mein khushali laye.",
        "Allah ki zat par bharosa rakhein.", "Subha bakhair! Allah aap ko hamesha khush rakhe.",
        "Allah aap ke liye raste asaan kare.", "Aaj ka din Allah ki ibadat mein guzre.",
        "Allah aap ko sehat-e-kamila ata farmaye.", "Allah ki raza hi hamari kamyabi hai.",
        "Subha ka salam, Allah ke naam.", "Allah aap ke maqsad mein kamyabi de.",
        "Subha bakhair! Allah aap ke sabr ka ajar de.", "Allah har pal aap ka sath de.",
        "Nayi subha, nayi shuruaat. Allah madad kare.", "Allah aap ko har buri nazar se bachaye.",
        "Subha bakhair! Allah aap ka hami-o-madadgar ho.", "Allah aap ke liye khushiyan likh de.",
        "Allah aap ko nek raah par rakhe.", "Subha ka waqt Allah ki nemat hai.",
        "Allah aap ki har khwahish puri kare.", "Allah aap ke dukh mita de.",
        "Subha bakhair! Allah aap ko kamyab kare.", "Allah aap ko har mushkil se nikale.",
        "Allah ki rehmat aap par barse.", "Subha bakhair! Allah aap ko sukoon-e-qalb de.",
        "Allah aap ki har pareshani door kare.", "Nayi subha, Allah ka shukar.",
        "Allah aap ko hamesha muskurata rakhe.", "Allah aap ke liye behtareen faislay kare.",
        "Subha bakhair! Allah aap ko izzat de.", "Allah aap ke liye aasaniyan paida kare.",
        "Allah aap ko nek aur saleh banaye.", "Subha bakhair! Allah hum sab par reham farmaye."
    ];
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    let msg = `┏━━━━━━━━━━━━━━━━━━┓\n   👑 *LOVE MD - MORNING* 👑\n┗━━━━━━━━━━━━━━━━━━┛\n\n✨ ${randomQuote}\n\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n*Powered by Bagga Sher MD*`;
    return await conn.sendMessage(m.chat, { text: msg }, { quoted: mek });
});

// Islamic Good Night Command (50 Quotes)
cmd({
    pattern: "goodnight",
    desc: "Send Islamic Good Night wishes",
    category: "general",
    react: "🌙",
    filename: __filename,
}, async (conn, mek, m, { reply }) => {
    const quotes = [
        "Allah ki hifazat mein rahen. Shab-e-Khair! 🌙", "Allah aap ko pur-sukoon neend aur ache khwab ata farmaye. ✨",
        "Is raat ke andheron mein Allah ki noorani hifazat aap ke sath ho. 🤲", "Sone se pehle Allah ka shukar ada karein. Allah Hafiz!",
        "Allah aap ke tamam gunahon ko maaf farmaye. Shab-e-Khair!", "Raat ki tanhai mein Allah ko yaad karein.",
        "Allah aap ko firon aur shaitan ke shar se bachaye.", "Allah aap ki neend mein sukoon rakhe.",
        "Sote waqt Surah Mulk parhna na bhoolein.", "Allah aap ki har dua qubool kare.",
        "Raat ka sukoon Allah ki taraf se hai.", "Allah aap ki zindagi mein barkat dale.",
        "Shab-e-Khair! Allah aap ko apne hifz-o-amaan mein rakhe.", "Allah aap ke liye subha ki nai umeed laye.",
        "Allah aap ko har darr se mehfooz rakhe.", "Raat ke waqt Allah se apne gunahon ki maafi mangein.",
        "Allah aap ke dil ko noor se bhar de.", "Allah aap ko behtareen khwab dikhaye.",
        "Sote waqt Allah ka naam lein.", "Allah aap ko har museebat se door rakhe.",
        "Shab-e-Khair! Allah aap ki har pareshani door kare.", "Allah aap ko jannat ke khwab dikhaye.",
        "Raat ki khamoshi mein Allah ko pukarein.", "Allah aap ke ghar mein sukoon rakhe.",
        "Shab-e-Khair! Allah aap ki har tamanna puri kare.", "Allah aap ko hamesha apni panah mein rakhe.",
        "Sone se pehle wuzu kar lein, sukoon milega.", "Allah aap ki neend ko ibadat bana de.",
        "Allah aap ko har burai se bacha le.", "Raat bakhair! Allah aap ke liye aasanian kare.",
        "Allah aap ko har haadse se bachaye.", "Shab-e-Khair! Allah aap par apni rehmat kare.",
        "Allah aap ke liye raah hamwar kare.", "Allah aap ko nek khwab dikhaye.",
        "Allah aap ke dil ki baat janta hai.", "Shab-e-Khair! Allah aap ka sukoon barhaye.",
        "Allah aap ki har uljhan suljha de.", "Allah aap ko har pareshani se nikal de.",
        "Raat bakhair! Allah hum sab ki maghfirat kare.", "Allah aap ki hifazat ka zamindaar hai.",
        "Shab-e-Khair! Allah aap ko sukoon-e-eeman de.", "Allah aap ko jannat-ul-firdous mein jagah de.",
        "Allah aap ke liye subha ka noor laye.", "Raat bakhair! Allah aap ki har muskil aasan kare.",
        "Allah aap ko har qisam ke darr se azad kare.", "Shab-e-Khair! Allah aap par khushiyan barsaye.",
        "Allah aap ki har dua mein asar de.", "Allah aap ko har buri nazar se bachaye.",
        "Raat bakhair! Allah aap ko lambi aur nek zindagi de.", "Allah aap ka har kaam sawar de."
    ];
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    let msg = `┏━━━━━━━━━━━━━━━━━━┓\n   👑 *LOVE MD - NIGHT* 👑\n┗━━━━━━━━━━━━━━━━━━┛\n\n✨ ${randomQuote}\n\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n*Powered by Bagga Sher MD*`;
    return await conn.sendMessage(m.chat, { text: msg }, { quoted: mek });
});
