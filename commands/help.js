const Discord = require('discord.js');

exports.run = (client, message, args) => {
  let user = message.mentions.users.first() || message.author;
  let embed = new Discord.RichEmbed()
  .setThumbnail(user.displayAvatarURL)
  message.channel.send({embed: {
    color: 8359053,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    
    title: "Prefix: `>`",
    fields: [{
        name: "Music",
        value: "`p` `play` `leave` `**BAYU GANTENG**` `queue` `skip` `resume`"
      }//,
//      {
//        name: "Catatan",
 //       value: "`Bot music belum dirilis, jadi harap tunggu beberapa minggu lagi 'belajar dulu'.`\n"
//      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "Dev ©VincenGize#7202"
    }
  }
});
};