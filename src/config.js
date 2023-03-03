const fs = require('fs');
const path = require('path');
require('dotenv').config({
    path: path.resolve(__dirname, '../.env'),
});

module.exports = {
    AoiClient: {
        token: process.env.TOKEN, //Discord Bot Token
        prefix: process.env.PREFIX, // Bot Prefix
        intents: ["MessageContent", "Guilds", "GuildMessages", "GuildPresences", "GuildMembers", "GuildMessageReactions","GuildEmojisAndStickers","GuildBans","GuildMessageTyping","GuildWebhooks"],
        events: ["onMessage", "onInteractionCreate","onMessageDelete","onMessageUpdate","onMessageDeleteBulk","onGuildJoin","onGuildLeave","onGuildUpdate","onGuildUnavailable","onRoleCreate","onRoleUpdate","onRoleDelete","onChannelCreate","onChannelUpdate","onChannelDelete","onChannelPinsUpdate","onThreadCreate","onThreadUpdate","onThreadDelete","onThreadListSync","onThreadMemberUpdate","onJoin","onLeave","onMemberUpdate","onMemberAvailable","onMembersChunk","onEmojiCreate","onEmojiDelete","onEmojiUpdate","onStickerCreate","onStickerDelete","onStickerUpdate","onBanAdd","onBanRemove","onReactionAdd","onReactionRemove","onReactionRemoveAll","onReactionRemoveEmoji","onPresenceUpdate","onTypingStart","onApplicationCmdPermsUpdate","onUserUpdate","onVariableCreate","onVariableDelete","onVariableUpdate","onFunctionError","onWebhookUpdate"],
        respondOnEdit: {
            commands: true,
        },
    },
};
