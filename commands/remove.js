const { MessageEmbed } = require("discord.js");
const sendError = require("../util/error");

module.exports = {
  info: {
    name: "remove",
    description: "Şarkıyı sıradan kaldırır",
    usage: "rm <number>",
    aliases: ["rm"],
  },

  run: async function (client, message, args) {
   const queue = message.client.queue.get(message.guild.id);
    if (!queue) return sendError("Sıra yok.",message.channel).catch(console.error);
    if (!args.length) return sendError(`Kullanım: ${process.env.PREFIX}\`remove <Queue Number>\``);
    if (isNaN(args[0])) return sendError(`Kullanım: ${process.env.PREFIX}\`remove <Queue Number>\``);
    if (queue.songs.length == 1) return sendError("Sıra yok.",message.channel).catch(console.error);
    if (args[0] > queue.songs.length)
      return sendError(`Sıra ${queue.songs.length} şarkı uzunluğunda!`,message.channel).catch(console.error);
try{
    const song = queue.songs.splice(args[0] - 1, 1); 
    sendError(`❌ **|** Kaldırıldı: **\`${song[0].title}\`** sıradan kaldırıldı.`,queue.textChannel).catch(console.error);
                   message.react("✅")
} catch (error) {
        return sendError(`:notes: Beklenmeyen bir hata oluştu.\nOlası tip: ${error}`, message.channel);
      }
  },
};
