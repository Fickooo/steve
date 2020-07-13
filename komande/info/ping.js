//eee smo tu

//e sad ovo
const Discord = require('discord.js');


module.exports = {
  name: "ping", 
  category: "ping", 
  description: "ping", 
  usage: "ping", 
  aliases: [""], 
  run: async (client, message, args) => {
    

    var ping = Date.now() - message.createdTimestamp + " ms";
		let pingembed = new Discord.MessageEmbed()
    .setColor('#2C2F33')
    .setTitle("Latency" + ` ${ping}!`)
   // .setTitle("API Latencija" + ` ${Math.round(client.ping)}ms`)
		.setFooter(message.author.username, message.author.displayAvatarURL());
		return message.channel.send(pingembed);

  }
}  
