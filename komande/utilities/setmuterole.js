const Discord = require('discord.js');
const db = require("quick.db");

module.exports = {
  name: "setmuterole", 
  category: "Utilities", 
  description: "mute", 
  usage: "oof!smr or oof!muterole", 
  aliases: ["smr", "muterole"], 
  run: async (client, message, args) => {
    
  if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply("you don't have permission for this command!").then(m => m.delete({timeout: 5000}));
    
  let mutedRole = message.mentions.roles.first();
  let tagmember = message.mentions.users.first();
  if(tagmember) return message.reply("you need to include a role, not a member.").then(m => m.delete({timeout: 5000}));
  if(!mutedRole) return message.reply("you need to include a role, not empty space.").then(m => m.delete({timeout: 5000}));
  
  //let mesto1 = args[0];
   
  //let mesto2 = args[1];
    
 // if(!mutedRole === mesto1) return message.reply("you need to include a role, not a member.").then(m => m.delete({timeout: 5000}));
    
  //message.channel.send("<@" + mutedRole.id + ">");
    db.set(`${message.guild.id}_muterole`, mutedRole.id)
  message.reply("Success!").then(m => m.delete({timeout: 5000}));
  }
} 


