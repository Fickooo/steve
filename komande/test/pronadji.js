const mongoose = require('mongoose');
const fs = require('fs');
const Discord = require('discord.js');
const setreportch = require('../model/src');

module.exports = {
  name: "pronadji",
  category: "test", 
  description: "mraleeeee", 
  usage: "test", 
  aliases: [""], 
  run: async (client, message, args, src) => {
    //mozda je pogresan fajl
//        src = new setreportch({
//         _id: message.guild.id,
//         channelid: message.channel.id,
//         text: "RADI MBRALEEE"
//      

//     src.save()
    return
    let broj = args.join(" ").slice(22);   
    if(isNaN(broj)){
     return message.reply("to nije broj " + broj)
    }
    try{
    let info = await setreportch.findOne({"_id": parseInt(broj)})
    console.log(info)
    message.reply("```json\n" + info + "```")
    //.then(result => console.log(result))
    //.catch(err => console.error(err));
    
    console.log('Wi did it menn. Drop awp men!');
    } catch(error){
      return message.reply("to ne postoji u bazi")
    }
    }
}  
