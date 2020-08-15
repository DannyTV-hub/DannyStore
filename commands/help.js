const Discord = require("discord.js");


module.exports.run = async (client, message, args) => {

  let embedajuda = new Discord.RichEmbed()

  .setTitle("**AJUDA**")
  .setDescription("Olá, meu prefix é `.`. Aqui estão todas as coisas que posso fazer.")
  .setColor("BLACK")
  .addField(":man_police_officer: - **MODERAÇÃO**", "`ban` **|** `kick` **|** `clear `**|** `listban` **|** `embed` **|** `punir` **|** `giveaway`")
  .addField(":man_raising_hand: - **MEMBROS**", "`avatar` **|** `say` **|** `sugerir` **|** `ticket` **|** `donete` **|** `serverinfo` **|** `discord` **|** `userinfo` **|** `servericon` ")
  .addField(":robot: - **BOT INFORMAÇÃO**", "`help/ajuda` **|** `botinfo` **|** `ping` **|** `creditos`")
  .addField(":tada: - **DIVERSÃO**", "`tapa` **|** `coinflip` `biscoito` **|** `jokempo` **|** `mcskin` **|** `mchead` **|** `cat` **|** `kiss` **|** `emojis` **|** `high-five`")

  message.channel.send(embedajuda); //ele irá enviar a mensagem no privado da pessoa, caso queira que ele envie no chat mesmo, troque message.author.send(embedajuda), por message.channel.send(embedajuda)
    
}

exports.config = {
  name: "ajuda",
  aliases: ["help"]
  }