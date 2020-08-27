const mongoose = require('mongoose');

const guildSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  guildId: String,
  logChannelId: String,
  muteRoleId: String,
  suggestChannelId: String,
  reportChannelId: String
});

module.exports = mongoose.model("Guild", guildSchema, 'guilds')