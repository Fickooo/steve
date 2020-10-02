const Discord = require('discord.js');
const Guild = require('../komande/models/guild');
const mongoose = require('mongoose');

module.exports = async (guild, client) => {
  
  guild = new Guild({
    _id: mongoose.Types.ObjectId(),
    guildId: guild.id,
    logChannelId: "none",
    muteRoleId: "none",
    suggestChannelId: "none",
    reportChannelId: "none",
    autoRoleId: "none"
  });

  guild.save()
  console.log("I'm added to the server")
};