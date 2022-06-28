const Discord = require("discord.js")
const config = require("../../../config.json");
const anime = require("../../bdd/bokutachi.no.remake.json")



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
    name:'bokutachi-no-remake',
    aliases:['bokutachinoremake', 'remake-our-life', 'remakeourlife'],
    category : 'animes'
}