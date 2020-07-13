
const Discord = require('discord.js');
const Canvas = require("canvas");

	  //ctx.strokeRect(0, 0, canvas.width, canvas.height);
module.exports = {
  name: "dab",
  category: "Fun",
  description: "Destroy that dab!",
  usage: "oof!dab @person#0000 or oof!dab",
  aliases: ["dab"],
  run: async (client, message, args) => {
    
    
  let target = message.mentions.users.first() || message.author;
    
    if(target.id === "663093851845689364"){
      
          const canvas = Canvas.createCanvas(256, 256);
    const ctx = canvas.getContext('2d');
    
    const background = await Canvas.loadImage('https://cdn.glitch.com/8f423271-964d-4b5d-a5d1-6d18b7847df0%2FOOOF.png');
    
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

	const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'dab.png');

	return message.channel.send(`Dab, ${message.author}`, attachment);
      
    }
    
    const canvas = Canvas.createCanvas(256, 256);
    const ctx = canvas.getContext('2d');
    
    const background = await Canvas.loadImage('https://cdn.glitch.com/8f423271-964d-4b5d-a5d1-6d18b7847df0%2FOOOF.png');
    
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    
    //const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'https://cdn.glitch.com/8f423271-964d-4b5d-a5d1-6d18b7847df0%2FOOOF.png');
    
    //ctx.strokeStyle = '#74037b';
	  //ctx.strokeRect(0, 0, canvas.width, canvas.height);
    

    ctx.beginPath();
	  ctx.arc(90, 50, 45, 0, Math.PI * 2, true);
	  ctx.closePath();
	  ctx.clip();

    
        const avatar = await Canvas.loadImage(target.displayAvatarURL({ format: 'jpg' }));
    
    //ctx.drawImage(avatar, 25, 10, 100, canvas.height)// ovo i ovo
    
    ctx.drawImage(avatar, 45, 5, 90, 90); //imas ova dva
    

 
    
	const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'dab.png');

	message.channel.send(`Dab, ${message.author}`, attachment);
  }}

