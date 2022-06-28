const {Client, Collection} = require('discord.js');
const client = new Client();
const config = require("./config.json");

const fs = require ('fs');
client.categories = fs.readdirSync("./shikimori/commands/");
client.config = require("./config.json");
client.login(config.token);
client.commands = new Collection();
client.aliases = new Collection();


const loadCommands = (dir = `./shikimori/commands/`) => {
    fs.readdirSync(dir).forEach(dirs => {
        const commands = fs.readdirSync(`${dir}/${dirs}/`).filter(files => files.endsWith(".js"));

        for (const file of commands) {
            const getFileName = require(`${dir}/${dirs}/${file}`);
            client.commands.set(getFileName.help.name, getFileName);
            console.log(`- ${getFileName.help.name}`)
        };
    });
};

loadCommands();



fs.readdir("./shikimori/events/", (error, f) => {
    if(error) console.log(error);
    console.log(`${f}`);

    f.forEach((f) => {
        const events = require(`./shikimori/events/${f}`);
        const event = f.split(".")[0];

    client.on(event, events.bind(null, client));

    });
    
});

module.exports.client = client