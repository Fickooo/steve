const Discord = require("discord.js")


module.exports = {
  name: "server-info",
  category: "Info",
  description: "serverinfo",
  usage: "s!server-info",
  aliases: [""],
  run: async (client, message, args) => {


      function checkDays(date) {
        let now = new Date();
        let diff = now.getTime() - date.getTime();
        let days = Math.floor(diff / 86400000);
        return days + (days == 1 ? " day" : " days") + " ago";
    };
  
  let region = {
        "brazil": ":flag_br: Brazil",
        "europe" : ":flag_eu: Europe",
          "eu-central": ":flag_eu: Central Europe",
        "singapore": ":flag_sg: Singapore",
        "us-central": ":flag_us: Central U.S",
        "sydney": ":flag_au: Sydney",
        "us-east": ":flag_us: U.S. East",
        "us-south": ":flag_us: U.S. South",
        "us-west": ":flag_us: U.S. West",
        "eu-west": ":flag_eu: Western Europe",
        "vip-us-east": ":flag_us: VIP U.S. East",
        "london": ":flag_gb: London",
        "amsterdam": ":flag_nl: Amsterdam",
        "hongkong": ":flag_hk: Hong Kong",
        "russia": ":flag_ru: Russia",
        "southafrica": ":flag_za:  South Africa",
        "india": ":flag_in: India"
    };
  
    let sicon = message.guild.iconURL();
  
    let serverembed = new Discord.MessageEmbed()
    .setTitle("🔎 | " + message.guild.name + " | Info")
    .setColor("#0000ff")
    .setThumbnail(sicon)
    .addField("`🕐` Created", `${message.channel.guild.createdAt.toUTCString().substr(0, 16)} **(${checkDays(message.channel.guild.createdAt)})**`)
    .addField("`🌐` Users", message.guild.memberCount,true)
    .addField("`🤖` Bots", message.guild.members.cache.filter(member => member.user.bot).size, true)
    .addField("`👤`Members", message.guild.memberCount - message.guild.members.cache.filter(member => member.user.bot).size, true)
     .addField("`🌍` Region", region[message.guild.region], true)
    .addField("`🔰` Ranks", message.guild.roles.cache.size,true)
    .addField("`💬` Channels", message.guild.channels.cache.size,true)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.displayAvatarURL())
    .setFooter("[s!] Steve", client.user.displayAvatarURL())
    
    message.channel.send(serverembed);


    }
}