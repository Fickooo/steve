const Discord = require("discord.js");
const { readdirSync } = require("fs");


module.exports = {
  name: "help", 
  category: "info", 
  description: "Pokazuje sve prisutne komande.", 
  usage: "oof!help", 
  aliases: ["pomoc"], 
  run: async (client, message, args) => {
     
    
    let arg = args.join(" ")
    
    if(arg == "fun") {
      
      let funHelp = new Discord.MessageEmbed()
       .setTitle("Steve | Fun `😂`")
       .setColor("RANDOM")
       .setDescription('`gay`, `roast`, `dab`, `meme`, `say`, `8ball`, `rps`')
       .setThumbnail('https://cdn.glitch.com/8f423271-964d-4b5d-a5d1-6d18b7847df0%2FScreenshot_684.png')
       .setFooter("Requested by " + message.author.username, message.author.displayAvatarURL())
       .setTimestamp()
       return message.channel.send(funHelp)
    } else {
      return;
    }
    
    if(arg == "mod") {
      
      let funHelp = new Discord.MessageEmbed()
       .setTitle("Steve | Moderation `💻`")
       .setColor("#000066")
       .setDescription('`ban`, `kick`, `mute`')
       .setThumbnail('https://cdn.glitch.com/8f423271-964d-4b5d-a5d1-6d18b7847df0%2FScreenshot_684.png')
       .setFooter("Requested by " + message.author.username, message.author.displayAvatarURL())
       .setTimestamp()
       return message.channel.send(funHelp)
    } else {
      return;
    }
    
    if(arg == "info") {
      
      let funHelp = new Discord.MessageEmbed()
       .setTitle("Steve | Info `ℹ️`")
       .setColor("#008000")
       .setDescription('`ping`, `help`, `uptime`, `avatar`, `server-info`, `invite`, `user-info`')
       .setThumbnail('https://cdn.glitch.com/8f423271-964d-4b5d-a5d1-6d18b7847df0%2FScreenshot_684.png')
       .setFooter("Requested by " + message.author.username, message.author.displayAvatarURL())
       .setTimestamp()
       return message.channel.send(funHelp)
    } else {
      return;
    }
    
    if(arg == "util") {
      
      let funHelp = new Discord.MessageEmbed()
       .setTitle("Steve | Utilities `⚙️`")
       .setColor("#666699")
       .setDescription('`clear`,`slc (SetLogsChannel)`,`smr (SetMuteRole)`, `src (SetReportChannel)`,`ssc (SetSuggestionChannel)`, `report`, `suggest`')
       .setThumbnail('https://cdn.glitch.com/8f423271-964d-4b5d-a5d1-6d18b7847df0%2FScreenshot_684.png')
       .setFooter("Requested by " + message.author.username, message.author.displayAvatarURL())
       .setTimestamp()
       return message.channel.send(funHelp)
    } else {
      return;
    }
    
    
    let helpEmbed = new Discord.MessageEmbed()
      .setTitle("Steve | Commands")
      .setDescription("**Prefix:** `s!`")
      .setColor("#0052CC")
      .addFields(
		  { name: 'Fun `😂`', value: '`s!help fun`' },
      { name: 'Moderation `💻`', value: '`s!help mod`' },
		  { name: 'Info `ℹ️`', value: '`s!help info`', inline: true },
      { name: 'Utilities `⚙️`', value: '`s!help util`' }
      )
      .setThumbnail('https://cdn.glitch.com/8f423271-964d-4b5d-a5d1-6d18b7847df0%2FScreenshot_684.png')
      .setFooter("Requested by " + message.author.username, message.author.displayAvatarURL())

    helpEmbed.setTimestamp();

    message.channel.send(helpEmbed)
    
    
    
    
  }
};
