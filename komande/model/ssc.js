const mongoose = require('mongoose');

const suggestLogs = mongoose.Schema({
    guildid: String,
    channelid: String
});
module.exports = mongoose.model('setSuggest', suggestLogs);
