const Discord = require('discord.js');
const db = require("quick.db");
const ms = require("ms");

module.exports = {
  name: "mute", 
  category: "Staff", 
  description: "mute", 
  usage: "mute", 
  aliases: [""], 
  run: async (client, message, args) => {
    
  if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply("you don't have permission to mute someone.").then(m => m.delete({timeout: 5000}));
  
  let tomutemember = message.mentions.users.first();
  
  if(!tomutemember) return message.reply("you didn't mention who you want to mute.").then(m => m.delete({timeout: 5000}));
  
  let muteroleid = db.get(`${message.guild.id}_muterole`)
  
  if(!muteroleid) return message.reply("you forgot to set up the mute role!").then(m => m.delete({timeout: 5000}));
    
    
    
  }
}  


