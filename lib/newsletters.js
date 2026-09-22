// lib/newsletters.js — CommonJS version

// Newsletter JIDs — auto-reaction channels (messages get reacted with random emoji)
const newsletterJids = [
    "120363416743041101@newsletter"
];

// Follow channel JIDs — bots auto-follow these channels on connect
const FollowChannelJids = [
    "120363427834223408@newsletter"
];

module.exports = {
    newsletterJids,
    FollowChannelJids
};
