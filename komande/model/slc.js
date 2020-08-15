const mongoose = require('mongoose');

const logLogs = mongoose.Schema({
    _id: String,
    channelid: String
});
module.exports = mongoose.model('setlogs', logLogs);