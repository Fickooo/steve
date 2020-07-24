const Discord = require('discord.js');
const db = require('quick.db');

module.exports = {
  name: "src", 
  category: "Utilities", 
  description: "setreportschannel", 
  usage: "s!src #channel", 
  aliases: ["src", "setreports"], 
  run: async (client, message, args) => {
    
    if(message.deletable) message.delete();
    
  let reportchannel = message.mentions.channels.first();
  if(!reportchannel) return message.reply("you forgot to mention the channel boi.")
      if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply("you don't have permission to do that.")
    db.set(`${message.guild.id}_reportchannelid`, reportchannel.id)
    
    let success = new Discord.MessageEmbed()
      .setTitle("`✅` Successfull")
      .setDescription("You successfully set channel " + reportchannel.name + " to be your reports channel.")
      .setColor("#b4eb34")
    message.channel.send(success)
  }
}  