const Discord = require('discord.js');
const randomPuppy = require('random-puppy');


module.exports = {
    name: "meme",
    description: "",
    usage: "oof!meme",
    accessableby: "Members",
    aliases: [],
    run: async (bot, message, args) => {
    const subReddits = ["meme", "me_irl", "dankmeme"]
    const random = subReddits[Math.floor(Math.random() * subReddits.length)];
    const img = await randomPuppy(random);

    const embed = new Discord.MessageEmbed()
    .setImage(img)
    .setTitle(`From /r/${random}`)
    .setURL(`http://reddit.com/${random}`)

    message.channel.send(embed);

 }
}