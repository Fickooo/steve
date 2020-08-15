const Discord = require("discord.js")
const cooldown = new Set()

module.exports = {
  name: "pedo",
  category: "Fun",
  description: "See how much someone is pedo in percent",
  usage: "s!pedo @person#0000 or s!pedo",
  aliases: [""],
  run: async (client, message, args) => {

    
    if(cooldown.has(message.author.id)) {
      message.reply("you have to wait 5 seconds to use this command.").then(m => m.delete({timeout: 5000}));
    } else {
    
    
    var gaser = Math.floor(Math.random() * 101);

  let target = message.mentions.users.first() || message.author;

  let dogembed = new Discord.MessageEmbed()
  .setColor("#ff004c")
  .setTitle("👨‍👧‍👦 | Pedo")
  .setDescription("**" + target.username + "** is **_" + gaser + "%" + "_** pedo.")
  .setTimestamp();
  message.channel.send(dogembed);

    
     cooldown.add(message.author.id);
      setTimeout(() => {
        cooldown.delete(message.author.id);
      }, 5000); 
      
    }
      
	}
}