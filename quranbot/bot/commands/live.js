const url = "https://www.youtube.com/watch?v=-rDw9oLHoNw";
const fs = require('fs');
const db = require('quick.db');
const ytdl = require('ytdl-core');
const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "live",
  cooldown: 20,
  aliases: ["setquran"],

  run: async function(client, message, args) {
  if(message.author.bot) return;
  if(!message.guild) return; 
	let room = db.get(`quranlivech_${message.guild.id}`)
	if(!room) {
		return message.channel.send(new MessageEmbed()
	.setTitle(`Error`)
	.setAuthor(message.author.username, message.author.avatarURL())
    .setDescription(`Cause of the problem: The server owner has not set the live channel yet\n
	The solution: The server owner has been notified and the matter will be resolved`)
    .setColor('RED')
	.setFooter(`Made by <@689139487258705965>`));
	message.owner.send(`Hayو Please set the live channel to allow your members to use it\n
	Usage \`!setlive\``)
	}
		const _0x3164=['setColor','BLACK','307634OSNICQ','13522PoDnaP','32739uCvOdJ','77935bcqnHJ','cache','6zvNhVF','fetch','setDescription','voice','133279AjVKKV','channels','397810ddIQeh','get','25gvVNNc','guild','44EHujDz','join','46295bpejvK'];function _0x1b0c(_0x110406,_0x39ad09){return _0x1b0c=function(_0x316445,_0x1b0c0b){_0x316445=_0x316445-0xfc;let _0x3bee5f=_0x3164[_0x316445];return _0x3bee5f;},_0x1b0c(_0x110406,_0x39ad09);}const _0x279d2f=_0x1b0c;(function(_0x34a530,_0x3a583d){const _0x46a423=_0x1b0c;while(!![]){try{const _0x13e07d=parseInt(_0x46a423(0x108))+parseInt(_0x46a423(0xff))+parseInt(_0x46a423(0x100))+parseInt(_0x46a423(0xfe))*parseInt(_0x46a423(0x10c))+-parseInt(_0x46a423(0xfd))+-parseInt(_0x46a423(0x106))*-parseInt(_0x46a423(0x102))+-parseInt(_0x46a423(0x10a))*parseInt(_0x46a423(0x10e));if(_0x13e07d===_0x3a583d)break;else _0x34a530['push'](_0x34a530['shift']());}catch(_0x42426e){_0x34a530['push'](_0x34a530['shift']());}}}(_0x3164,0x6af65),setInterval(async function(){const _0x542d6c=_0x1b0c;if(!client[_0x542d6c(0x105)]['connections']['get'](message[_0x542d6c(0x10b)]['id'])){let _0x4aff03=client[_0x542d6c(0x107)][_0x542d6c(0x101)][_0x542d6c(0x109)](room)||await client[_0x542d6c(0x107)][_0x542d6c(0x103)](room);if(!room)return;const _0x425d62=await _0x4aff03[_0x542d6c(0x10d)]();_0x425d62['play'](ytdl(url));}},0x1388),message['channel']['send'](new MessageEmbed()[_0x279d2f(0x104)]('Click\x20here\x20<#'+room+'>')[_0x279d2f(0x10f)](_0x279d2f(0xfc))));

  }
}; 	