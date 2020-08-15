const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let msg = await message.channel.send("Gerando Avatar... <:DM:719564425182445579>");

    let mentionedUser = message.mentions.users.first() || message.author;

        let embed = new Discord.RichEmbed()

        .setImage(mentionedUser.displayAvatarURL)
        .setColor("BLUE")
        .setTitle("Avatar <a:tudocerto:719567087596470334>")
        .setFooter("Quem pesquisou: " + message.author.tag)
        .setDescription("[Link do avatar <:info:719564520338751544>]("+mentionedUser.displayAvatarURL+")");

        message.channel.send(embed)


    msg.delete();
}

module.exports.config = {
    name: "avatar"
}