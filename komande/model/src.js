const mongoose = require('mongoose');

const reportLogs = mongoose.Schema({
    guildid: String,
    channelid: String
});
module.exports = mongoose.model('setreport', reportLogs);
