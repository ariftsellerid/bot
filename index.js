const Discord = require("discord.js");
const music = new Discord.Client({disableEveryone: true});
music.commands = new Discord.Collection();
const superagent = require("superagent");
const {color} = require('./config.json');
const queue = new Map();
const ytdl = require("ytdl-core");

const http = require('http');
const fs = require("fs");
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log('Pinging');
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);


music.on('message', async message => {

    let prefix = '>';
    let msg = message.content.toLowerCase();
    let args = message.content.slice(prefix.length).trim().split(" ");
    let cmd = args.shift().toLowerCase();
    let sender = message.author;

    if (!msg.startsWith(prefix)) return;
    if (sender.bot) return;
    
    try {
        let commandFile = require(`./commands/${cmd}.js`); 
        commandFile.run(music, message, args, color, queue); 
    } catch(e) { 
        console.log(e.message); 
    } finally { 
        console.log(`${message.author.username} ran the command: ${cmd} on ${message.guild.name}`);
    }
  if (message.content.startsWith(prefix + "radio pop")) {
message.member.voiceChannel.join().then(connection => {  
 console.log('Music sedang berjalan')
  const dispatcher = connection.playStream(ytdl(`https://www.youtube.com/watch?v=taD9hqwCb1o`));
  connection.dispatcher.setVolumeLogarithmic(0.8);

});
let vEmbed = new Discord.RichEmbed()
.setDescription('**📻 Radio `POP ENGLISH` Berhasil duputar 📻**')
.setColor("#0093f3");  
message.channel.send(vEmbed);

  }
});


music.login(process.env.TOKEN);

music.on("ready", async () => {
  

  
    console.log(`Logged in as : ${music.user.tag}`);
    console.log(`${music.user.username} is ready!`)
              
});

