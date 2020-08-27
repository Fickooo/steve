const { Client, MessageEmbed, Collection } = require("discord.js"); 
const Discord = require('discord.js'); 
const { config } = require("dotenv"); 
const fs = require("fs"); 
const client = new Client({
    disableEveryone: true
});



client.commands = new Discord.Collection(); 
client.aliases = new Discord.Collection();
client.mongoose = require("./utils/mongoose");

["komande"].forEach(handler => {
    require(`./handleri/${handler}`)(client);
});


fs.readdir('./events/', (err, files) => {
    if (err) return console.error;
    files.forEach(file => {
        if (!file.endsWith('.js')) return;
        const evt = require(`./events/${file}`);
        let evtName = file.split('.')[0];
        console.log(`Loaded event '${evtName}'`);
        client.on(evtName, evt.bind(null, client));
    });
});


client.mongoose.init()
client.login(process.env.TOKEN);