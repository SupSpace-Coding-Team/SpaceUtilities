module.exports = {
    name: "whois",
    type: "interaction", 
    prototype : 'slash',
    code: `$interactionReply[;{newEmbed:{title:**Who is $username[$findMember[$interactionData[options.data[0].value]]]?**}{thumbnail:$userAvatar[$findMember[$interactionData[options.data[0].value]]]}{author:$userTag[$findMember[$interactionData[options.data[0].value]]]:$userAvatar[$findMember[$interactionData[options.data[0].value]]]}{color:#2f3136}{field:General Informations:$customEmoji[profile;869428257802575892] **Name** \`$username[$findMember[$interactionData[options.data[0].value]]]\`
$customEmoji[space;869428257802575892]$customEmoji[RightDoubleArrow;869428257802575892] Tag $userTag[$findMember[$interactionData[options.data[0].value]]]
$customEmoji[space;869428257802575892]$customEmoji[RightDoubleArrow;869428257802575892] ID $findMember[$interactionData[options.data[0].value]]
$customEmoji[creation;869428257802575892] **Creation** <t:$truncate[$divide[$creationDate[$findMember[$interactionData[options.data[0].value]];ms];1000]]:R>
$customEmoji[date;869428257802575892] **Join** <t:$truncate[$divide[$memberJoinedDate[$findMember[$interactionData[options.data[0].value]];$guildID];1000]]:R>}};;;everyone;]`
}
