const mongoose = require('mongoose');

const logLogs = mongoose.Schema({
    guildid: String,
    channelid: String
});
module.exports = mongoose.model('setlogs', logLogs);