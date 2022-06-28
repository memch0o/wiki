const Discord = require("discord.js")
const config = require("../../../config.json");



module.exports.run = async(client, message, args) => {

    const embed = new Discord.MessageEmbed()
    .setColor(config.color)
    .setTitle(`Saber's anime`)
    .setDescription(`
${client.commands.filter(x => x.help.category === "animes").map(x => `- \`${x.help.name}\``).join("\n")}
`)
    message.channel.send(embed)
}

module.exports.help = {
    name:'animes',
    aliases:['anime'],

}