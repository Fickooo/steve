const { Client, MessageEmbed, Collection } = require("discord.js"); 
const Discord = require('discord.js'); 
const { config } = require("dotenv"); 
const fs = require("fs"); 
const client = new Client({
    disableEveryone: true
});
const activities_list = [
    "oof!help", 
    "by Otaku Devs",
    "V2 Officially Released!"
    ]; 

client.on("ready", () => {
  console.log("Bot is online.")
   let statuses = [
        `s!help`,
        "by Otaku Devs",
        "V2 Officially Released!" 
    ]

    setInterval(function() {
        let status = statuses[Math.floor(Math.random() * statuses.length)];
        client.user.setActivity(status, {type: "PLAYING"});
    }, 10000)
})

client.commands = new Discord.Collection(); 
client.aliases = new Discord.Collection();

["komande"].forEach(handler => {
    require(`./handleri/${handler}`)(client);
}); 
client.on("message", async message => {
  let prefix = "s!"; 
   client.emit('checkMessage', message); 
   if(message.channel.type == "dm") return; 
      if (message.author.bot) return;
    if (!message.guild) return;
    if (!message.content.startsWith(prefix)) return;

  
  let messageArray = message.content.split(" "); 
    const args = message.content.slice(prefix.length).trim().split(/ +/g); 
    const cmd = args.shift().toLowerCase(); 
   client.emit('checkMessage', message); 
   if(message.channel.type == "dm") return;
   let commandfile = client.commands.get(cmd.slice(prefix.length)); //|| client.commands.get(cmd.slice(prefix.length)); 
   if (commandfile) commandfile.run(client, message, args); 
   let command = client.commands.get(cmd);

    if (!command) command = client.commands.get(client.aliases.get(cmd));

    if (command)
        command.run(client, message, args);

    if (message.author.bot) return;
    if (!message.guild) return;
    if (!message.content.startsWith(prefix)) return;


    if (message.channel.type != 'text' || message.author.bot)
    return;

  
  let isBotOwner = message.author.id == '333627661874233345';

  switch (cmd) {
    case 'restart': {
      if (!isBotOwner)
        return;

        message.channel.send("Restarting...")
        .then(() => client.destroy())
        .then(() => client.login(process.env.TOKEN))
        break;
    }


    case 'shutdown': {
      if (!isBotOwner)
        return;

      message.channel.send('Shutting down...')
      .then(() => client.destroy());
      break;
    }
  }
});





 

client.login(process.env.TOKEN);
