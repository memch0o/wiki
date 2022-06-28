const Discord = require("discord.js");
const config = require("../../config.json")
module.exports = async(client) => {

  const embed = new Discord.MessageEmbed()
  .setTitle(`Reboot`)
  .setDescription(`My reboot was successful ! \n No problem detected. \n My prefix is \`${config.PREFIX}\``)
  .setColor(config.color)
  .setTimestamp()
  client.channels.cache.get('980065829326565396').send(embed)
  client.user.setActivity(`.gg/tashigi`, {
    type: "LISTENING",
  })
}