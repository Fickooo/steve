const Discord = require("discord.js")

module.exports = {
  name: "roast",
  category: "Fun",
  description: "Roast someone",
  usage: "oof!roast or oof!roast person#0000",
  aliases: ["roast"],
  run: async (client, message, args) => {


  let target = message.mentions.users.first() || message.author;

  const roasts = ["You’re the reason God created the middle finger.", 
                "You’re a grey sprinkle on a rainbow cupcake.", 
                "If your brain was dynamite, there wouldn’t be enough to blow your hat off.", 
                "Light travels faster than sound which is why you seemed bright until you spoke.", 
                "Your kid is so annoying, he makes his Happy Meal cry.", 
                "You have so many gaps in your teeth it looks like your tongue is in jail.",
                 "Your face makes onions cry.",
                 "Keep rolling your eyes, you might eventually find a brain.",
                 "You bring everyone so much joy, when you leave the room.",
                 "I thought of you today. It reminded me to take out the trash.",
                 "I forgot the world revolves around you. My apologies, how silly of me.",
                 `It’s nice to see such a diverse crowd here today. We’ve got Indians, Jews, Whites, and whatever the fuck ${"<@" + target.id + ">"} is.`,
                 "I'd slap you but that would be animal abuse.",
                 "I would call you a retard but that would be insulting to retards.",
                 "If I throw a stick, will you leave?",
                 "If you're gonna be a smartass, first you have to be smart. Otherwise you're just an ass.",
                 "It's pointless to make fun of you because it will take you the rest of the day to figure it out.",
                 "Maybe if you ate some of that makeup you could be pretty on the inside.",
                 "Too bad your personality doesn't match your face."]
  
  const randomRoast = roasts[Math.floor(Math.random() * roasts.length)];

 
  if (target.id == 663093851845689364) {
   message.channel.send("Lol you seriously tought you can roast me??") 
  } else if (randomRoast == roasts[11]) {
   message.channel.send(randomRoast);
 } else {
   message.channel.send("<@" + target.id + ">" + ", "  + randomRoast);
 }   
    
 
       

    
	}
  
}
