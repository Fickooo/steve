const Discord = require("discord.js")
const moment = require('moment')

module.exports = {
  name: "user-info",
  category: "Info",
  description: "info",
  usage: "s!user-info",
  aliases: [""],
  run: async (client, message, args) => {

  let target = message.guild.member(message.mentions.users.first());
  try{
  //   let highestRolecol = message.guild.member(message.mentions.users.first()).roles.highest;
  let highestRole = message.guild.member(message.mentions.users.first()).roles.highest.name;
    let profilna = target.user.displayAvatarURL();
      const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setThumbnail(profilna)
    .addField(`${target.user.tag}`, `${target}`, true)
    .addField("`📋` ID:", `${target.id}`, true)
    .addField("`😃` Nickname:", `${target.nickname !== null ? `${target.nickname}` : 'None'}`, true)
    .addField("`📌` Status:", `${target.presence.status}`, true)
    .addField("`📡` In Server", message.guild.name, true)
    .addField("`🎮` Game:", `${target.presence.game ? target.presence.game.name : 'None'}`, true)
    .addField("`🤖` Bot:", `${target.user.bot}`, true)
    .addField("`📲` Joined The Server On:", `${moment.utc(target.joinedAt).format("dddd, MMMM Do YYYY")}`, true)
    .addField("`⌚️` Account Created On:", `${moment.utc(target.user.createdAt).format("dddd, MMMM Do YYYY")}`, true)
    .addField("`🔰` Highest role:", highestRole)
    .setFooter(client.user.username, client.user.displayAvatarURL())
    .setAuthor(message.author.username, message.author.displayAvatarURL())
    .setTimestamp()
return message.channel.send({embed});
  } catch(err){
         let highestRole = message.member.roles.highest.name;
    
       let profilna = message.author.displayAvatarURL();
    const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setThumbnail(profilna)
    .addField(`${message.author.tag}`, `${message.member}`, true)
    .addField("`📋` ID:", `${message.member.id}`, true)
    .addField("`😃` Nickname:", `${message.member.nickname !== null ? `${message.member.nickname}` : 'None'}`, true)
    .addField("`📌` Status:", `${message.member.presence.status}`, true)
    .addField("`📡` In Server", message.guild.name, true)
    .addField("`🎮` Game:", `${message.member.presence.game ? message.member.presence.game.name : 'None'}`, true)
    .addField("`🤖` Bot:", `${message.author.bot}`, true)
    .addField("`📲` Joined The Server On:", `${moment.utc(message.member.joinedAt).format("dddd, MMMM Do YYYY")}`, true)
    .addField("`⌚️` Account Created On:", `${moment.utc(message.author.createdAt).format("dddd, MMMM Do YYYY")}`, true)
    .addField("`🔰` Highest role:", highestRole)
    .setFooter(client.user.username, client.user.displayAvatarURL())
    .setAuthor(message.author.username, message.author.displayAvatarURL())
    .setTimestamp()
return message.channel.send({embed});
  }


    }
}