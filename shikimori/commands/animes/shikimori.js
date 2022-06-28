const Discord = require("discord.js")
const config = require("../../../config.json");
const anime = require("../../bdd/shikimori.json")



module.exports.run = async(client, message, args) => {

    const embed = new Discord.MessageEmbed()
    .setColor(config.color)
    .setTitle(anime.title)
    .setDescription(`
**Format** : ${anime.format}
**Épisodes** : ${anime.episodes}
**Durée d'épisode** : ${anime.episode_duration}

**Status** : ${anime.status}
**Date de début** : ${anime.start_date}
**Date de fin** : ${anime.end_date}

**Saison** : ${anime.season}
**Studios** : ${anime.studios}

**Producteurs** : ${anime.producers}

**Source** : ${anime.source}
**Genres** : ${anime.genres}

**Synopsis** : ${anime.synopsis}`)
    message.channel.send(embed)
}

module.exports.help = {
    name:'kawaii-dake-ja-nai-shikimori-san',
    aliases:['shikimori', 'shikimori-san'],
    category : 'animes'

}