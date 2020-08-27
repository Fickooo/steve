const Discord = require('discord.js');
const mongoose = require('mongoose');
const Guild = require('../komande/models/guild')

module.exports = async (client, guild) => {
  Guild.findOneAndDelete({
    guildId: guild.id
  }, (err, res) => {
                         
    if(err) console.error(err);
    console.log("I'm deleted from server")
   });
}
