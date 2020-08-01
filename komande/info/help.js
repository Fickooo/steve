const Discord = require("discord.js");
const { readdirSync } = require("fs");


module.exports = {
  name: "help", 
  category: "info", 
  description: "Pokazuje sve prisutne komande.", 
  usage: "oof!help", 
  aliases: ["pomoc"], 
  run: async (client, message, args) => {
        
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
    
    
    let arg = args.join(" ")
    
    if(arg == "fun") {
      
      let funHelp = new Discord.MessageEmbed()
       .setTitle("Steve | Fun")
       .setColor("RANDOM")
       .addField('`gay`, `roast`, `dab`, `meme`, `say`, `8ball`, `rps`')
       .setThumbnail('https://cdn.glitch.com/8f423271-964d-4b5d-a5d1-6d18b7847df0%2FScreenshot_684.png')
       .setFooter("Requested by " + message.author.username, message.author.displayAvatarURL())
       .setTimestamp()
       message.channel.send(funHelp)
    }
    
  }
};
