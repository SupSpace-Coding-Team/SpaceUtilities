module.exports = {
    name: "ping",
    type: "interaction", 
    prototype : 'slash',
    code: `$interactionReply[;{newEmbed:{title:**Utilities Information**}{author:$guildName[$guildID]:$guildIcon[$guildID]}{color:#2f3136}{field:$customEmoji[876438733122;869428257802575892] Shard \`17\`: $customEmoji[space;869428257802575892]$customEmoji[green;869428257802575892] **Latency** \`$ping ms\`
$customEmoji[space;869428257802575892]$customEmoji[blue;869428257802575892] **Uptime** \`$uptime\` 
$customEmoji[space;869428257802575892]$customEmoji[red;869428257802575892] **Resources**
$customEmoji[space;869428257802575892]$customEmoji[space;869428257802575892] $customEmoji[memory;869428257802575892] RAM \`$round[$ram] MB\`
 $customEmoji[space;869428257802575892]$customEmoji[space;869428257802575892] $customEmoji[up;869428257802575892] CPU \`$cpu[os]%\`}{field:$customEmoji[stats;869428257802575892] **Size**:$customEmoji[space;869428257802575892]$customEmoji[alarm;869428257802575892] Servers \`$guildCount\`
$customEmoji[space;869428257802575892]$customEmoji[members;869428257802575892] Members \`$allMembersCount\`}};;;everyone;]`
}
