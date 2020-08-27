const mongoose = require('mongoose');

module.exports = {
    init: () => {
        const dbOptions = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            autoIndex: false,
            poolSize: 5,
            connectTimeoutMS: 10000,
            family:4
        };

        mongoose.connect('mongodb+srv://Kwerty:pnBG7c4MPRjt@cluster0.amdu5.mongodb.net/steve?retryWrites=true&w=majority', dbOptions);
        mongoose.set('useFindAndModify', false);
        mongoose.Promise = global.Promise;
      
       mongoose.connection.on('connected', () => {
          
         console.log("Successfully connected to STEVE DataBase.")
         
       });
       
       mongoose.connection.on('err', err => {
         console.error(`Steve DataBase ERROR: \n{err.stack}`)
       });
       
       mongoose.connection.on('disconnected', () => {
         console.warn('Steve lost connection to the DataBase.')
       });
       
     }
}
//            reconnectTries: Number.MAX_VALUE,
//            reconnectInterval: 500,