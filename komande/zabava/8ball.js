const Discord = require('discord.js');

module.exports = {
  name: "8ball",
  category: "fun", 
  description: "ask a question", 
  usage: "s!8ball question", 
  aliases: [""], 
  run: async (client, message, args) => {
    
  if(!args[2]) return message.reply("please ask a full question!").then(m => m.delete({timeout: 5000}));
    
  let replies = ["Yes.", "No.", "I don't know.", "Ask again later."]
  
  let result = replies[Math.floor(Math.random() * replies.length)];
  let question = args.slice(0).join(" ")
    
  let questionembed = new Discord.MessageEmbed()
   .setAuthor(message.author.username, message.author.displayAvatarURL())
   .setTitle("`❓` 8Ball")
   .setColor("#FF9900")
   .addField('**Question:**',  question )
   .addField('**Answer:**',  result )
   .setTimestamp()
   .setFooter("[s!] Steve", client.user.displayAvatarURL())
   return message.channel.send(questionembed)
     }
}  