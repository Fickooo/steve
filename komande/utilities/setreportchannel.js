const Discord = require('discord.js');
const db = require('quick.db');
const setreportch = require("../model/src")
module.exports = {
  name: "src", 
  category: "Utilities", 
  description: "setreportschannel", 
  usage: "s!src #channel", 
  aliases: ["src", "setreports"], 
  run: async (client, message, args) => {
    
   if(message.deletable) message.delete();
    
  let reportchannel = message.mentions.channels.first();
  if(!reportchannel) return message.reply("you forgot to mention the channel boi.")
      if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply("you don't have permission to do that.")
  
    
  let id = args.slice(1).join(" ")
 
if(id === "update"){
  
  let srcreport = await setreportch.findOne({"_id": String(message.guild.id)})
  
  let reportchannelupdate = message.mentions.channels.first();
  
  if(!reportchannelupdate){
                let unsuccess = new Discord.MessageEmbed()
      .setTitle("`⛔` Error")
      .setDescription("**You forgot to mention the channel which you want to be your new report channel.**")
      .setColor("#ff0000")
    return message.reply(unsuccess)
  }
  
  if(srcreport){
    
    let srcupdate = await setreportch.findOneAndUpdate({"_id": String(message.guild.id)}, {
      channelid: String(reportchannelupdate.id) 
    })
    
        let success = new Discord.MessageEmbed()
      .setTitle("`✅` Successfull")
      .setDescription("You successfully updated report channel to **" + reportchannelupdate.name + "**")
      .setColor("#b4eb34")
        
    return message.reply(success)
    
  } else if(!srcreport){
    
       let unsuccess = new Discord.MessageEmbed()
      .setTitle("`⛔` Error")
      .setDescription("**I didn't found anything to update.**")
      .setColor("#ff0000")
            
    return message.reply(unsuccess)
  }
  
}  



        let src = new setreportch({
        _id: String(message.guild.id),
        channelid: String(reportchannel.id)
    });
    
    src.save()
    
    let success = new Discord.MessageEmbed()
      .setTitle("`✅` Successfull")
      .setDescription("You successfully set channel **" + reportchannel.name + "** to be your report's channel.")
      .setColor("#b4eb34")
    message.channel.send(success)
  }
}  