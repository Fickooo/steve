const Discord = require('discord.js');
const mongoose = require('mongoose')
const Guild = require('../models/guild');

module.exports = {
  name: "setlogschannel", 
  category: "Utilities", 
  description: "serlogschannel", 
  usage: "oof!setlogschannel #channel", 
  aliases: ["slc", "setlogs"], 
  run: async (client, message, args) => {
      
   if(message.deletable) message.delete();
    
  let logchannel = message.mentions.channels.first();
  if(!logchannel) return message.reply("you forgot to mention the channel boi.")
      if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply("you don't have permission to do that.")
  
    
  let id = args.slice(1).join(" ")
 
  
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
                    reportChannelId: "none",
                    autoRoleId: "none"
            })

            newGuild.save()
           // .then(result => console.log(result))
            .catch(err => console.error(err));

            console.log(`Server by name of ${message.guild.name} was not in our database, i added them now!`)
            return message.reply("Your server was not in our database, now we added it, please repeat the command!").then(m => m.delete({timeout: 10000}));
        }
    });
  

    await settings.updateOne({
      logChannelId: logchannel.id
    })
    
    let success = new Discord.MessageEmbed()
      .setTitle("`✅` Successfull")
      .setDescription("You successfully set channel **" + logchannel.name + "** to be your log's channel.")
      .setColor("#b4eb34")
    message.channel.send(success)
  }
}  