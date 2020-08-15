const Discord = require('discord.js');

exports.run = async (dih, message, args) => {
  if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send(`<a:tudoerrado:719590955262541924> • Desculpe **${message.author.username}**, mas meu cargo não possui a permissão **\`Banir Membros\`**`)
  if(!message.guild.member(message.author.id).hasPermission("BAN_MEMBERS")) return message.channel.send(`<a:tudoerrado:719590955262541924> • Desculpe **${message.author.username}**, mas você não possui a permissão **\`Banir Membros\`**`)
  
  let User = message.mentions.users.first() || dih.users.get(args[0]);
  let Reason = args.slice(1).join(" ");
  
  if(!User) return message.channel.send(`<a:tudoerrado:720394474143875162>  • Desculpe **${message.author.username}**, mas você não inseriu um \`usuário\` a ser banido! `)
  if(User.id === message.author.id) return message.channel.send(`<a:tudoerrado:719590955262541924> • Desculpe **${message.author.username}**, você não pode se **banir!**`)
  
  if(!message.guild.member(User).bannable) return message.channel.send(`<a:tudoerrado:720394474143875162>  • Desculpe **${message.author.username}**, você não pode banir este **usuário!**`)
  if(Reason.length < 1) return message.channel.send(`<a:tudoerrado:720394474143875162>  • Desculpe **${message.author.username}**, mas você não inseriu um \`motivo\` para eu banir este usuário!`)
  
  await message.guild.member(User).ban(Reason).then(() => {
    message.channel.send(`<a:tudocerto:720394459229192272>  • Ei **${message.author.username}**, o usuário **\`${User.username}\`** foi banido com sucesso! cujo motivo foi: **${Reason}** <a:bongo:714105559267409933>`)
    })
}

exports.config = {
  name: 'ban',
  aliases: ['banir']
}
//<:cancel:703582964956659742>
//<:success:703582965015379998>
//<a:tudoerrado:720394474143875162> 