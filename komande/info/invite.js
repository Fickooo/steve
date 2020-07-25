const Discord = require("discord.js")


module.exports = {
  name: "invite",
  category: "info",
  description: "info",
  usage: "s!invite",
  aliases: [""],
  run: async (client, message, args) => {

  if(!message.client.hasPermission('EMBED_LINKS')) return message.reply("I'm sorry, but I am not allowed to send you the link. Ask the administrators they can edit my permissions.")
    
  let inviteembed = new Discord.MessageEmbed()
   .setAuthor(message.author.username, message.author.displayAvatarURL())
   .setFooter(client.user.username, client.user.displayAvatarURL())
   .setTitle("My invite link `⛓️`")
   .setURL('https://discordapp.com/oauth2/authorize?client_id=663093851845689364&scope=bot&permissions=0')
   .setTimestamp()
   .setThumbnail('https://cdn.glitch.com/8f423271-964d-4b5d-a5d1-6d18b7847df0%2FScreenshot_684.png')
  return message.channel.send(inviteembed)


    }
}