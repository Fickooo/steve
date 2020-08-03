const cooldown = new Set()
const Discord = require('discord.js');


module.exports = {
  name: "say", 
  category: "say", 
  description: "say", 
  usage: "say", 
  aliases: [""], 
  run: async (client, message, args) => {
    
    
         if(cooldown.has(message.author.id)) {
      message.reply("you have to wait 5 seconds to use this command.").then(m => m.delete({timeout: 5000}));
    } else {
    
    
        if(message.deletable) message.delete();
        if(message.content.includes("@everyone")) return message.reply("You can not tag everyone!").then(m => m.delete({timeout: 5000}));
        if(message.content.includes("@here")) return message.reply("You can not tag everyone").then(m => m.delete({timeout: 5000}));
        if(args.length < 1) return message.reply("Nothing to say 😔?").then(m => m.delete({timeout: 5000}));

        const roleColor = message.guild.me.displayHexColor === "#000000" ? "#ffffff" : message.guild.me.displayHexColor;

        if (args[0].toLowerCase() === "embed") {
          const embed = new Discord.MessageEmbed()
           .setColor(roleColor)
           .setDescription(args.slice(1).join(" "))
           .setTimestamp()
           .setImage(client.user.displayAvatarURL)
           .setAuthor(message.author.username, message.author.displayAvatarURL())
           .setFooter(client.user.username, client.user.displayAvatarURL())

          message.channel.send(embed);
        } else {
          message.channel.send(args.join(" "));
        }
    }

      cooldown.add(message.author.id);
      setTimeout(() => {
        cooldown.delete(message.author.id);
      }, 5000);
      
      
      
  }
}  