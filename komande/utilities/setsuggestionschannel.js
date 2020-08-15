const Discord = require('discord.js');
const setsuggestch = require("../model/ssc")

module.exports = {
  name: "ssc", 
  category: "Utilities", 
  description: "setsuggestionschannel", 
  usage: "s!ssc #channel", 
  aliases: ["ssc", "setsuggestions"], 
  run: async (client, message, args) => {
    
   if(message.deletable) message.delete();
    
  let suggestchannel = message.mentions.channels.first();
  if(!suggestchannel) return message.reply("you forgot to mention the channel boi.")
      if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply("you don't have permission to do that.")
  
    
  let id = args.slice(1).join(" ")
 
if(id === "update"){
  
  let sscsuggest = await setsuggestch.findOne({"_id": String(message.guild.id)})
  
  let suggestchannelupdate = message.mentions.channels.first();
  
  if(!suggestchannelupdate){
                let unsuccess = new Discord.MessageEmbed()
      .setTitle("`⛔` Error")
      .setDescription("**You forgot to mention the channel which you want to be your new suggest channel.**")
      .setColor("#ff0000")
    return message.reply(unsuccess)
  }
  
  if(sscsuggest){
    
    let sscupdate = await setsuggestch.findOneAndUpdate({"_id": String(message.guild.id)}, {
      channelid: String(suggestchannelupdate.id) 
    })
    
        let success = new Discord.MessageEmbed()
      .setTitle("`✅` Successfull")
      .setDescription("You successfully updated suggest channel to **" + suggestchannelupdate.name + "**")
      .setColor("#b4eb34")
        
    return message.reply(success)
    
  } else if(!sscsuggest){
    
       let unsuccess = new Discord.MessageEmbed()
      .setTitle("`⛔` Error")
      .setDescription("**I didn't found anything to update.**")
      .setColor("#ff0000")
            
    return message.reply(unsuccess)
  }
  
}  



        let ssc = new setsuggestch({
        _id: String(message.guild.id),
        channelid: String(suggestchannel.id)
    });
    
    ssc.save()
    
    let success = new Discord.MessageEmbed()
      .setTitle("`✅` Successfull")
      .setDescription("You successfully set channel **" + suggestchannel.name + "** to be your suggest's channel.")
      .setColor("#b4eb34")
    message.channel.send(success)
  }
}  