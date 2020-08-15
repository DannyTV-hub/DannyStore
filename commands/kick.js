const Discord = require('discord.js');

exports.run = async (dih, message, args) => {
  if(!message.guild.me.hasPermission("KICK_MEMBERS")) return message.channel.send(`<a:tudoerrado:719590955262541924> • Desculpe **${message.author}**, mas meu cargo não possui a permissão **\`Expulsar Membros\`**`)
  if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(`<a:tudoerrado:719590955262541924> • Desculpe **${message.author}**, mas você não possui a permissão **\`Expulsar Membros\`**`)
  
  let User = message.mentions.users.first() || dih.users.get(args[0]);
  let Reason = args.slice(1).join(" ");
  
  if(!User) return message.channel.send(`<a:tudoerrado:719590955262541924> • Desculpe **${message.author}**, mas você não inseriu um \`usuário\` a ser expulso!`)
  if(User.id === message.author.id) return message.channel.send(`<a:tudoerrado:719590955262541924> • Desculpe **${message.author}**, você não pode se **expulsar!**`)
  
  if(!message.guild.member(User).bannable) return message.channel.send(`<a:tudoerrado:719590955262541924> • Desculpe **${message.author}**, você não pode expulsar este **usuário!**`)
  if(Reason.length < 1) return message.channel.send(`<a:tudoerrado:719590955262541924> • Desculpe **${message.author}**, mas você não inseriu um \`motivo\` para eu expulsar este usuário!`)
  
  await message.guild.member(User).kick(Reason).then(() => {
    message.channel.send(`<a:tudocerto:719567087596470334> • Ei **${message.author}**, o usuário **\`${User.username}\`** foi expulso com sucesso! cujo motivo foi: **${Reason}**`)
    })
}

exports.config = {
  name: 'kick',
  aliases: ['expulsar']
}