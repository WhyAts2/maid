const { MessageEmbed } = require("discord.js");

module.exports = {
  info: {
    name: "invite",
    description: "Botun davet linki",
    usage: "[invite]",
    aliases: ["inv"],
  },

  run: async function (client, message, args) {
    
    let invite = new MessageEmbed()
    .setTitle(`Invite ${client.user.username}`)
    .setDescription(`Beni sunucunuzda ister misiniz? Beni bugün davet edin! \n\n [Invite Link](https://discord.com/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot)`)
    .setColor("BLUE")
    return message.channel.send(invite);
  },
};
