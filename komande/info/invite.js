const Discord = require("discord.js")


module.exports = {
  name: "invite",
  category: "info",
  description: "info",
  usage: "s!invite",
  aliases: [""],
  run: async (client, message, args) => {

  if(!message.member.hasPermission('EMBED_LINKS')) return message.reply("Looks like you don't have a permission to do that.").then(m => m.delete({timeout: 5000}));
    
  let inviteembed = new Discord.MessageEmbed()
   .setAuthor(message.author.username, message.author.displayAvatarURL())
   .setFooter(client.user.username, client.user.displayAvatarURL())
   .setTitle("Invite | Support `📊`")
    .setDescription("My invite link is [here](https://discordapp.com/oauth2/authorize?client_id=663093851845689364&scope=bot&permissions=2146958847)`💌`\nMy support server invite [link](https://discord.gg/FNZhrn5)`📬`")
   .setTimestamp()
  .setColor("#000099")
   .setThumbnail('https://cdn.glitch.com/8f423271-964d-4b5d-a5d1-6d18b7847df0%2FScreenshot_684.png')
  return message.channel.send(inviteembed)


    }
}