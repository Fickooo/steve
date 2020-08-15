const Discord = require('discord.js');
let cooldown = new Set()
module.exports = {
    name: "goal",
    description: "",
    usage: "s!goal",
    accessableby: "Members",
    aliases: [],
    run: async (bot, message, args) => {
    
          if(cooldown.has(message.author.id)) {
      message.reply("you have to wait 5 seconds to use this command.").then(m => m.delete({timeout: 5000}));
    } else {
      
    let responsegood = ["What a goal!", "Good play!" , "Sick goal!", "Nice!", "GG!"]
    let randomResponsegood = responsegood[Math.floor(Math.random() * responsegood.length)]
    
        let responsebad = ["Goalkeeper saved!", "What a save from the keeper!", "Learn to play!"]
    let randomResponsebad = responsebad[Math.floor(Math.random() * responsebad.length)]
    
    var golnum = Math.floor(Math.random() * 3);
    
    let goalpick = new Discord.MessageEmbed()
      .setTitle("Goal Game! | `🥅`")
      .setDescription("🥅🥅🥅\n🌿🏋🌿\n\n🌿⚽🌿")
      .setFooter("Pick a goal!")
      .setColor("RANDOM")
    message.channel.send(goalpick).then(e => {
      e.react("1️⃣")      
      e.react("2️⃣")
      e.react("3️⃣")
        e.awaitReactions((reaction, user) => user.id == message.author.id,
             { max: 1, time: 30000 }).then(collected => {
              if (collected.first().emoji.name == '1️⃣') {
                
                //return message.reply('1')
                if(golnum === 0){
                  
                let goalpick1 = new Discord.MessageEmbed()
                .setTitle("Lose! | `🥅`")
                .setDescription("🥅🥅🥅\n🏋🌿🌿\n\n⚽🌿🌿")
                .setFooter(randomResponsebad)
                .setColor("RANDOM")
                return e.edit(goalpick1)
                
                } else if(golnum === 1){
                  
               let goalpick2 = new Discord.MessageEmbed()
                .setTitle("Win! | `🥅`")
                .setDescription("🥅🥅🥅\n🌿🏋🌿\n\n⚽🌿🌿")
                .setFooter(randomResponsegood)
               .setColor("RANDOM")
                return e.edit(goalpick2)
                
                } else if(golnum === 2){
                  
               let goalpick3 = new Discord.MessageEmbed()
                .setTitle("Win! | `🥅`")
                .setDescription("🥅🥅🥅\n🌿🌿🏋\n\n⚽🌿🌿")
                .setFooter(randomResponsegood)
               .setColor("RANDOM")
                return e.edit(goalpick3)
                  
              }
              }
                if(collected.first().emoji.name == '2️⃣') {
                
                     if(golnum === 0){
                  
                let goalpick1 = new Discord.MessageEmbed()
                .setTitle("Win! | `🥅`")
                .setDescription("🥅🥅🥅\n🏋🌿🌿\n\n🌿⚽🌿")
                .setFooter(randomResponsegood)
                .setColor("RANDOM")
                return e.edit(goalpick1)
                
                } else if(golnum === 1){
                  
               let goalpick2 = new Discord.MessageEmbed()
                .setTitle("Lose! | `🥅`")
                .setDescription("🥅🥅🥅\n🌿🏋🌿\n\n🌿⚽🌿")
                .setFooter(randomResponsebad)
               .setColor("RANDOM")
                return e.edit(goalpick2)
                
                } else if(golnum === 2){
                  
               let goalpick3 = new Discord.MessageEmbed()
                .setTitle("Win! | `🥅`")
                .setDescription("🥅🥅🥅\n🌿🌿🏋\n\n🌿⚽🌿")
                .setFooter(randomResponsegood)
               .setColor("RANDOM")
                  return e.edit(goalpick3)
        
              } 
                }
                  if(collected.first().emoji.name == '3️⃣'){
                                     if(golnum === 0){
                  
                let goalpick1 = new Discord.MessageEmbed()
                .setTitle("Win! | `🥅`")
                .setDescription("🥅🥅🥅\n🏋🌿🌿\n\n🌿🌿⚽")
                .setFooter(randomResponsegood)
                .setColor("RANDOM")
                return e.edit(goalpick1)
                
                } else if(golnum === 1){
                  
               let goalpick2 = new Discord.MessageEmbed()
                .setTitle("Win! | `🥅`")
                .setDescription("🥅🥅🥅\n🌿🏋🌿\n\n🌿🌿⚽")
                .setFooter(randomResponsegood)
               .setColor("RANDOM")
                return e.edit(goalpick2)
                
                } else if(golnum === 2){
                  
               let goalpick3 = new Discord.MessageEmbed()
                .setTitle("Lose! | `🥅`")
                .setDescription("🥅🥅🥅\n🌿🌿🏋\n\n🌿🌿⚽")
                .setFooter(randomResponsebad)
               .setColor("RANDOM")
                  return e.edit(goalpick3)
        
              } 
                  }
        }).catch(() => {
                                   return message.reply("you didn't choose your reaction, so the game is cancelled.").then(m => m.delete({timeout: 30000}));
                            });
      
    })
               cooldown.add(message.author.id);
      setTimeout(() => {
        cooldown.delete(message.author.id);
      }, 5000);
    }
    }
}