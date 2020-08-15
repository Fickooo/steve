const mongoose = require('mongoose');

const reportLogs = mongoose.Schema({
    _id: String,
    channelid: String
});
module.exports = mongoose.model('setreport', reportLogs);
