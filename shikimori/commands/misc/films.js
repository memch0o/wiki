const Discord = require("discord.js")
const config = require("../../../config.json");



module.exports.run = async(client, message, args) => {

    const embed = new Discord.MessageEmbed()
    .setColor(config.color)
    .setTitle(`Komi's film`)
    .setDescription(`
${client.commands.filter(x => x.help.category === "films").map(x => `- \`${x.help.name}\``).join("\n")}
`)
    message.channel.send(embed)
}

module.exports.help = {
    name:'films',
    aliases:['film', 'movies'],

}