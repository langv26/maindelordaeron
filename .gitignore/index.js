// Execution automatique du bot : forever start main.js
// Arrêt du bot : forever stop main.js


const Discord = require('discord.js');

var bot = new Discord.Client();
var prefix = ("$");
var randnum = 0;

bot.on('ready', () => {
    //bot.user.setAvatar('./Hitoha.jpg').catch(console.error)
    bot.user.setPresence({ game: { name: 'En Cours de Programmation', type: 0} });
    console.log("Le Bot est prêt !")
});

bot.login(process.env.TOKEN);

bot.on('message', message => {
    if (message.content === "ping"){
        message.reply("pong")
        console.log("ping pong")
    }

    if (message.content === prefix + "help"){
        message.channel.sendMessage("Les commandes disponibles sont les suivantes :")
        
        console.log("Commande Help demandée !");
    }

    // Flippante
    
    if (message.content === "Hitoha"){
        message.reply("https://findvega25.files.wordpress.com/2011/06/mitsudomoe-02-large-22.jpg");
    }

    if (message.content === "Misuto"){
        message.channel.sendMessage("https://tenor.com/view/castle-vania-trevor-belmont-gif-9184604");
    }

    if (message.content === "Arterius"){
        message.channel.sendFile('./image/Arterius.jpg');
    }

    if (message.content === "Aryl"){
        message.channel.sendFile('./image/Aryl.jpg');
    }
    
    if (message.content === "Natsou"){
        message.channel.sendFile('./image/Natsou.gif');
    }

    if (message.content === "Beethoven"){
        message.channel.sendFile('./image/Beethoven.jpg');
    }

    if (message.content === "Ashyra"){
        message.channel.sendFile('./image/Ashyra.gif');
    }
    
    if (message.content === "Shadney"){
        message.channel.sendFile('./image/Shadney_gif.gif');
    }


    if (message.content === prefix + "rand"){
        random();
        message.reply("Tu as généré le nombre : " + randnum);
        console.log(randnum)   
    }
});

function random(min, max){
    min = Math.ceil(0);
    max = Math.floor(100);
    randnum = Math.floor(Math.random() * (max - min + 1) + min);
}
