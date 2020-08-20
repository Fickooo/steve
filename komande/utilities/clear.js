const { Permissions } = require('discord.js');
const Discord = require('discord.js');
const setlog = require('../model/slc')
const mongoose = require('mongoose');

module.exports = {
    name: "clear",
    description: "Clears messages",

    async run (client, message, args) {

  
        if(message.deletable) message.delete();
      
        const amount = args.join(" ");
        if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply("you don't have a permission to do that!");
  
          
    let info = await setlog.findOne({"guildid": String(message.guild.id)})
  
  const findchannel = message.guild.channels.cache.find(logchannelfind => logchannelfind.id === info.channelid) 
        
        if(!amount) return message.reply('please provide an amount of messages for me to delete')

        if(amount > 100) return message.reply(`are you trying to OOF the whole server? You can't delete more than 100 messages.`).then(m => m.delete({timeout: 5000}));

        if(amount < 1) return message.reply(`you know that you can delete more than 0 messages, right?`).then(m => m.delete({timeout: 5000}));

        await message.channel.messages.fetch({limit: amount}).then(messages => {
            message.channel.bulkDelete(messages)
        });

    if(!findchannel){
      message.reply("i can't send much detailes about this clear command without log's channel.").then(m => m.delete({timeout: 8000}));
       
      let miniembed = new Discord.MessageEmbed()
        .setTitle("`✅` Success")
        .setColor("#eb3d34")
        .setDescription("You successfully deleted " + amount + " messages.")
      return message.channel.send(miniembed)
      
    }
 
       let bigembed = new Discord.MessageEmbed()
        .setTitle("`🗨️` Deleted Messages")
        .setColor("#969C9F")
        .addField("In Channel", "<#" + message.channel.id + ">")
        .addField("By:","<@" + message.author.id + ">" )
        .addField("Amount", amount)
        .setTimestamp()
        .setFooter("Steve | Logs", client.user.displayAvatarURL());
       findchannel.send(bigembed)
      
    message.channel.send('Success!').then(m => m.delete({timeout: 5000}));

      } 
}
