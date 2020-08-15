const Discord = require("discord.js")
const cooldown = new Set()

module.exports = {
  name: "pp",
  category: "Fun",
  description: "See how much someone is gay in percent",
  usage: "oof!gay @person#0000 or oof!gay",
  aliases: ["peder"],
  run: async (client, message, args) => {

    
    if(cooldown.has(message.author.id)) {
      message.reply("you have to wait 5 seconds to use this command.").then(m => m.delete({timeout: 5000}));
    } else {
    
    var penis = "="
    var gaser = Math.floor(Math.random() * 26);
for (var i = 0; i < gaser; i++) {
  var penis = penis + "="
}
   //   message.reply("8" + penis + "D")
  let target = message.mentions.users.first() || message.author;

  let dogembed = new Discord.MessageEmbed()
  .setColor("#ff004c")
  .setTitle("🍆 | PP Size")
  .setDescription("**" + target.username + "-s** pp size is \n**8" + penis + "D**")
//  .setTimestamp();
  message.channel.send(dogembed);

    
   //  cooldown.add(message.author.id);
      setTimeout(() => {
        cooldown.delete(message.author.id);
      }, 5000); 
      
    }
      
	}
}