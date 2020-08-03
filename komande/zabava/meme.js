const Discord = require('discord.js');
const randomPuppy = require('random-puppy');
const cooldown = new Set()

module.exports = {
    name: "meme",
    description: "",
    usage: "oof!meme",
    accessableby: "Members",
    aliases: [],
    run: async (bot, message, args) => {
      
      
      if(cooldown.has(message.author.id)) {
      message.reply("you have to wait 5 seconds to use this command.").then(m => m.delete({timeout: 5000}));
    } else {
      
      
    const subReddits = ["meme", "me_irl", "dankmeme"]
    const random = subReddits[Math.floor(Math.random() * subReddits.length)];
    const img = await randomPuppy(random);

    const embed = new Discord.MessageEmbed()
    .setImage(img)
    .setTitle(`From /r/${random}`)
    .setURL(`http://reddit.com/${random}`)

    message.channel.send(embed);

      
      cooldown.add(message.author.id);
      setTimeout(() => {
        cooldown.delete(message.author.id);
      }, 5000);
      
      
 }
}
}