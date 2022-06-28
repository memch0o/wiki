const config = require("../../config.json");


module.exports = async (client, message) => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return client.emit("directMessage", message);
    if(message.author.bot) return;

    if(!message.content.startsWith(config.PREFIX) || message.author.bot) return;

    const args = message.content.slice(config.PREFIX.length).trim().split(/ +/g);
    const commande = args.shift();

    const cmd = client.commands.has(commande) ? client.commands.get(commande) : client.commands.get(client.aliases.get(commande))

    if(!cmd) return;

    cmd.run(client, message, args);
};