const mongoose = require('mongoose');

const disabledCmds = mongoose.Schema({
    _id: String,
    bruh: String,
    gas: String

});
module.exports = mongoose.model('disabledCMD' , disabledCmds);