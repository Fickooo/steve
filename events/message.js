const Discord = require('discord.js')
const mongoose = require('mongoose');
const Guild = require('../komande/models/guild');

module.exports = async (client, message) => {
  
  
  
  
let prefix = "s!"; 
   client.emit('checkMessage', message); 
   if(message.channel.type == "dm") return; 
      if (message.author.bot) return;
    if (!message.guild) return;
    if (!message.content.startsWith(prefix)) return;

 const settings = await Guild.findOne({
        guildId: message.guild.id
    }, (err, guild) => {
        if (err) console.error(err)
        if (!guild) {
            const newGuild = new Guild({
                    _id: mongoose.Types.ObjectId(),
                    guildId: message.guild.id,
                    logChannelId: "none",
                    muteRoleId: "none",
                    suggestChannelId: "none",
                    reportChannelId: "none"
            })

            newGuild.save()
            .then(result => console.log(result))
            .catch(err => console.error(err));

            return console.log(`Server by name of ${message.guild.name} was not in our database, i added them now!`)
        }
    });
     
  
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
};