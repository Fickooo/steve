const Discord = require('discord.js');
const mongoose = require('mongoose');
const disablem = require("../model/disabled")

module.exports = {
  name: "disable",
  category: "Utils", 
  description: "Disable", 
  usage: "disable", 
  aliases: [""], 
  run: async (client, message, args) => {
   
    let id = args.join(" ")
 
  let disablecmd = new disablem({
    "_id": message.guild.id
  })

    message.reply("ok")

  }
}  