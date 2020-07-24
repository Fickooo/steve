const Discord = module.require('discord.js');
const db = require("quick.db")

module.exports = {
  name: "warn", 
  category: "Staff", 
  description: "warn", 
  usage: "oof!warn @user", 
  aliases: [""], 
  run: async (client, message, args) => {
    
    if(message.deletable) message.delete();
    
    if(message.author.id !== "333627661874233345") return
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("you don't have a permission for this command.").then(m => m.delete({timeout: 5000}));
    
  let tobewarned = message.guild.member(message.mentions.users.first())
  if(!tobewarned) return message.reply("you can't warn air. ").then(m => m.delete({timeout: 5000}));
  
  let reason = args.slice(1).join(" ");  
  if(!reason) return message.reply("you can't warn people without a reason.").then(m => m.delete({timeout: 5000}));
    
  db.push(`${message.author.id}_${message.guild.id}_warns`, reason);
//   let brojwarnova = db.get(`${message.author.id}_${message.guild.id}_warns`).size
//   message.channel.send(brojwarnova.length)
  
  // let embed = new Discord.MessageEmbed()
  //  .setTitle("")
  }
}