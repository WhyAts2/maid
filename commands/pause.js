const { MessageEmbed } = require("discord.js");
const sendError = require("../util/error");

module.exports = {
  info: {
    name: "pause",
    description: "Sunucudaki mevcut müziği duraklatır",
    usage: "[pause]",
    aliases: ["pause"],
  },

  run: async function (client, message, args) {
    const serverQueue = message.client.queue.get(message.guild.id);
    if (serverQueue && serverQueue.playing) {
      serverQueue.playing = false;
	    try{
      serverQueue.connection.dispatcher.pause()
	  } catch (error) {
        message.client.queue.delete(message.guild.id);
        return sendError(`:notes: Kullanıcı durdu ve sıra temizlendi.: ${error}`, message.channel);
      }	    
      let xd = new MessageEmbed()
      .setDescription("⏸ Müziği senin için duraklattım!")
      .setColor("YELLOW")
      .setTitle("Müzik durduruldu!")
      return message.channel.send(xd);
    }
    return sendError("Bu sunucuda oynatılan hiçbir şey yok.", message.channel);
  },
};
