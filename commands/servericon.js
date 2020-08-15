const Discord = require("discord.js");
 
exports.run = (bot, message, args) => {
 
    let embed = new Discord.RichEmbed()
 
    .setColor('PINK')
    .setTitle(`${message.guild.name}`)
    .setDescription("[Link de Download](" + message.guild.iconURL + ")")
    .setImage(message.guild.iconURL)
 
    message.reply(embed)
 
}
 
exports.help = {
    name: 'servericon'
}