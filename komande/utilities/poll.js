const Discord = require('discord.js');

module.exports = {
  name: "poll",
  category: "poll", 
  description: "poll", 
  usage: "poll", 
  aliases: [""], 
  run: async (client, message, args) => {
    

    let reactions = ["1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣"]
        
        
        
        // let pitanjaobj = {
        //   "pitanje1": "Kako se zovete?",
        //   "pitanje2": "Koliko imate godina?",
        //   "pitanje3": "Zašto ste počeli da se bavite umetnošću?",
        //   "pitanje4": "Koliko se dugo bavite umetnošću?",
        //   "pitanje5": "Da li volite da crtate ručno ili digitalno?",
        //   "pitanje6": "Da li više volite da crtate obične karaktere ili anime karaktere?",
        //   "pitanje7": "Da li više volite da crtate običan objekat, neku pozadinu, nekog karaktera ili nešto drugo?",
        //   "pitanje8": "Zašto bi ste želeli da uđete baš u ovaj klub?"
        // }
        
        
              message.delete()
       let prvo = new Discord.MessageEmbed()
        .setTitle("`❎` Artist Club Apply")
         .setDescription("Da bi započeo prijavu, za nastavak ukucaj `da`, za odbijanje ukucaj `ne`. Pisanjem `da` prihvataš pravila kluba i obavezu aktivnog člana.")
        .setFooter("Sve odgovore koje unesete će biti vidljivi nama.")
      message.author.send(prvo).then((newmsg) => { //Now newmsg is the message you sent
    newmsg.channel.awaitMessages(response => response.author.id == message.author.id, {
      max: 1,
      time: 30000,
      errors: ['time'],
    }).then((collected) => { 

let prihvatanje = collected.first().content.toLowerCase();
      if(prihvatanje == "da"){
        

      const prvo = new Discord.MessageEmbed()
      .setTitle("`1️⃣` | Pitanje")
      .setColor("#fecf12")
      .setDescription(pitanjaobj.pitanje1);
      newmsg.channel.send(prvo).then((newmsg) => { //Now newmsg is the message you sent
    newmsg.channel.awaitMessages(response => response.author.id == message.author.id, {
      max: 1,
      time: 30000,
      errors: ['time'],
    }).then((prviodg) => { 
    
       const drugo = new Discord.MessageEmbed()
      .setTitle("`2️⃣` | Pitanje")
      .setColor("#fecf12")
      .setDescription(pitanjaobj.pitanje2);
      newmsg.channel.send(drugo).then((newmsg) => { //Now newmsg is the message you sent
    newmsg.channel.awaitMessages(response => response.author.id == message.author.id, {
      max: 1,
      time: 30000,
      errors: ['time'],
    }).then((drugiodg) => { 
    
    
             const trece = new Discord.MessageEmbed()
      .setTitle("`3️⃣` | Pitanje")
      .setColor("#fecf12")
      .setDescription(pitanjaobj.pitanje3);
      newmsg.channel.send(trece).then((newmsg) => { //Now newmsg is the message you sent
    newmsg.channel.awaitMessages(response => response.author.id == message.author.id, {
      max: 1,
      time: 30000,
      errors: ['time'],
    }).then((treciodg) => { 
    
    
                   const cetvrto = new Discord.MessageEmbed()
      .setTitle("`4️⃣` | Pitanje")
      .setColor("#fecf12")
      .setDescription(pitanjaobj.pitanje4);
      newmsg.channel.send(cetvrto).then((newmsg) => { //Now newmsg is the message you sent
    newmsg.channel.awaitMessages(response => response.author.id == message.author.id, {
      max: 1,
      time: 30000,
      errors: ['time'],
    }).then((cetvrtiodg) => { 
    
    
       
                   const peti = new Discord.MessageEmbed()
      .setTitle("`5️⃣` | Pitanje")
      .setColor("#fecf12")
      .setDescription(pitanjaobj.pitanje5);
      newmsg.channel.send(peti).then((newmsg) => { //Now newmsg is the message you sent
    newmsg.channel.awaitMessages(response => response.author.id == message.author.id, {
      max: 1,
      time: 30000,
      errors: ['time'],
    }).then((petiodg) => { 
    
    
                        const sesto = new Discord.MessageEmbed()
      .setTitle("`6️⃣` | Pitanje")
      .setColor("#fecf12")
      .setDescription(pitanjaobj.pitanje6);
      newmsg.channel.send(sesto).then((newmsg) => { //Now newmsg is the message you sent
    newmsg.channel.awaitMessages(response => response.author.id == message.author.id, {
      max: 1,
      time: 30000,
      errors: ['time'],
    }).then((sestiodg) => { 
    
    
                              const sedmi = new Discord.MessageEmbed()
      .setTitle("`7️⃣` | Pitanje")
      .setColor("#fecf12")
      .setDescription(pitanjaobj.pitanje7);
      newmsg.channel.send(sedmi).then((newmsg) => { //Now newmsg is the message you sent
    newmsg.channel.awaitMessages(response => response.author.id == message.author.id, {
      max: 1,
      time: 30000,
      errors: ['time'],
    }).then((sedmiodg) => { 
    
    
                                    const osmo = new Discord.MessageEmbed()
      .setTitle("`8️⃣` | Pitanje")
      .setColor("#fecf12")
      .setDescription(pitanjaobj.pitanje8);
      newmsg.channel.send(osmo).then((newmsg) => { //Now newmsg is the message you sent
    newmsg.channel.awaitMessages(response => response.author.id == message.author.id, {
      max: 1,
      time: 30000,
      errors: ['time'],
    }).then((osmiodg) => { 
    

    
      const gotovo = new Discord.MessageEmbed()
            .setTitle("`✅`| **Gotovo**")
      .setColor("#fecf12")
      .setDescription("Vaša prijava je poslata predsedniku kluba! Ukoliko budete prihvaćeni, ja ću vas obavestiti!");
      newmsg.channel.send(gotovo).then((newmsg) => { //Now newmsg is t
      const gotovaprijava = message.guild.channels.cache.find(x => x.id === "735083868092104704")
      const prijavagotova = new Discord.MessageEmbed()
        .setColor("#1c7ed6")
        .setTitle("`✅` | Nova Prijava | " + message.author.tag)
        .addField("`1️⃣` | " + pitanjaobj.pitanje1, prviodg.first().content)
        .addField("`2️⃣` | " + pitanjaobj.pitanje2, drugiodg.first().content)
        .addField("`3️⃣` | " + pitanjaobj.pitanje3, treciodg.first().content)
        .addField("`4️⃣` | " + pitanjaobj.pitanje4, cetvrtiodg.first().content)
        .addField("`5️⃣` | " + pitanjaobj.pitanje5, petiodg.first().content)
        .addField("`6️⃣` | " + pitanjaobj.pitanje6, sestiodg.first().content)
        .addField("`7️⃣` | " + pitanjaobj.pitanje7, sedmiodg.first().content)
        .addField("`8️⃣` | " + pitanjaobj.pitanje8, osmiodg.first().content)
        .setFooter(message.author.id)
        .setTimestamp();
    gotovaprijava.send(prijavagotova)
      })
      
      
    })
      })
      
      
    })
      })
      
      
      
    })
      })
      
      
    })
      })
      
      
      
    })
      })
      
      
    })
      })
      
      
    })
      })
      })
    })
      }else if(prihvatanje == "ne"){
        
        message.author.send("Odbio si")
        
      const odbijeno = new Discord.MessageEmbed()
      .setTitle("🚫 | Zaustavljeno")
      .setColor("#e33939")
      .setDescription("Odustali ste od prijave za klub!")
      .setTimestamp()
      .setFooter("")
      newmsg.channel.send(odbijeno)
        
      } else {
                          const error = new Discord.MessageEmbed()
      .setTitle("🚫 | Error")
      .setColor("#e33939")
      .setDescription("Nepoznat odgovor!")
      .setTimestamp()
      .setFooter("")
      newmsg.channel.send(error)
      }
    }).catch(() => {
                  const error = new Discord.MessageEmbed()
      .setTitle("🚫 | Error `#404`")
      .setColor("#e33939")
      .setDescription("Pokušaj ponovo!")
      .setTimestamp()
      .setFooter("")
      newmsg.channel.send(error)
    })
      })
        
        
      }
  }
    