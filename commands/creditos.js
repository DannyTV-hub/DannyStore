const Discord = require("discord.js");
const bot = new Discord.Client();
exports.run = (client, message, args) => {
      const embed = new Discord.RichEmbed()
      .setColor(0x00A2E8)
      .addField("Developer", "</danny> TV#0001")
      .addField("Special thanks too:", `@‹‹Vinicius››#6439 , @Miike G#4004 `)
      .setTimestamp()
      .setFooter(client.user.username, client.user.avatarURL);
      message.channel.send({embed}) 
 }
   