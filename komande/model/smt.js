const mongoose = require('mongoose');

const muteRole = mongoose.Schema({
    _id: String,
    roleid: String
});
module.exports = mongoose.model('setMuterole', muteRole);