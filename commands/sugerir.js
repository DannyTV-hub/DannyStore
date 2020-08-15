const Discord = require('discord.js')
const c = require('../config.json')
exports.run = async (client, message, args) => {
    await message.delete()

    let mensg = args.join(' ')
    if (!mensg) {
        message.channel.send(`${message.author}, digite uma sugestão. :mailbox_with_no_mail:`)
        return undefined;
    }

    const embed = new Discord.RichEmbed()
        .setAuthor(`Sugestão de: ${message.author.username}`, message.author.displayAvatarURL)
        .setDescription(`${mensg}`)
        .setColor('2899536')
        .setThumbnail(message.author.displayAvatarURL)
        .setTimestamp()
    client.channels.get(`720409118778720337`).send(embed)
        .then(function (msg) {
            msg.react("<a:tudocerto:720394459229192272>");
            msg.react("<a:tudoerrado:720394474143875162>"); 
            message.delete({
                timeout: 1000
            });
            message.channel.send(`${message.author}, sua sugestão foi enviada em <#622308143812050964>. :mailbox_with_no_mail:`).then(msg => msg.delete(5000))
        }).catch(function (error) {
            console.log(error);
        });
}

exports.help = {
    name: "sugestao",
    aliases: [
        "sugerir",
        "sugestão"
    ]
}