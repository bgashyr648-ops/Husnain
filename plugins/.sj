const { cmd } = require('../command');

cmd({
    pattern: "a",
    desc: "Random video share karne ke liye",
    category: "fun",
    react: "💔",
    filename: __filename,
    use: ".a"
}, async (conn, mek, m, { reply }) => {
    try {
        const videoUrls = [
            "https://files.catbox.moe/tmiz6x.mp4",
             "https://files.catbox.moe/l323fi.mp4",
             "https://files.catbox.moe/l323fi.mp4",
             "https://files.catbox.moe/eywvi9.mp4",
            "https://files.catbox.moe/4kf22n.mp4",
            "https://files.catbox.moe/q593vp.mp4",
            "https://files.catbox.moe/rqa06l.mp4",
            "https://files.catbox.moe/rqa06l.mp4",
            "https://files.catbox.moe/3rhm0o.mp4",
            "https://files.catbox.moe/cy6d9h.mp4",
            "https://files.catbox.moe/4cngxm.mp4",
            "https://files.catbox.moe/03v9r3.mp4",
            "https://files.catbox.moe/03v9r3.mp4",
            "https://files.catbox.moe/mwxtq3.mp4",
            "https://files.catbox.moe/z3j9qd.mp4",
            "https://files.catbox.moe/lu683j.mp4",
            "https://files.catbox.moe/qk0cgw.mp4",
            "https://files.catbox.moe/c4xjll.mp4",
            "https://files.catbox.moe/ya7rvd.mp4",
            "https://files.catbox.moe/5f85sq.mp4",
            "https://files.catbox.moe/k1fajp.mp4",
            "https://files.catbox.moe/k4jbpb.mp4",
            "https://files.catbox.moe/9bjhsk.mp4",
            "https://files.catbox.moe/ihdnij.mp4",
            "https://files.catbox.moe/xh2wm4.mp4",
            "https://files.catbox.moe/ltpd6m.mp4",
            "https://files.catbox.moe/zf14q1.mp4",
            "https://files.catbox.moe/zf14q1.mp4",
            "https://files.catbox.moe/bnyt3v.mp4",
            "https://files.catbox.moe/a1l6ac.mp4",
            "https://files.catbox.moe/liqskk.mp4",
            "https://files.catbox.moe/8fem9l.mp4",
            "https://files.catbox.moe/40uie3.mp4",
            "https://files.catbox.moe/9s99z3.mp4",
            "https://files.catbox.moe/6msuhj.mp4",
            "https://files.catbox.moe/w7kdva.mp4",
            "https://files.catbox.moe/iiwo7y.mp4",
            "https://files.catbox.moe/guohji.mp4",
            "https://files.catbox.moe/ms0j4g.mp4",
            "https://files.catbox.moe/aqnmev.mp4",
           
            
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
