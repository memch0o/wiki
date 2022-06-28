const Discord = require("discord.js")
const config = require("../../../config.json");
const anime = require("../../bdd/fate.stay.night.heaven.feel.json")
const pagination = require("discord.js-pagination")



module.exports.run = async(client, message, args) => {

    const film1 = new Discord.MessageEmbed()
    .setColor(config.colorfilm)
    .setTitle(anime.title)
    .setDescription(`
**Format** : ${anime.format}
**Épisodes** : ${anime.episodes}
**Durée d'épisode** : ${anime.episode_duration}

**Status** : ${anime.status}
**Date de début** : ${anime.start_date}

**Saison** : ${anime.season}
**Studios** : ${anime.studios}

**Source** : ${anime.source}
**Genres** : ${anime.genres}

**Synopsis** : ${anime.synopsis}`)

const film2 = new Discord.MessageEmbed()
.setColor(config.colorfilm2)
.setTitle(anime.title2)
.setDescription(`
**Format** : ${anime.format2}
**Épisodes** : ${anime.episodes2}
**Durée d'épisode** : ${anime.episode_duration2}

**Status** : ${anime.status2}
**Date de début** : ${anime.start_date2}

**Saison** : ${anime.season2}
**Studios** : ${anime.studios2}

**Source** : ${anime.source2}
**Genres** : ${anime.genres2}

**Synopsis** : ${anime.synopsis2}`)

const film3 = new Discord.MessageEmbed()
.setColor(config.colorfilm3)
.setTitle(anime.title3)
.setDescription(`
**Format** : ${anime.format3}
**Épisodes** : ${anime.episodes3}
**Durée d'épisode** : ${anime.episode_duration3}

**Status** : ${anime.status3}
**Date de début** : ${anime.start_date3}

**Saison** : ${anime.season3}
**Studios** : ${anime.studios3}

**Source** : ${anime.source3}
**Genres** : ${anime.genres3}

**Synopsis** : ${anime.synopsis3}`)

    const pages = [
        film1,
        film2,
        film3
    ]

    const emoji = ["⬅️" , "➡️"]

    const timeout = "100000"

    pagination(message, pages, emoji, timeout)
}

module.exports.help = {
    name:'fate-stay-night-heaven-feel',
    aliases:['fate/hf'],
    category : 'films'

}