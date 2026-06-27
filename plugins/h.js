const { cmd } = require('../command');

// Command: .v (Yeh waisi hi hai jaisi pehle thi)
cmd({
    pattern: "v",
    desc: "Random video share karne ke liye",
    category: "fun",
    react: "🎥",
    filename: __filename,
    use: ".v"
}, async (conn, mek, m, { reply }) => {
    try {
        const videoUrls = [
            "https://files.catbox.moe/n5esbw.mp4",
            "https://files.catbox.moe/tmiz6x.mp4",
            "https://files.catbox.moe/l323fi.mp4",
            "https://files.catbox.moe/eywvi9.mp4",
            "https://files.catbox.moe/4kf22n.mp4",
            "https://files.catbox.moe/q593vp.mp4",
            "https://files.catbox.moe/rqa06l.mp4",
            "https://files.catbox.moe/3rhm0o.mp4",
            "https://files.catbox.moe/cy6d9h.mp4",
            "https://files.catbox.moe/4cngxm.mp4",
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
            "https://files.catbox.moe/d3qdyp.mp4",
            "https://files.catbox.moe/iyh1cu.mp4",
            "https://files.catbox.moe/q27i3h.mp4",
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

// Command: .xv (Caption update kar di gayi hai)
cmd({
    pattern: "xv",
    desc: "Naye links se random video share karne ke liye",
    category: "fun",
    react: "🎥",
    filename: __filename,
    use: ".xv"
}, async (conn, mek, m, { reply }) => {
    try {
        const customVideoUrls = [
            "https://files.catbox.moe/wh6g7m.mp4",
            "https://files.catbox.moe/txwkut.mp4",
            "https://files.catbox.moe/f2uu2w.mp4",
            "https://files.catbox.moe/igri8u.mp4",
            "https://files.catbox.moe/amam7y.mp4",
            "https://files.catbox.moe/uf5ucp.mp4",
            "https://files.catbox.moe/aiu05b.mp4",
            "https://files.catbox.moe/gp9dqw.mp4",
            "https://files.catbox.moe/2jkdmg.mp4",
            "https://files.catbox.moe/je3ebd.mp4",
            "https://files.catbox.moe/xgmhfq.mp4",
            "https://files.catbox.moe/ah612r.mp4",
            "https://files.catbox.moe/lvbpbo.mp4",
            "https://files.catbox.moe/5m790u.mp4",
            "https://files.catbox.moe/yfn97c.mp4",
            "https://files.catbox.moe/7gk46u.mp4",
            "https://files.catbox.moe/0z2qim.mp4",
            "https://files.catbox.moe/xafukz.mp4",
            "https://files.catbox.moe/gsn7ix.mp4",
            "https://files.catbox.moe/82m194.mp4",
            "https://files.catbox.moe/zcowb1.mp4"
        ];

        const randomUrl = customVideoUrls[Math.floor(Math.random() * customVideoUrls.length)];

        await conn.sendMessage(m.chat, { 
            video: { url: randomUrl }, 
            mimetype: "video/mp4",
            caption: "*Ye lo, Love MD ki taraf se video!* 🎬" 
        }, { quoted: mek });

    } catch (e) {
        console.log("Error in xv command: ", e);
        reply("*Shera, video bhejne mein kuch gadbad ho gayi hai.*");
    }
});
