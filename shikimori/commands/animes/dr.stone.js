const Discord = require("discord.js")
const config = require("../../../config.json");
const anime = require("../../bdd/dr.stone.json")
const pagination = require("discord.js-pagination")



module.exports.run = async(client, message, args) => {

    const saison1 = new Discord.MessageEmbed()
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

**Source** : ${anime.source}
**Genres** : ${anime.genres}

**Synopsis** : ${anime.synopsis}`)

    const saison2 = new Discord.MessageEmbed()
    .setColor(config.color2)
    .setTitle(anime.title2)
    .setDescription(`
**Format** : ${anime.format2}
**Épisodes** : ${anime.episodes2}
**Durée d'épisode** : ${anime.episode_duration2}

**Status** : ${anime.status2}
**Date de début** : ${anime.start_date2}
**Date de fin** : ${anime.end_date2}

**Saison** : ${anime.season2}
**Studios** : ${anime.studios2}

**Source** : ${anime.source2}
**Genres** : ${anime.genres2}

**Synopsis** : ${anime.synopsis2}`)

    const pages = [
        saison1,
        saison2
    ]

    const emoji = ["⬅️" , "➡️"]

    const timeout = "100000"

    pagination(message, pages, emoji, timeout)
}

module.exports.help = {
    name:'dr-stone',
    aliases:['drstone'],
    category : 'animes'

}