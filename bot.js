const Discord = require("discord.js") // baixar lib
const jimp =require("jimp")
const client = new Discord.Client();
const config = require("./config.json")
client.prefix = config.prefix;

client.on("ready", () => {
    console.log(`\n-=-=-=-=-=O bot foi iniciado=-=-=-=-=-\nUsuarios: ${client.users.size}\nCanais: ${client.channels.size}\nGrupos: ${client.guilds.size}\n\n-=-=-=-=-= LOGS =-=-=-=-=-`);
        let status = [
            { name: 'Among US ', type: 'PLAYING' },
        ];
    
        //STREAMING = Transmitindo
        //LISTENING = Ouvindo
        //PLAYING = Jogando
        //WATCHING = Assistindo
    
        function setStatus() {
            let randomStatus = status[Math.floor(Math.random() * status.length)];
            client.user.setPresence({ game: randomStatus });
        }
    
        setStatus();
        setInterval(() => setStatus(), 10000);  //10000 = 10Ms = 10 segundos

        
});


client.on("message", async message =>{

    let convite = /(discord.gg|discordapp.com|discord.io)\/(invite)?/ig.test(message.content)
    if(convite === true) {
        if(message.member.hasPermission('BAN_MEMBERS')) return;
        message.delete();
        message.reply('🚫 **Opa aqui não pode divulgar links, cuidado para não tomar mute**')
    }

    let msg = message.content.toLowerCase();
    if (message.author.bot) return undefined;

    
    if(message.content.indexOf(client.prefix) !== 0) return;
    
    const args = message.content.slice(client.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();


    try{

        let commands = require(`./commands/${command}.js`);
        commands.run(client, message, args);
    
    } catch (e) {
        console.log(e);
    } finally{}

    
});

client.on('guildMemberAdd', member => {
    client.channels.get('719314082351808517').send(new Discord.RichEmbed().setTitle('**NOVO MEMBRO EM NOSSO SERVIDOR**').setColor("BLUE").setDescription(`👋 Olá ${member}, Seja **Bem vindo(a)** ${member.guild.name}.\n🙂 Sabia que... Você é o ${member.guild.memberCount}° membro a entrar em nosso server?.\n🔨 Leia as **Regras** para não tomar ban.`).setFooter('Bot developed by Nogui#1111', client.users.get('598312098082324509').displayAvatarURL));
var role = member.guild.roles.find('name', 'User');
member.addRole('720078269168353361')
   
});





client.login(config.token)