const Discord = require('discord.js');
const mongoose = require('mongoose')
const Guild = require('../models/guild');

module.exports = {
  name: "kick", 
  category: "kick", 
  description: "kick", 
  usage: "kick", 
  aliases: [""], 
  run: async (client, message, args) => {

    //let settings = await setlogch.findOne({"guildid": String(message.guild.id)})
     
const settings = await Guild.findOne({
        guildId: message.guild.id
    }, (err, guild) => {
        if (err) console.error(err)
        if (!guild) {
            const newGuild = new Guild({
                    _id: mongoose.Types.ObjectId(),
                    guildId: message.guild.id,
                    logChannelId: "none",
                    muteRoleId: "none",
                    suggestChannelId: "none",
                    reportChannelId: "none"
            })

            newGuild.save()
           // .then(result => console.log(result))
            .catch(err => console.error(err));

            console.log(`Server by name of ${message.guild.name} was not in our database, i added them now!`)
            return message.reply("Your server was not in our database, now we added it, please repeat the command!").then(m => m.delete({timeout: 10000}));
        }
    });
    
    
    if(message.deletable) message.delete();
    
    let oofovan_kick = message.mentions.users.first()

    if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply("you can't kick users without a permission.").then(m => m.delete({timeout: 5000}));
    
    if(!oofovan_kick) return message.reply("it's not possible to kick air you know?").then(m => m.delete({timeout: 5000}));
    
    if(oofovan_kick.id == 663093851845689364) return message.reply("bruh you're trying to kick me with my own command?!").then(m => m.delete({timeout: 5000}));
    
    let reason = args.join(" ").slice(22)
    
    

    const findchannel = message.guild.channels.cache.find(logchannelfind => logchannelfind.id === settings.logChannelId)
    
    if(!findchannel){
      message.reply("i can't send much detailes about this kick without log's channel.").then(m => m.delete({timeout: 5000}));
       
      let miniembed = new Discord.MessageEmbed()
        .setTitle("`✅` User is kicked")
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
        .setFooter("Steve | Logs", client.user.displayAvatarURL())
       findchannel.send(bigembed)
      
      message.guild.member(oofovan_kick).kick(reason);

    }

  }

