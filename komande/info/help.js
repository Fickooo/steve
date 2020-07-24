const { MessageEmbed } = require("discord.js");
const { readdirSync } = require("fs");

module.exports = {
  name: "help", 
  category: "info", 
  description: "Pokazuje sve prisutne komande.", 
  usage: "oof!help", 
  aliases: ["pomoc"], 
  run: async (client, message, args) => {
        
    let helpEmbed = new MessageEmbed()
      .setTitle("Steve | Commands")
      .setDescription("**Prefix:** `s!`")
      .setColor("#0052CC")
      .addFields(
		  { name: 'Fun `😂`', value: '`gay`, `roast`, `dab`, `meme`, `say`, `8ball`' },
      { name: 'Moderation `💻`', value: '`ban`, `kick`, `mute`' },
		  { name: 'Info `ℹ️`', value: '`ping`, `help`, `uptime`, `avatar`', inline: true },
      { name: 'Utilities `⚙️`', value: '`clear`,`slc (SetLogsChannel)`,`smr (SetMuteRole)`, `src (SetReportChannel)`,`ssc (SetSuggestionChannel)`, `report`, `suggest`' }
      )
      .setThumbnail('https://cdn.glitch.com/8f423271-964d-4b5d-a5d1-6d18b7847df0%2FScreenshot_684.png')
      .setFooter("Requested by " + message.author.username, message.author.displayAvatarURL())

    helpEmbed.setTimestamp();

    return message.channel.send(helpEmbed).catch(console.error);
  }
};
