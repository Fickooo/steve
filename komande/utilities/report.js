const Discord = require('discord.js');
const db = require("quick.db");

module.exports = {
  name: "report", 
  category: "Utilities", 
  description: "report", 
  usage: "report", 
  aliases: [""], 
  run: async (client, message, args) => {
    
     if(message.deletable) message.delete();    
    
     let target = message.guild.member(message.mentions.users.first())
  
     if(!target) return message.reply("you have to mention the user you want to report.").then(m => m.delete({timeout: 5000}));
    
     if(target.hasPermission("BAN_MEMBERS") || target.user.bot) return message.reply("you can't report that user.").then(m => m.delete({timeout: 5000}));
    
     let reason = args.join(" ").slice(22)
     
     if(!reason) return message.reply("please provide a reason for that report!").then(m => m.delete({timeout: 5000}));
    
     let reportchannel = db.get(`${message.guild.id}_reportchannelid`);
    
     const channel = message.guild.channels.cache.find(reportchannelfind => reportchannelfind.id === reportchannel);
  
     if(!channel) {
       
       let errorembed = new Discord.MessageEmbed()
        .setTitle("`❌` | Error")
        .setDescription("I can't report someone without a report channel. Set up one by using `s!src #channel`")
        .setColor("#fc0303")
    return message.channel.send(errorembed)
        
       
     }
    
     let reportembed = new Discord.MessageEmbed()
      .setTitle("`✅` " + target.user.username + " was reported")
      .setColor("#eb3d34")
      .addField("In Channel", "<#" + message.channel.id + ">")
      .addField("Reported by", "<@" + message.author.id + ">")
      .addField("Reason", reason)
      .setFooter("Steve | Reports", client.user.displayAvatarURL())
      .setTimestamp()
     channel.send(reportembed)
    

  } 
 
}

    