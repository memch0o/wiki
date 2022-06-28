const Discord = require("discord.js")
const config = require("../../../config.json");
const anime = require("../../bdd/beelzebub.json")



module.exports.run = async(client, message, args) => {

    const embed = new Discord.MessageEmbed()
    .setColor(config.color)
    .setTitle(anime.title)
    .setDescription(`
**Créateur** : ${anime.creator}

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
    name:'beelzebub',
    aliases:['beelzebub'],
    category : 'animes'

}