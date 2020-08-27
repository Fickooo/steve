const Discord = require('discord.js');
const Guild = require('../models/guild')
const mongoose = require('mongoose');

module.exports = {
  name: "report", 
  category: "Utilities", 
  description: "report", 
  usage: "report", 
  aliases: [""], 
  run: async (client, message, args) => {
    
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
    
   //  let settings = await setreport.findOne({"_id": String(message.guild.id)})
   //  message.reply(parseInt(settings.channelid))
    
     if(message.deletable) message.delete();    
    
     let target = message.guild.member(message.mentions.users.first())
  
     if(!target) return message.reply("you have to mention the user you want to report.").then(m => m.delete({timeout: 5000}));
    
     if(target.id == message.author.id) return message.reply("you can't report yourself!").then(m => m.delete({timeout: 5000}));
    
     let reason = args.join(" ").slice(22)
     
     if(!reason) return message.reply("please provide a reason for that report!").then(m => m.delete({timeout: 5000}));
     
     const findchannel = message.guild.channels.cache.find(logchannelfind => logchannelfind.id === settings.reportChannelId)
  
     if(!findchannel) {
       
       let errorembed = new Discord.MessageEmbed()
        .setTitle("`❌` | Error")
        .setDescription("I can't report someone without a report channel. Set up one by using `s!src #channel`")
        .setColor("#fc0303")
    return message.channel.send(errorembed)
        
       
     }
    
     let reportembed = new Discord.MessageEmbed()
      .setTitle("`❗️` " + target.user.username + " was reported")
      .setColor("#eb3d34")
      .addField("`🔍` Reported:", "<@" + target.id + ">" )
      .addField("`📍` In Channel:", "<#" + message.channel.id + ">")
      .addField("`❓` Reported by:", "<@" + message.author.id + ">")
      .addField("`📝` Reason", reason)
      .setFooter("Steve | Reports", client.user.displayAvatarURL())
      .setTimestamp()
     findchannel.send(reportembed)
    

  } 
 
}

    