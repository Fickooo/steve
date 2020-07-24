const Discord = require('discord.js');
const db = require("quick.db");

module.exports = {
  name: "ban", 
  category: "ban", 
  description: "ban", 
  usage: "ban", 
  aliases: [""], 
  run: async (client, message, args) => {
    
    if(message.deletable) message.delete();
    
    let oofovan_ban = message.mentions.users.first()

    if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply("you can't ban users without a permission.").then(m => m.delete({timeout: 5000}));
    
    if(!oofovan_ban) return message.reply("it's not possible to ban air you know?").then(m => m.delete({timeout: 5000}));
    
    if(oofovan_ban.id == 663093851845689364) return message.reply("bruh you're trying to ban me with my own command?!").then(m => m.delete({timeout: 5000}));
    
    let reason = args.join(" ").slice(22)
    
     let logschannel = db.get(`${message.guild.id}_logchannelid`)

    const findchannel = message.guild.channels.cache.find(logchannelfind => logchannelfind.id === logschannel)
    
    if(!findchannel){
      message.reply("i can't send much detailes about this ban without log's channel.").then(m => m.delete({timeout: 5000}));
       
      let miniembed = new Discord.MessageEmbed()
        .setTitle("`✅` User is oofed")
        .setColor("#eb3d34")
        .setDescription("<@" + oofovan_ban + ">" + " is banned from " + message.guild.name)
       message.channel.send(miniembed)
      
      return message.guild.member(oofovan_ban).ban(reason);
    }
    
        let bigembed = new Discord.MessageEmbed()
        .setTitle("`✅` " + oofovan_ban.username + " is banned")
        .setColor("#eb3d34")
        .addField("In Channel", "<#" + message.channel.id + ">")
        .addField("Banned by", "<@" + message.author.id + ">")
        .addField("Reason", reason)
        .setTimestamp()
        .setDescription("<@" + oofovan_ban + ">" + " is banned from " + message.guild.name)
        .setFooter("Steve | Logs", client.user.displayAvatarURL())
       findchannel.send(bigembed)
      
      message.guild.member(oofovan_ban).ban(reason);
    
    }

  }

