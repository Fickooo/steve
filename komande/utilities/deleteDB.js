const Discord = require('discord.js');
const Guild = require('../models/guild')
const mongoose = require('mongoose');

module.exports = {
  name: "dbdelete",
  category: "Utils", 
  description: "clear", 
  usage: "clear", 
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
            .catch(err => console.error(err));

            console.log(`Server by name of ${message.guild.name} was not in our database, i added them now!`)
            return message.reply("Your server was not in our database, now we added it, please repeat the command!").then(m => m.delete({timeout: 10000}));
        }
    });
    
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("you don't have administrator permissions to do this.")
    
  let zabrisanje = args[0]

  if(zabrisanje.toLowerCase() === "muterole"){

   await settings.updateOne({
      muteRoleId: "none"
    })

   return message.reply("you successfully deleted mute role id from our data base.")
  }
  
  if(zabrisanje.toLowerCase() === "logchannel"){
    
   await settings.updateOne({
      logChannelId: "none"
    })
    return message.reply("you successfully deleted log channel id from our data base.")
  }
    
  if(zabrisanje.toLowerCase() === "suggestchannel"){
    
    await settings.updateOne({
      suggestChannelId: "none"
    })
    return message.reply("you successfully deleted suggest channel id from our data base.")
  }
    
  if(zabrisanje.toLowerCase() === "reportchannel"){
    
    await settings.updateOne({
      reportChannelId: "none"
    })
    return message.reply("you successfully deleted report channel id from our data base.")
  }
    
  if(zabrisanje.toLowerCase() === "all"){
    
    // await settings.update( {
    //   guildId: message.guild.id,
    //   logChannelId: "none",
    //   muteRoleId: "none",
    //   suggestChannelId: "none",
    //   reportChannelId: "none"
    // })

   await settings.updateOne({
      muteRoleId: "none"
    })
       await settings.updateOne({
      logChannelId: "none"
    })
        await settings.updateOne({
      suggestChannelId: "none"
    })
        await settings.updateOne({
      reportChannelId: "none"
    })
    return message.reply("you successfully deleted all server information from our data base.")
    
  }  
    
  }
}  
