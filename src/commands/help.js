module.exports = {
    name: "help",
    type: "interaction", 
    prototype : 'slash',
    code: `$interactionReply[;{newEmbed:{title:**Utilities Help Panel**}{author:Server $serverName[$guildID]:$serverIcon[$guildID]}{color:#2f3136}{field:$customEmoji[alarm;869428257802575892] Basic Help:$customEmoji[space;869428257802575892] $customEmoji[space;869428257802575892] $customEmoji[RightDoubleArrow;869428257802575892] If you're unsure on how to use $username[$clientID], be sure to check out the [documentation](https://docs.spaceutilities.supspace.ga) for any information on how to use it.
$customEmoji[space;869428257802575892] $customEmoji[space;869428257802575892] $customEmoji[RightDoubleArrow;869428257802575892] To find out about the available commands, simply use \`/commands\` to view a list of available commands.
$customEmoji[space;869428257802575892] $customEmoji[space;869428257802575892] $customEmoji[RightDoubleArrow;869428257802575892] If you are runing in to errors click this link [Quick Troubleshooting](https://docs.spaceutilities.supspace.ga/faq)
}{footer:Requested By $userTag:$userAvatar[$authorID]}{timestamp:}};{actionRow:{button:Website:5:https#COLON#//spaceutilities.supspace.ga:no}{button:Documentation:5:https#COLON#//docs.spaceutilities.supspace.ga:no}};;everyone;]`
}
