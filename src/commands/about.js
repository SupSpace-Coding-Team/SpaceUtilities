module.exports = [{
    name: "about",
    type: "interaction", 
    prototype : 'slash',
    code: `$interactionReply[;{newEmbed:{author:About $username[$clientID]:$userAvatar[$clientID]}{color:#2f3136}{description:$customEmoji[RightDoubleArrow;869428257802575892] $username[$clientID] is a powerful tool for server security, utilities, and moderation. Designed for exclusive use on our servers, $username[$clientID] offers features such as anti-spam protection, advanced logging, and customizable welcome messages. Maintaining a secure and well-organized community has never been easier. The code for this bot is open source and available on Github for those interested in its inner workings.}{footer:Page 1/2}};{actionRow:{button:⬅️:secondary:left:yes}{button:➡️:secondary:right_$authorID}{button:❌:danger:delete_$authorID}};;everyone;]`
}, { 
  type: "interaction",
  prototype: "button",
  code: `$interactionUpdate[;{newEmbed:{author: Hidden Stats:$userAvatar[$clientID]}{color:#2f3136}{description:**Version** \`$packageVersion\`
**aoi.js/dashboard** \`0.0.3\` 
**discord.js** \`14\`}{footer:Page 2/2}};{actionRow:{button:⬅️:secondary:left_$authorID}{button:➡️:secondary:right_$authorID:yes}{button:❌:danger:delete_$authorID}};;everyone;]
$onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];You are not the author. {interaction}]
$onlyif[$advancedTextSplit[$interactionData[customId];_;1]==right;]`
}, {
 type: "interaction",
  prototype: "button",
  code: `$interactionUpdate[;{newEmbed:{author:About $username[$clientID]:$userAvatar[$clientID]}{color:#2f3136}{description:$customEmoji[RightDoubleArrow;869428257802575892] $username[$clientID] is a powerful tool for server security, utilities, and moderation. Designed for exclusive use on our servers, $username[$clientID] offers features such as anti-spam protection, advanced logging, and customizable welcome messages. Maintaining a secure and well-organized community has never been easier. The code for this bot is open source and available on Github for those interested in its inner workings.}{footer:Page 1/2}};{actionRow:{button:⬅️:secondary:left:yes}{button:➡️:secondary:right_$authorID}{button:❌:danger:delete_$authorID}};;everyone;]
$onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];You are not the author. {interaction}]
$onlyif[$advancedTextSplit[$interactionData[customId];_;1]==left;]`
}, {
type: "interaction",
  prototype: "button",
  code: `$interactionUdate[deleting in \`5 seconds\`]
$wait[5s]
$interactionDelete
$onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];You are not the author. {interaction}]
$onlyif[$advancedTextSplit[$interactionData[customId];_;1]==delete;]`
}]
