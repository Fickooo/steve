const Discord = require('discord.js');
const mongoose = require('mongoose')
const setlogch = require('../model/slc');

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
 
if(id === "update"){
  
  let slclog = await setlogch.findOne({"guildid": String(message.guild.id)})
  
  let logchannelupdate = message.mentions.channels.first();
  
  if(!logchannelupdate){
                let unsuccess = new Discord.MessageEmbed()
      .setTitle("`⛔` Error")
      .setDescription("**You forgot to mention the channel which you want to be your new logs channel.**")
      .setColor("#ff0000")
    return message.reply(unsuccess)
  }
  
  if(slclog){
    
    let slcupdate = await setlogch.findOneAndUpdate({"guildid": String(message.guild.id)}, {
      channelid: String(logchannelupdate.id) 
    })
    
        let success = new Discord.MessageEmbed()
      .setTitle("`✅` Successfull")
      .setDescription("You successfully updated logs channel to **" + logchannelupdate.name + "**")
      .setColor("#b4eb34")
        
    return message.reply(success)
    
  } else if(!slclog){
    
       let unsuccess = new Discord.MessageEmbed()
      .setTitle("`⛔` Error")
      .setDescription("**I didn't found anything to update.**")
      .setColor("#ff0000")
            
    return message.reply(unsuccess)
  }
  
}  



        let slc = new setlogch({
        guildid: String(message.guild.id),
        channelid: String(logchannel.id)
    });
    
    slc.save()
    
    let success = new Discord.MessageEmbed()
      .setTitle("`✅` Successfull")
      .setDescription("You successfully set channel **" + logchannel.name + "** to be your log's channel.")
      .setColor("#b4eb34")
    message.channel.send(success)
  }
}  
//ban,kick,mute,warn, ceo utils,