const Discord = require('discord.js');
const Guild = require('../models/guild')
const mongoose = require('mongoose');

module.exports = {
  name: "suggest", 
  category: "Utilities", 
  description: "suggest", 
  usage: "s!suggest (suggestion)", 
  aliases: ["sugg"], 
  run: async (client, message, args) => {
   
//    let info = await setsuggest.findOne({"_id": String(message.guild.id)})
    
    if(message.deletable) message.delete();
    
    let suggestion = args.join(" ")
    
    if(!suggestion) return message.reply("you have to suggest something.").then(m => m.delete({timeout: 5000}));
    
    //let suggestchannel = db.get(`${message.guild.id}_suggestionchannelid`);
   
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
            return message.reply("Your server was not in our database, now we added it, please repeat the command!").then(m => m.delete({timeout: 6000}));
        }
    });
    
    const findchannel = message.guild.channels.cache.find(logchannelfind => logchannelfind.id === settings.suggestChannelId)
    
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