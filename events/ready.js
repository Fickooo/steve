const Discord = require('discord.js')



module.exports = async (client) => {
  
  const activities_list = [
    "oof!help", 
    "by Otaku Devs",
    "v3 in development!"
    ]; 
  
    console.log("Bot is online.")
   let statuses = [
        `s!help`,
        "by Otaku Devs",
        "v3 in development!" 
    ]

    setInterval(function() {
        let status = statuses[Math.floor(Math.random() * statuses.length)];
        client.user.setActivity(status, {type: "PLAYING"});
    }, 10000)

};