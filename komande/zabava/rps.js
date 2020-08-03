const Discord = require("discord.js")
const cooldown = new Set()

module.exports = {
  name: "rps",
  category: "Fun",
  description: "rps",
  usage: "s!rps",
  aliases: [""],
  run: async (client, message, args) => {

    if(cooldown.has(message.author.id)) {
      message.reply("you have to wait 5 seconds to use this command.").then(m => m.delete({timeout: 5000}));
    } else {
    
    let rps = [
      "🗿",
      "📄",
      "✂️"
    ]  
 
    let result = rps[Math.floor(Math.random() * rps.length)];

    let pokrecemo = new Discord.MessageEmbed()  
     .setFooter(message.author.username, message.author.displayAvatarURL())
     .setTitle("Rock, paper, scissors | 🗿📄✂️")
     .setDescription("Let's play!")
     .setTimestamp() 
     .setColor("RANDOM");
    message.channel.send(pokrecemo).then(m => {
      m.react("🗿");
      m.react("📄");
      m.react("✂️");
   
                 m.awaitReactions((reaction, user) => user.id == message.author.id,
                            { max: 1, time: 30000 }).then(collected => {
                                    if (collected.first().emoji.name == '📄') {
                                      
                                        if(result === "📄"){
                                          let draw = new Discord.MessageEmbed()
                                            .setTitle("It was a draw!")
                                            .setDescription("I picked " + result + " and you also picked 📄")
                                            .setColor("RANDOM")
                                            .setFooter(message.author.username, message.author.displayAvatarURL())
                                            .setTimestamp()
                                          m.edit(draw)
                                        }//ma ez
                                        if(result === "🗿"){
                                           let botlost = new Discord.MessageEmbed()
                                            .setTitle("You won!")
                                            .setDescription("I picked " + result + " and you picked 📄")
                                            .setColor("RANDOM")
                                            .setFooter(message.author.username, message.author.displayAvatarURL())
                                            .setTimestamp()
                                          m.edit(botlost)
                                        }
                                        if(result === "✂️"){
                                           let userlost = new Discord.MessageEmbed()
                                            .setTitle("I won!")
                                            .setDescription("I picked " + result + " and you picked 📄")
                                            .setColor("RANDOM")
                                            .setFooter(message.author.username, message.author.displayAvatarURL())
                                            .setTimestamp()
                                          m.edit(userlost)
                                        }
                                    }
                   //aj
                                    if(collected.first().emoji.name == '🗿') {
                                        
                                        if(result === "📄"){
                                          let draw = new Discord.MessageEmbed()
                                            .setTitle("I won!")
                                            .setDescription("I picked " + result + " and you picked 🗿")
                                            .setColor("RANDOM")
                                            .setFooter(message.author.username, message.author.displayAvatarURL())
                                            .setTimestamp()
                                          m.edit(draw)
                                        }//ma ez
                                        if(result === "🗿"){
                                           
                                           let botlost = new Discord.MessageEmbed()
                                            .setTitle("It's a draw!")
                                            .setDescription("I picked " + result + " and you also picked 🗿")
                                            .setColor("RANDOM")
                                            .setFooter(message.author.username, message.author.displayAvatarURL())
                                            .setTimestamp()
                                          m.edit(botlost)
                                        }
                                        if(result === "✂️"){
                                           let userlost = new Discord.MessageEmbed()
                                            .setTitle("You won!")
                                            .setDescription("I picked " + result + " and you picked 🗿")
                                            .setColor("RANDOM")
                                            .setFooter(message.author.username, message.author.displayAvatarURL())
                                            .setTimestamp()
                                          m.edit(userlost)
                                      
                                    } 
                                    }
                      //ovo je jedini nacin da bi dobili, ali mislim da moze, dodacemo , nisam ni video xD logs mi ispod
                                     if(collected.first().emoji.name == '✂️') {
                                       
                                       if(result === "📄"){
                                          let draw = new Discord.MessageEmbed()
                                            .setTitle("You won!")
                                            .setDescription("I picked " + result + " and you picked ✂️")
                                            .setColor("RANDOM")
                                            .setFooter(message.author.username, message.author.displayAvatarURL())
                                            .setTimestamp()
                                          m.edit(draw)
                                        }
                                        if(result === "🗿"){
                                           
                                           let botlost = new Discord.MessageEmbed()
                                            .setTitle("I won!")
                                            .setDescription("I picked " + result + " and you picked ✂️")
                                            .setColor("RANDOM")
                                            .setFooter(message.author.username, message.author.displayAvatarURL())
                                            .setTimestamp()
                                          m.edit(botlost)
                                        }
                                        if(result === "✂️"){
                                           let userlost = new Discord.MessageEmbed()
                                            .setTitle("It's a draw!")
                                            .setDescription("I picked " + result + " and you also picked ✂️")
                                            .setColor("RANDOM")
                                            .setFooter(message.author.username, message.author.displayAvatarURL())
                                            .setTimestamp()
                                          m.edit(userlost)
                                       
                                       
                                     }
                                     }
                                     
                   
                            }).catch(() => {
                                    message.reply("you didn't choose your reaction, so the game is cancelled.").then(m => m.delete({timeout: 30000}));
                            });

                    return;
    

    })
         cooldown.add(message.author.id);
      setTimeout(() => {
        cooldown.delete(message.author.id);
      }, 5000);
  }
}
}     