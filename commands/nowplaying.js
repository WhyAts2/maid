const { MessageEmbed } = require("discord.js");
const sendError = require("../util/error")

module.exports = {
  info: {
    name: "nowplaying",
    description: "Bu sunucuda şu anda çalan müziği gösterir",
    usage: "",
    aliases: ["np"],
  },

  run: async function (client, message, args) {
    const serverQueue = message.client.queue.get(message.guild.id);
    if (!serverQueue) return sendError("Bu sunucuda oynatılan hiçbir şey yok.", message.channel);
    let song = serverQueue.songs[0]
    let thing = new MessageEmbed()
      .setAuthor("Şuanda Oynatılıyor", "https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/Music.gif")
      .setThumbnail(song.img)
      .setColor("BLUE")
      .addField("Ad", song.title, true)
      .addField("Uzunluk", song.duration, true)
      .addField("Tarafından istendi:", song.req.tag, true)
      .setFooter(`Görüntülenme: ${song.views} | ${song.ago}`)
    return message.channel.send(thing)
  },
};
