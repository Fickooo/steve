const Discord = require("discord.js")
const os = require("os")
const moment = require("moment")

module.exports = {
  name: "bot-info",
  category: "Info",
  description: "",
  usage: "s!botinfo",
  aliases: ["botinfo"],
  run: async (client, message, args) => {

    const core = os.cpus()[0]
    
    function formatBytes(bytes) {
        if (bytes === 0) return '0 Bytes';
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
        const i = Math.floor(Math.log(bytes) / Math.log(1024));
        return `${parseFloat((bytes / Math.pow(1024, i)).toFixed(2))} ${sizes[i]}`;
    }
    
    
    let serverembed = new Discord.MessageEmbed()
    .setTitle("🔎 | " + client.user.username + " | Info")
    .setColor("#0000ff")
    .setThumbnail('https://cdn.glitch.com/8f423271-964d-4b5d-a5d1-6d18b7847df0%2FScreenshot_684.png')
    .addField(" General `🌍`", "\u200b")
    .addField("`🕐` Created at", `${moment.utc(client.user.createdAt).format("dddd, MMMM Do YYYY")}`, true)
    .addField("`👤` Total users", client.guilds.cache.reduce((a, b) => a + b.memberCount, 0), true)
    .addField("`🛡️` Guilds", client.guilds.cache.size, true)
    .addField("`🤖` DiscordJS", Discord.version, true)
    .addField("Hosting Info `📡` ", "\u200b") 
    .addField("`📀` Platform", process.platform, true)
    .addField("`🔋` NodeJS", process.version, true)
    .addField("`💽` CPU Cores", os.cpus().length, true) 
    .addField("`💻` Model", core.model, true) 
    .addField("`⏲️` CPU Speed", core.speed + "MHz", true)
    .addField("`💾` Total memory", formatBytes(process.memoryUsage().heapTotal) + 500, true)
    .addField("`📊` Used memory", formatBytes(process.memoryUsage().heapUsed), true)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.displayAvatarURL())
    .setFooter("[s!] Steve", client.user.displayAvatarURL())
    
    
    message.channel.send(serverembed)
    
	}
}