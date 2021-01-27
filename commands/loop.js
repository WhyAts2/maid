const { MessageEmbed } = require("discord.js");
const sendError = require("../util/error");

module.exports = {
  info: {
    name: "loop",
    description: "Müzik döngüsünü aç / kapat",
    usage: "loop",
    aliases: ["l"],
  },

  run: async function (client, message, args) {
    const serverQueue = message.client.queue.get(message.guild.id);
       if (serverQueue) {
            serverQueue.loop = !serverQueue.loop;
            return message.channel.send({
                embed: {
                    color: "GREEN",
                    description: `🔁  **|**  Loop **\`${serverQueue.loop === true ? "açıldı" : "kapatıldı"}\`**`
                }
            });
        };
    return sendError("Bu sunucuda oynatılan hiçbir şey yok.", message.channel);
  },
};
