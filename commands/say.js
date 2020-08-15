const Discord = require('discord.js');

exports.run = async (cele, message, args) => {
  let fala = args.slice(0).join(" ")
  if(!fala) return message.channel.send(`Insere algo`)
  message.delete();
  message.channel.send(fala)
}
exports.config = {
  name: 'say',
  aliases: ['falar']
}