const Discord = require('discord.js');
const mongoose = require('mongoose')
const Guild = require('../models/guild');
const ms = require("ms");

module.exports = {
  name: "mute", 
  category: "Staff", 
  description: "mute", 
  usage: "mute", 
  aliases: [""], 
  run: async (client, message, args) => {

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
    
  if(message.deletable) message.delete();  
    

  if(!message.member.hasPermission("MANAGE_MESSAGES")){
        const pomoc = new Discord.MessageEmbed()
      .setTitle("`❌` | Error")
      .setDescription("You don't have a permission to mute someone.")
      .setColor("#fc0303")
    return message.channel.send(pomoc)
  } 

  if(!args[0]){
    const pomoc = new Discord.MessageEmbed()
      .setTitle("`❌` | Error")
      .setColor("#fc0303")
      .setDescription("You must tag the user that you want to mute!")
    return message.channel.send(pomoc)
  }
  let tomute = message.guild.member(message.mentions.users.first());
  let reason = args.slice(2).join(" ");
  if(!reason){
        const pomoc = new Discord.MessageEmbed()
      .setTitle("`❌` | Error")
      .setDescription("You have to provide a reason for that mute!")
      .setColor("#fc0303")
   return message.channel.send(pomoc)
  }

 let muterole = message.guild.roles.cache.find(x => x.id === settings.muteRoleId)
 

  if(!muterole){
          const error = new Discord.MessageEmbed()
      .setTitle("`❌` | Error")
            .setColor("#fc0303")
      .setDescription("I didn't found mute role, try adding it with command\n`" + " " + "s!smr @role (setmuterole)`")
   return message.channel.send(error)
  }

  let mutetime = args[1];
// oof!mute filip 2s razlog
if(!mutetime){
      const pomoc = new Discord.MessageEmbed()
      .setTitle("`❌` | Error")
      .setDescription("Usage **" + " " + "mute @user 1s/m/h/d reason**")
      .setColor("#fc0303")
  return message.channel.send(pomoc)
}
  message.delete().catch(O_o=>{});
  try{
    const tomutesend = new Discord.MessageEmbed()
      .setTitle("`⚪` | Mute")
      .setColor("#ffb300")
      .setDescription(`Sorry, you are muted in ${message.guild.name} for **${mutetime}**, reason was **${reason}**`)
     await tomute.send(tomutesend);
  }catch(e){
    console.log(e)
          const pomoc = new Discord.MessageEmbed()
      .setTitle("`❌` | Error")
      .setDescription("Unknown error, try again.")
            .setColor("#c2255c")
    message.channel.send(pomoc)
  }
  
    //let linfo = await logchannelch.findOne({"guildid": String(message.guild.id)})
     const incidentiChannel = message.guild.channels.cache.find(logchannelfind => logchannelfind.id === settings.logChannelId)
    
        let drickEmbed = new Discord.MessageEmbed()
    .setTitle("⚠️ | Channel")
    .setDescription("I can't find the logs channel.")
    .setColor("#fc9803")
  //  if(!linfo.channelid) message.channel.send(drickEmbed);
     if(!incidentiChannel) message.channel.send(drickEmbed);

  let muteembed = new Discord.MessageEmbed()
  .setTitle("`🔇` | Mute")
  .addField("Muted", tomute, true)
  .addField("Channel", message.channel, true)
  .addField("Time", mutetime, true)
  .addField("Reason", reason, true)
  .setTimestamp()
  .setFooter("Steve | Logs", client.user.displayAvatarURL())
  .setColor("#fc0303")
  incidentiChannel.send(muteembed);

  await(tomute.roles.add(muterole));
    let uspesnoun = new Discord.MessageEmbed()
    .setTitle("✔️ | Successful")
    .setDescription(`${tomute.user.username} was successfully muted for ${mutetime}!`)
    .setColor("#ae3ec9")
  message.channel.send(uspesnoun).then(m => m.delete({timeout: 5000}));
  setTimeout(function(){
    tomute.roles.remove(muterole);

              const tomutesendd = new Discord.MessageEmbed()
      .setTitle("`⚪` | UN-Mute")
          .setColor("#ffb300")
      .setDescription(`Your mute time expired in server ${message.guild.name}.`)
    tomute.send(tomutesendd);
  }, ms(mutetime));


  }
}  
