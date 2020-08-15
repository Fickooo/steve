const mongoose = require('mongoose');

const suggestLogs = mongoose.Schema({
    _id: String,
    channelid: String
});
module.exports = mongoose.model('setSuggest', suggestLogs);
