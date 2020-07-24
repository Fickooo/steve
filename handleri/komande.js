
const { readdirSync } = require("fs");
// yo vacap, ar ju dere
const ascii = require("ascii-table");

// Create a new Ascii table
let table = new ascii("Steve Public Bot");
table.setHeading("Commands", "Loading");

module.exports = (client) => {
    // Read every commands subfolder
    readdirSync("./komande/").forEach(dir => {
        // Filter so we only have .js command files
        const commands = readdirSync(`./komande/${dir}/`).filter(file => file.endsWith(".js"));
    
        // Loop over the commands, and add all of them to a collection
        // If there's no name found, prevent it from returning an error,
        // By using a cross in the table we made.
        for (let file of commands) {
            let pull = require(`../komande/${dir}/${file}`);
    
            if (pull.name) {
                client.commands.set(pull.name, pull);
                table.addRow(file, '✅');
            } else { 
                table.addRow(file, `❌  -> ERROR.`);
                continue; 
              
            }
    
          //jer pokazacu ti template
          //aj u ping.js xd
            // If there's an aliases key, read the aliases.
            if (pull.aliases && Array.isArray(pull.aliases)) pull.aliases.forEach(alias => client.aliases.set(alias, pull.name));
        }
    })
    // Log the table
    console.log(table.toString());
}

