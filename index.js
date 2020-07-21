const { Client, MessageEmbed, Collection } = require("discord.js"); 
const Discord = require('discord.js'); 
const { config } = require("dotenv"); 
const fs = require("fs"); 
const client = new Client({
    disableEveryone: true
});
const activities_list = [
    "oof!help", 
    "by Otaku Devs"
    ]; 

client.on("ready", () => {
  console.log("Bot is online.")
   let statuses = [
        `oof!help`,
        "by Otaku Devs"
    ]

    setInterval(function() {
        let status = statuses[Math.floor(Math.random() * statuses.length)];
        client.user.setActivity(status, {type: "WATCHING"});
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


//     if (cmd === "say") {
//         if(message.deletable) message.delete();
//         if(message.content.includes("@everyone") || ("@here")) return message.reply("You can not tag everyone!") 
//         if(args.length < 1) return message.reply("OOF, Nothing to say 😔 ?").then(m => m.delete({timeout: 5000}));

//         const roleColor = message.guild.me.displayHexColor === "#000000" ? "#ffffff" : message.guild.me.displayHexColor;

//         if (args[0].toLowerCase() === "embed") {
//           const embed = new MessageEmbed()
//            .setColor(roleColor)
//            .setDescription(args.slice(1).join(" "))
//            .setTimestamp()
//            .setImage(client.user.displayAvatarURL)
//            .setAuthor(message.author.username, message.author.displayAvatarURL())
//            .setFooter(client.user.username, client.user.displayAvatarURL())

//           message.channel.send(embed);
//         } else {
//           message.channel.send(args.join(" "));
//         }
//     }

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
