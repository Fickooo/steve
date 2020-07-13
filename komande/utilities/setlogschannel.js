const Discord = require('discord.js');
const db = require('quick.db');

module.exports = {
  name: "setlogschannel", 
  category: "Utilities", 
  description: "serlogschannel", 
  usage: "oof!setlogschannel #channel", 
  aliases: ["slc", "setlogs"], 
  run: async (client, message, args) => {
    
  let logchannel = message.mentions.channels.first();
  if(!logchannel) return message.reply("you forgot to mention the channel boi.")
      if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply("you don't have permission to do that.").then(m => m.delete({timeout: 5000}));
    db.set(`${message.guild.id}_logchannelid`, logchannel.id)
    
    let success = new Discord.MessageEmbed()
      .setTitle("`✅` Successfull")
      .setDescription("You successfully set channel " + logchannel.name + " to be your log's channel.")
      .setColor("#b4eb34")
    message.channel.send(success)
  }
}  
