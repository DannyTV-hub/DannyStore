const Discord = require('discord.js');

exports.run = (dih, message, args) => {
  if(!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`<a:tudoerrado:719590955262541924> • Desculpe **${message.author.username}**, mas meu cargo não possui a permissão **\`Gerenciar Mensagens\`**`)
  if(!message.guild.member(message.author.id).hasPermission("MANAGE_MESSAGES")) return message.channel.send(`<a:tudoerrado:719590955262541924> • Desculpe **${message.author.username}**, mas você não possui a permissão **\`Gerenciar Mensagens\`**`)

  if(!args[0]) return message.channel.send(`<a:tudoerrado:720394474143875162> • Desculpe **${message.author.username}**, mas você não inseriu uma **quantia de mensagens** a serem \`limpas!\``)
  
  const deleteCount = parseInt(args[0], 10);
  if (!deleteCount || deleteCount < 2 || deleteCount > 100) return message.channel.send(`<a:tudoerrado:719590955262541924> • Desculpe **${message.author.username}**, mas você deve inserir uma quantia de mensagens de **\`2 à 100\`**`)
  message.channel.bulkDelete(args[0]).then(() => {
    message.channel.send(`\<a:tudocerto:720394459229192272>  • **${message.author.username}**, foram limpas um total de \`${args[0]} mensagens!\``).then(msg => {
      setTimeout(() => {
        msg.delete();
      }, 3000)
    })
  })
}
exports.config = {
  name: 'clear',
  aliases: ['limpar']
}