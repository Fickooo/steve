const mongoose = require('mongoose');
const fs = require('fs');
const Discord = require('discord.js');
const setreportch = require('../model/src');

module.exports = {
  name: "test",
  category: "test", 
  description: "mraleeeee", 
  usage: "test", 
  aliases: [""], 
  run: async (client, message, args) => {
    return
    let src = new setreportch({
        _id: 69,
        channelid: message.channel.id,
        text: "idemo brd"
    });
    
    src.save()
    .then(result => console.log(result))
    .catch(err => console.error(err));

    console.log('Wi did it menn. Drop awp men!');
    }
}  
