const cooldown = new Set()
const Discord = require('discord.js');


module.exports = {
  name: "pizza",
  category: "Fun",
  description: "Make a delicious pizza!",
  usage: "s!pizza",
  aliases: [""],
  run: async (client, message, args) => { 

  if(cooldown.has(message.author.id)) {
      message.reply("you have to wait 5 seconds to use this command.").then(m => m.delete({timeout: 5000}));
    } else {
    
    let picaempiti = new Discord.MessageEmbed()
      .setTitle("🍕 | Pizza")
      .setImage("https://cdn.glitch.com/8f423271-964d-4b5d-a5d1-6d18b7847df0%2Fpizza(empty).png?v=1597606367329")
      .setDescription("Do you want **_ketchup_** on your pizza? :tomato:")
    message.channel.send(picaempiti).then(m => {
      m.react("👍");
      m.react("👎"); //znm icice sa ifom ababababahah to t oto

    m.awaitReactions((reaction, user) => user.id == message.author.id, 
                            { max: 1, time: 30000 }).then(collected => {
                                    if (collected.first().emoji.name == '👍') {                             
      
                                          let draw = new Discord.MessageEmbed()
                                            .setTitle("🍕 | Pizza")//aa
                                            .setDescription("Do you want some cheese? :cheese:")
                                            .setColor("RANDOM")
                                            .setImage("https://cdn.glitch.com/8f423271-964d-4b5d-a5d1-6d18b7847df0%2Fpizza(ketchup).png?v=1597606364148")
                                            .setFooter(message.author.username, message.author.displayAvatarURL())
                                            .setTimestamp()
                                          m.edit(draw).then(mm => {
                                             m.reactions.removeAll().catch(error => console.error('Failed to clear reactions: ', error))
                                             mm.react("👍");
                                             mm.react("👎"); 
                                            
                                               mm.awaitReactions((reaction, user) => user.id == message.author.id, 
                                    { max: 1, time: 30000 }).then(collected => {
                                    if (collected.first().emoji.name == '👍') {
                                         
                                            
                                      let draw = new Discord.MessageEmbed()
                                            .setTitle("🍕 | Pizza")//aa
                                            .setDescription("Do you want some pepperoni? :pizza:")
                                            .setColor("RANDOM")
                                            .setImage("https://cdn.glitch.com/8f423271-964d-4b5d-a5d1-6d18b7847df0%2F66225.png?v=1597606375784")
                                            .setFooter(message.author.username, message.author.displayAvatarURL())
                                            .setTimestamp()
                                          m.edit(draw).then(m => {
                                              m.reactions.removeAll().catch(error => console.error('Failed to clear reactions: ', error))
                                              m.react("👍");
                                              m.react("👎"); 
                                          })
                                      
                                     
                                              m.awaitReactions((reaction, user) => user.id == message.author.id, 
                                    { max: 1, time: 30000 }).then(collected => {
                                    if (collected.first().emoji.name == '👍') {
                                         
                                            
                                      let draw = new Discord.MessageEmbed()
                                            .setTitle("🍕 | Pizza")//aa
                                            .setDescription("Here's your pizza! :pizza:")
                                            .setColor("RANDOM")
                                            .setImage("https://cdn.glitch.com/8f423271-964d-4b5d-a5d1-6d18b7847df0%2Fpizza(kcp).png?v=1597606351477")
                                            .setFooter(message.author.username, message.author.displayAvatarURL())
                                            .setTimestamp()
                                          m.edit(draw).then(m.reactions.removeAll().catch(error => console.error('Failed to clear reactions: ', error)));
                                      
                                     
                                      
                                    
                                    }
                                               })
                                      
                                    }
                                               })
                                            })
                  
                                          m.edit(draw)
                                       
                                        } else if(collected.first().emoji.name == '👎'){
                                          let draw = new Discord.MessageEmbed()
                                            .setTitle("🍕 | Pizza")//aa
                                            .setDescription("Do you want some cheese? :cheese:")
                                            .setColor("RANDOM")
                                            .setImage("https://cdn.glitch.com/8f423271-964d-4b5d-a5d1-6d18b7847df0%2Fpizza(empty).png?v=1597606367329")
                                            .setFooter(message.author.username, message.author.displayAvatarURL())
                                            .setTimestamp()
                                          m.edit(draw)
                                          
                                          
                                          
                                          m.awaitReactions((reaction, user) => user.id == message.author.id, 
                            { max: 1, time: 30000 }).then(collected => {
                                    if (collected.first().emoji.name == '👍') { 
                                          
                                          
                                          let draw = new Discord.MessageEmbed()
                                            .setTitle("🍕 | Pizza")//aa
                                            .setDescription("Do you want some cheese? :cheese:")
                                            .setColor("RANDOM")
                                            .setImage("https://cdn.glitch.com/8f423271-964d-4b5d-a5d1-6d18b7847df0%2Fpizza(empty).png?v=1597606367329")
                                            .setFooter(message.author.username, message.author.displayAvatarURL())
                                            .setTimestamp()
                                          m.edit(draw)
                                          
                                    }
    });

    }


    })
    })
    }
  
    cooldown.add(message.author.id)
      setTimeout(() => {
        cooldown.delete(message.author.id);
      }, 5000);
  }    
                                                          
}
