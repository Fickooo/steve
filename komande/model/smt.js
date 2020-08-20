const mongoose = require('mongoose');

const muteRole = mongoose.Schema({
    guildid: String,
    channelid: String
});
module.exports = mongoose.model('setMuterole', muteRole);