const Discord = require('discord.js');
const db = require("quick.db");

module.exports = {
  name: "kick", 
  category: "kick", 
  description: "kick", 
  usage: "kick", 
  aliases: [""], 
  run: async (client, message, args) => {
    
    let oofovan_kick = message.mentions.users.first()

    if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply("you can't kick users without a permission.").then(m => m.delete({timeout: 5000}));
    
    if(!oofovan_kick) return message.reply("it's not possible to kick air you know?").then(m => m.delete({timeout: 5000}));
    
    if(oofovan_kick.id == 663093851845689364) return message.reply("bruh you're trying to kick me with my own command?!").then(m => m.delete({timeout: 5000}));
    
    let reason = args.join(" ").slice(22)
    
     let logschannel = db.get(`${message.guild.id}_logchannelid`)

    const findchannel = message.guild.channels.cache.find(logchannelfind => logchannelfind.id === logschannel)
    
    if(!findchannel){
      message.reply("i can't send much detailes about this kick without log's channel.").then(m => m.delete({timeout: 5000}));
       
      let miniembed = new Discord.MessageEmbed()
        .setTitle("`✅` User is oofed")
        .setColor("#eb3d34")
        .setDescription("<@" + oofovan_kick + ">" + " was kicked from " + message.guild.name)
       message.channel.send(miniembed)
      
      return message.guild.member(oofovan_kick).kick(reason);
    }
    
        let bigembed = new Discord.MessageEmbed()
        .setTitle("`✅` " + oofovan_kick.username + " was kicked")
        .setColor("#eb3d34")
        .addField("In Channel", "<#" + message.channel.id + ">")
        .addField("kicked by", "<@" + message.author.id + ">")
        .addField("Reason", reason)
        .setTimestamp()
        .setDescription("<@" + oofovan_kick + ">" + " is kicked from " + message.guild.name)
       findchannel.send(bigembed)
      
      message.guild.member(oofovan_kick).kick(reason);
    
    }

  }

