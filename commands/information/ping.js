const { Client, Message, MessageEmbed } = require("discord.js");

module.exports = {
  name: "ping",
  aliases: ["api"],
  description: "Get Bot Ping..",
  useage: "ping",
  category : "information",
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    let ping = new MessageEmbed()
      .setColor("RED")
      .setAuthor(message.author.tag)
      .setTitle(`🎈 Ping : ${client.ws.ping}ms`)
      .setFooter("Made with 💖 by araan_sheikh#4416");
    message.channel.send(ping);
  },
};
