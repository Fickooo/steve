const Discord = require('discord.js');
const Guild = require('../models/guild')
const mongoose = require('mongoose');


module.exports = {
  name: "clear",
  category: "Utils", 
  description: "clear", 
  usage: "clear", 
  aliases: [""], 
  run: async (client, message, args) => {
  
  //  let lchannel = await setlogs.findOne({"guildid": String(message.guild.id)})
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
    
    const messageArray = message.content.split(' ');
	  args = messageArray.slice(1);
    
    //if(message.deletable) message.delete();

    if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send('Lack of Perms!').then(m => m.delete({timeout: 5000}));
    
    let deleteAmount;

    if (isNaN(args[0]) || parseInt(args[0]) <= 0) { return message.reply('Please put a number only!').then(m => m.delete({timeout: 5000})); }

    if (parseInt(args[0]) > 100) {
        return message.reply('You can only delete 100 messages at a time!').then(m => m.delete({timeout: 5000}));
    } else {
        deleteAmount = parseInt(args[0]);
    }
    const lchannelid = settings.logChannelId
    const findchannel = message.guild.channels.cache.find(findl => findl.id === lchannelid)
    
    if(!findchannel){
    message.reply("i can't provide much detail because you didn't set the logs channel").then(m => m.delete({timeout: 5000}));
      
      message.reply(`you succesfully deleted ${deleteAmount + 1} messages`).then(m => m.delete({timeout: 5000}));
      return message.channel.bulkDelete(deleteAmount + 1, true);
          
    }
      
      message.channel.bulkDelete(deleteAmount + 1, true);
       
    let deletedEmbed = new Discord.MessageEmbed()
     .setTitle("`✅` | Success")
     .setColor("#949494")
     .addField("In Channel", "<#" + message.channel.id + ">")
     .addField("Deleted by", "<@" + message.author.id + ">")
     .addField("Amount", deleteAmount)
     .setFooter("Steve | Logs", client.user.displayAvatarURL())
    return findchannel.send(deletedEmbed)


  }
}  
