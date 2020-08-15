const Discord = require("discord.js")
exports.run = async(client, message, args,)=> {

    const user = client.users.get('598312098082324509')
    console.log(user.avatarUrl)

let replies = ["Você morreu!", "Você sobreviveu!", "Você levou um tiro de raspão!", "Você saiu ileso!", "Vc tomou uma facada", "vc é feio(a)", "seu lindo(a)"]
        
let result = Math.floor((Math.random() * replies.length));  


let dadoembed = new Discord.RichEmbed()

.setFooter(`Bot devloped by ${user.tag}`, user.avatarURL)
.setThumbnail(message.author.avatarURL)
.setColor('#5F04B4')
.addField("O que será que aconteceu?", replies[result]) 


message.channel.send(dadoembed); 
}