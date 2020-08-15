const Discord = require('discord.js');

module.exports = {
  name: "avatar",
  category: "Fun",
  description: "",
  usage: "",
  aliases: [""],
  run: async (client, message, args) => {

      let korisnik = message.mentions.users.first() || message.author; 
  
  if(!korisnik) {
    message.reply(`${message.author}, OOF`);
  };
  let profilna = korisnik.displayAvatarURL({dynamic: true});

  let profilnaembed = new Discord.MessageEmbed()
    .setTitle(korisnik.username + "'s Avatar")
    .setFooter("Requested by " + message.author.username, message.author.displayAvatarURL())
    .setColor("RANDOM")
    .setImage(profilna); 
  message.channel.send(profilnaembed) 
    
//smo tu, kad zavrsis embed stavi ; na zadnjem tom set ili add 
	}
}