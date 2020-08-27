const Discord = require('discord.js');
const mongoose = require("mongoose");
const Guild = require("../models/guild")
module.exports = {
  name: "setmuterole", 
  category: "Utilities", 
  description: "mute", 
  usage: "oof!smr or oof!muterole", 
  aliases: ["smr", "muterole"], 
  run: async (client, message, args) => {
    
    if(message.deletable) message.delete();
    
  let muterole = message.mentions.roles.first();
  if(!muterole) return message.reply("you forgot to mention the role boi.")
      if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply("you don't have permission to do that.")
  
    
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
                    reportChannelId: "none"
            })

            newGuild.save()
           // .then(result => console.log(result))
            .catch(err => console.error(err));

            console.log(`Server by name of ${message.guild.name} was not in our database, i added them now!`)
            return message.reply("Your server was not in our database, now we added it, please repeat the command!").then(m => m.delete({timeout: 6000}));
        }
    });
    
   await settings.updateOne({
      muteRoleId: muterole.id
    })
    
    let success = new Discord.MessageEmbed()
      .setTitle("`✅` Successfull")
      .setDescription("You successfully set role **" + muterole.name + "** to be your mute role.\n" + muterole.id )
      .setColor("#b4eb34")
    message.channel.send(success)
  }
}  
