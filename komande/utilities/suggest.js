const Discord = require('discord.js');
const db = require("quick.db");
const setsuggest = require('../model/ssc')
const mongoose = require('mongoose');

module.exports = {
  name: "suggest", 
  category: "Utilities", 
  description: "suggest", 
  usage: "s!suggest (suggestion)", 
  aliases: ["sugg"], 
  run: async (client, message, args) => {
   
    let info = await setsuggest.findOne({"_id": String(message.guild.id)})
    
    if(message.deletable) message.delete();
    
    let suggestion = args.join(" ")
    
    if(!suggestion) return message.reply("you have to suggest something.").then(m => m.delete({timeout: 5000}));
    
    //let suggestchannel = db.get(`${message.guild.id}_suggestionchannelid`);
    
    const findchannel = message.guild.channels.cache.find(logchannelfind => logchannelfind.id === info.channelid)
    
    if(!findchannel) {
      
      let errorembed = new Discord.MessageEmbed()
       .setTitle("`❌` | Error")
       .setDescription("Oops! Looks like administrators forgot to set up the suggestion channel.")
       .setFooter("You can set the suggestion channel by using `s!ssc #channel`")
       .setColor("#fc0303")
      return message.channel.send(errorembed)
    }
    
    let suggestionembed = new Discord.MessageEmbed()
     .setTitle("`💡` " + message.author.username + " suggested something!")
     .setColor("#009900")
     .addField("Suggestion", suggestion)
     .setAuthor(message.author.username, message.author.displayAvatarURL())
     .setFooter("Steve | Suggestions", client.user.displayAvatarURL())
     .setTimestamp()
     findchannel.send(suggestionembed).then(embedMessage => {
    embedMessage.react("✅");
    embedMessage.react("❌");
       
    message.reply('Success! Your suggestion has been sent!').then(m => m.delete({timeout: 5000}));
});
    
  }
  
}