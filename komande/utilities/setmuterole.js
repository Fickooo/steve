const Discord = require('discord.js');
const db = require("quick.db");
const setmutech = require("../model/smt")
module.exports = {
  name: "setmuterole", 
  category: "Utilities", 
  description: "mute", 
  usage: "oof!smr or oof!muterole", 
  aliases: ["smr", "muterole"], 
  run: async (client, message, args) => {
    
    if(message.deletable) message.delete();
    
  let logchannel = message.mentions.roles.first();
  if(!logchannel) return message.reply("you forgot to mention the role boi.")
      if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply("you don't have permission to do that.")
  
    
  let id = args.slice(1).join(" ")
 
if(id === "update"){
  
  let smrlog = await setmutech.findOne({"_id": String(message.guild.id)})
  
  let logchannelupdate = message.mentions.roles.first();
  
  if(!logchannelupdate){
                let unsuccess = new Discord.MessageEmbed()
      .setTitle("`⛔` Error")
      .setDescription("**You forgot to mention the role which you want to be your new mute role.**")
      .setColor("#ff0000")
    return message.reply(unsuccess)
  }
  
  if(smrlog){
    
    let smrupdate = await setmutech.findOneAndUpdate({"_id": String(message.guild.id)}, {
      roleid: String(logchannelupdate.id) 
    })
    
        let success = new Discord.MessageEmbed()
      .setTitle("`✅` Successfull")
      .setDescription("You successfully updated mute role to **" + logchannelupdate.name + "**")
      .setColor("#b4eb34")
        
    return message.reply(success)
    
  } else if(!smrlog){
    
       let unsuccess = new Discord.MessageEmbed()
      .setTitle("`⛔` Error")
      .setDescription("**I didn't find anything to update.**")
      .setColor("#ff0000")
            
    return message.reply(unsuccess)
  }
  
}  

        let smr = new setmutech({
        _id: String(message.guild.id),
        roleid: String(logchannel.id)
    });
    
    smr.save()
    
    let success = new Discord.MessageEmbed()
      .setTitle("`✅` Successfull")
      .setDescription("You successfully set role **" + logchannel.name + "** to be your mute role.")
      .setColor("#b4eb34")
    message.channel.send(success)
  }
}  
