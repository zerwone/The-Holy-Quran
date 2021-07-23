const { MessageEmbed } = require("discord.js");
const chalk = require("chalk");

module.exports = {
  name: "quran",
  cooldown: 10,
  aliases: ["moshf"],

  run: async function(client, message) {
    var nemopadonem = require("../../data/base/quran");
    var hamounewmo = 1;

 var _0x5cec=['61lBDLrV','154058RfOESH','11626DDWDLP','506771HUNmCJ','1eQkNPc','919845OCHfMN','username','1nBFTon','setImage','The\x20Quran','author','https://cdn.discordapp.com/attachments/796003807095816263/867286310812254238/download.jpg','#000100','avatarURL','1FevlOy','\x20out\x20of\x20','12067lIsRps','24779wlsycJ','length','42YJVZRx','35haHSrP','8ZGRfUZ','setAuthor','341203NVkZPh','Page\x20number\x20','\x20pages\x0aMade\x20by\x20<@689139487258705965>'];var _0x44c307=_0x4aca;(function(_0x5e45e3,_0x507c1a){var _0x221199=_0x4aca;while(!![]){try{var _0x52de8b=-parseInt(_0x221199(0x84))*parseInt(_0x221199(0x86))+-parseInt(_0x221199(0x87))*parseInt(_0x221199(0x8b))+parseInt(_0x221199(0x7d))*-parseInt(_0x221199(0x95))+-parseInt(_0x221199(0x88))*-parseInt(_0x221199(0x81))+-parseInt(_0x221199(0x92))*-parseInt(_0x221199(0x89))+parseInt(_0x221199(0x7f))*parseInt(_0x221199(0x85))+parseInt(_0x221199(0x7e))*parseInt(_0x221199(0x94));if(_0x52de8b===_0x507c1a)break;else _0x5e45e3['push'](_0x5e45e3['shift']());}catch(_0x48365b){_0x5e45e3['push'](_0x5e45e3['shift']());}}}(_0x5cec,0xa0eee));function _0x4aca(_0x418b5a,_0x4f555a){return _0x4aca=function(_0x5cecf4,_0x4aca23){_0x5cecf4=_0x5cecf4-0x7c;var _0xbc831=_0x5cec[_0x5cecf4];return _0xbc831;},_0x4aca(_0x418b5a,_0x4f555a);}var embed=new MessageEmbed()['setColor'](_0x44c307(0x90))['setTitle'](_0x44c307(0x8d))[_0x44c307(0x80)](message['author'][_0x44c307(0x8a)],message[_0x44c307(0x8e)][_0x44c307(0x91)]())['setFooter'](_0x44c307(0x82)+hamounewmo+_0x44c307(0x93)+nemopadonem[_0x44c307(0x7c)]+_0x44c307(0x83),_0x44c307(0x8f))[_0x44c307(0x8c)](nemopadonem[hamounewmo-0x1]);
    message.channel.send(embed).then(msg => {
      msg.react("⬅");
      msg.react("➡").then(() => {
        let backwardsFilter = (reaction, user) =>
          reaction.emoji.name === "⬅" && user.id === message.author.id;
        let forwardsFilter = (reaction, user) =>
          reaction.emoji.name === "➡" && user.id === message.author.id;
        let backwards = msg.createReactionCollector(backwardsFilter, {
          time: 0
        });
        let forwards = msg.createReactionCollector(forwardsFilter, { time: 0 });
        backwards.on("collect", r => {
          if (hamounewmo === 1) return;
          hamounewmo--;
          embed.setImage(nemopadonem[hamounewmo - 1]);
          embed.setFooter(
            `Page number ${hamounewmo} out of ${nemopadonem.length} pages`,
            "https://cdn.discordapp.com/attachments/796003807095816263/867286310812254238/download.jpg"
          );
          msg.edit(embed);
          r.users.remove(message.author.id).catch(err => console.log(err));
        });
        forwards.on("collect", r => {
          if (hamounewmo === nemopadonem.length) return;
          hamounewmo++;
          embed.setImage(nemopadonem[hamounewmo - 1]);
          embed.setFooter(
            `Page number ${hamounewmo} out of ${nemopadonem.length} pages`,
            "https://cdn.discordapp.com/attachments/796003807095816263/867286310812254238/download.jpg"
          );
          msg.edit(embed);
          r.users.remove(message.author.id).catch(err => console.log(err));
        });
      });
    });
  }
};
