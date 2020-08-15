exports.run = (client, message, args) => {
  const Discord = require('discord.js')
  const moment = require('moment')
    message.delete()
  
  moment.locale('pt-BR')
  
    let User
    if (!args[0]) User = message.member // Se nao for passado primeiro arg, User é quem digitou deu comando
    let mention = message.mentions.members.first() // Se houve mention, ela é true 
    if (mention) User = mention 
    if (!User) {
        try {
            console.log('-entrei no block try')
            User = message.guild.members.get(args[0]) 
            if (!User) return message.reply('<:errado:695709387943182496> Esse usuário não foi encontrado.') 
        }
        catch(err) {
            console.log('-entrei no bloco catch')
            return 
        }
    }
  
    const contaCriada = moment(User.user.createdTimestamp).format('lll') // Formato DD do MMM do AAAA às hh:mm
    const diasContaCriada = moment.duration(message.createdTimestamp - User.user.createdTimestamp).asDays() // Dias de criaçao da conta
    const entrouNoServer = moment(User.joinedTimestamp).format('lll') // Data de entrada no server
    const diasEntrouNoServer = moment.duration(message.createdTimestamp - User.joinedTimestamp).asDays() // Dias de entrada no server
    const embed = new Discord.RichEmbed()
        .setTitle(`:discord: Perfil de ${User.user.username}`)
        .setColor('#FAFAFA')
        .addField('``👤``・Discord Tag:', User.user.tag)
        .addField('``📆``・Entrou no Discord em:', `${contaCriada} (${Math.floor(diasContaCriada)} dias)`)
        .addField('``📆``・Entrou no server em:', `${entrouNoServer} (${Math.floor(diasEntrouNoServer)} dias)`)    
        .addField('``💼``・Cargos:', `${User.roles.map(r => r).join(' ')}`)
        .setThumbnail(User.avatarURL)

    message.channel.send(embed)
}

exports.config = {
    name: 'userinfo',
    aliases: ['userinfo', 'user']
}