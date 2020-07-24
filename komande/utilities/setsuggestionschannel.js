const Discord = require('discord.js');
const db = require('quick.db');

module.exports = {
  name: "ssc", 
  category: "Utilities", 
  description: "setsuggestionschannel", 
  usage: "s!ssc #channel", 
  aliases: ["ssc", "setsuggestions"], 
  run: async (client, message, args) => {
    
    if(message.deletable) message.delete();
    
  let suggestionchannel = message.mentions.channels.first();
  if(!suggestionchannel) return message.reply("you forgot to mention the channel boi.")
      if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply("you don't have permission to do that.")
    db.set(`${message.guild.id}_suggestionchannelid`, suggestionchannel.id)
    
    let success = new Discord.MessageEmbed()
      .setTitle("`✅` Successfull")
      .setDescription("You successfully set channel " + suggestionchannel.name + " to be your suggestions channel.")
      .setColor("#b4eb34")
    message.channel.send(success)
  }
} 