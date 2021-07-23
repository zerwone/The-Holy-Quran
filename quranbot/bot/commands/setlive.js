const url = "https://www.youtube.com/watch?v=-rDw9oLHoNw";
const fs = require('fs');
const db = require('quick.db');
const ytdl = require('ytdl-core');
const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "setlive",
  cooldown: 20,
  aliases: ["setquran"],

  run: async function(client, message, args) {
  if(message.author.bot) return;
  if(!message.guild) return;
  if (!message.member.hasPermission("ADMINISTRATION")) {
      return 
    }
    let channel = message.mentions.channels.first()
    
    if(!channel) {
		message.channel.send(`❌ | Please Mention the \`VOICE\` channel first\n
		\`!setlive <#channel-id>\``);
    }
        
    db.set(`quranlivech_${message.guild.id}`, channel.id)
	let room = db.get(`quranlivech_${message.guild.id}`)
const _0xcd6d=['2PJWQdO','setDescription','channel','setFooter','connections','415475meuZsR','Please\x20wait\x203\x20seconds','Please\x20wait\x204\x20seconds','659172XgUONe','edit','guild','6181321McuIwa','Please\x20wait\x202\x20seconds','play','cache','271lTJlfV','702113bgIOhx','1NOuvkr','\x0a\x0a\x09To\x20play\x20the\x20live,\x20\x20the\x20command\x20`!live`','1NBeSTh','BLACK','get','send','setColor','setTimestamp','778QOKGTs','channels','then','1333068CYVZjj','1385693DhcwQj','Made\x20by\x20<@689139487258705965>','fetch','Please\x20wait\x205\x20seconds','voice','Please\x20wait\x201\x20seconds'];const _0x38dfed=_0x3a67;function _0x3a67(_0x55f081,_0x124a72){return _0x3a67=function(_0xcd6d6,_0x3a67bb){_0xcd6d6=_0xcd6d6-0xb8;let _0x30b190=_0xcd6d[_0xcd6d6];return _0x30b190;},_0x3a67(_0x55f081,_0x124a72);}(function(_0x50632c,_0x568edf){const _0x16344a=_0x3a67;while(!![]){try{const _0x567434=-parseInt(_0x16344a(0xc9))+parseInt(_0x16344a(0xd5))*-parseInt(_0x16344a(0xbe))+-parseInt(_0x16344a(0xca))+parseInt(_0x16344a(0xd0))*-parseInt(_0x16344a(0xbd))+-parseInt(_0x16344a(0xc6))*parseInt(_0x16344a(0xbc))+parseInt(_0x16344a(0xc0))*-parseInt(_0x16344a(0xd8))+parseInt(_0x16344a(0xb8));if(_0x567434===_0x568edf)break;else _0x50632c['push'](_0x50632c['shift']());}catch(_0x2a02b9){_0x50632c['push'](_0x50632c['shift']());}}}(_0xcd6d,0xbcaf1),setInterval(async function(){const _0x4ea4b8=_0x3a67;if(!client[_0x4ea4b8(0xce)][_0x4ea4b8(0xd4)][_0x4ea4b8(0xc2)](message[_0x4ea4b8(0xda)]['id'])){let _0x47b3f6=client[_0x4ea4b8(0xc7)][_0x4ea4b8(0xbb)][_0x4ea4b8(0xc2)](room)||await client[_0x4ea4b8(0xc7)][_0x4ea4b8(0xcc)](room);if(!room)return;const _0x1a8a9c=await _0x47b3f6['join']();_0x1a8a9c[_0x4ea4b8(0xba)](ytdl(url));}},0x1388),message[_0x38dfed(0xd2)][_0x38dfed(0xc3)]({'embed':new MessageEmbed()[_0x38dfed(0xd1)](_0x38dfed(0xcd))[_0x38dfed(0xc4)]('BLACK')[_0x38dfed(0xd3)](_0x38dfed(0xcb))})[_0x38dfed(0xc8)](function(_0x487cfd){setTimeout(function(){const _0x5b206c=_0x3a67;_0x487cfd[_0x5b206c(0xd9)]({'embed':new MessageEmbed()[_0x5b206c(0xd1)](_0x5b206c(0xd7))[_0x5b206c(0xc4)](_0x5b206c(0xc1))[_0x5b206c(0xd3)](_0x5b206c(0xcb))});},0x3e8),setTimeout(function(){const _0x4f97c9=_0x3a67;_0x487cfd[_0x4f97c9(0xd9)]({'embed':new MessageEmbed()[_0x4f97c9(0xd1)](_0x4f97c9(0xd6))[_0x4f97c9(0xc4)]('BLACK')[_0x4f97c9(0xd3)]('Made\x20by\x20<@689139487258705965>')});},0x7d0),setTimeout(function(){const _0x3cc731=_0x3a67;_0x487cfd[_0x3cc731(0xd9)]({'embed':new MessageEmbed()['setDescription'](_0x3cc731(0xb9))[_0x3cc731(0xc4)]('BLACK')[_0x3cc731(0xd3)](_0x3cc731(0xcb))});},0xbb8),setTimeout(function(){const _0x7cb9ce=_0x3a67;_0x487cfd[_0x7cb9ce(0xd9)]({'embed':new MessageEmbed()[_0x7cb9ce(0xd1)](_0x7cb9ce(0xcf))[_0x7cb9ce(0xc4)]('BLACK')[_0x7cb9ce(0xd3)](_0x7cb9ce(0xcb))});},0xfa0),setTimeout(function(){const _0x26eaeb=_0x3a67;_0x487cfd[_0x26eaeb(0xd9)]({'embed':new MessageEmbed()[_0x26eaeb(0xc4)](_0x26eaeb(0xc1))[_0x26eaeb(0xd1)]('The\x20data\x20has\x20been\x20saved\x20and\x20the\x20live\x20is\x20running\x0a\x0a\x09Channel:\x20'+room+_0x26eaeb(0xbf))[_0x26eaeb(0xd3)](''+message[_0x26eaeb(0xda)]['name'])[_0x26eaeb(0xc5)]()['setFooter'](_0x26eaeb(0xcb))});},0x1388);}));

  }
}; 	