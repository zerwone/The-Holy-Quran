const { MessageEmbed } = require('discord.js');
const db = require('quick.db');

module.exports = {
    name: "prefix",
    cooldown: 5,
    aliases: ["setprefix"],
    run: async(client, message, args) => {
var _0x3187=['3vRZlhq','env','setColor','520465GxGPBd','549842IWGiSm','5kmIOWM','140334SKIMpW','RED','delete','author','Prefix_','6TBVESM','fetch','79340IxUwBs','prefix','159455HkphBI','bot','1fxgQig','361407eQuZXM','You\x20cannot\x20use\x20this\x20command','then','ADMINISTRATOR','142233tFhuux','hasPermission','setDescription','guild','member','channel'];var _0x158f9f=_0x5bc9;function _0x5bc9(_0x40c02d,_0x42a97a){return _0x5bc9=function(_0x3187c8,_0x5bc9f3){_0x3187c8=_0x3187c8-0x1b9;var _0x5cae82=_0x3187[_0x3187c8];return _0x5cae82;},_0x5bc9(_0x40c02d,_0x42a97a);}(function(_0x5dcade,_0x4b2cff){var _0xc60e49=_0x5bc9;while(!![]){try{var _0x4d168b=-parseInt(_0xc60e49(0x1bc))*parseInt(_0xc60e49(0x1c4))+parseInt(_0xc60e49(0x1bb))+-parseInt(_0xc60e49(0x1ba))+parseInt(_0xc60e49(0x1c8))*-parseInt(_0xc60e49(0x1c9))+-parseInt(_0xc60e49(0x1cd))+parseInt(_0xc60e49(0x1c2))*parseInt(_0xc60e49(0x1bd))+parseInt(_0xc60e49(0x1d3))*parseInt(_0xc60e49(0x1c6));if(_0x4d168b===_0x4b2cff)break;else _0x5dcade['push'](_0x5dcade['shift']());}catch(_0x1a2751){_0x5dcade['push'](_0x5dcade['shift']());}}}(_0x3187,0x6db7e));if(!message[_0x158f9f(0x1d0)]||message[_0x158f9f(0x1c0)][_0x158f9f(0x1c7)])return;var prefix=await db[_0x158f9f(0x1c3)](_0x158f9f(0x1c1)+message[_0x158f9f(0x1d0)]['id']);if(prefix==null)prefix=process[_0x158f9f(0x1d4)][_0x158f9f(0x1c5)];if(!message[_0x158f9f(0x1d1)][_0x158f9f(0x1ce)](_0x158f9f(0x1cc)))return message[_0x158f9f(0x1d2)]['send'](new MessageEmbed()[_0x158f9f(0x1b9)](_0x158f9f(0x1be))[_0x158f9f(0x1cf)](_0x158f9f(0x1ca)))[_0x158f9f(0x1cb)](_0x52c9bf=>{setTimeout(()=>{var _0x996944=_0x5bc9;_0x52c9bf[_0x996944(0x1bf)]();},0xbb8);});
        if (!args[0]) {
            message.channel.send(
                new MessageEmbed()
                .setColor("BLACK")
            .setFooter(message.guild.name, message.guild.iconURL({ dynamic: true }))
				.setAuthor(`${message.author.tag}`, message.author.avatarURL({ dynamic: true }))
                .setDescription(`${message.guild.name} prefix is \`${prefix}\``)
            )
            return;
        }
        await db.set(`Prefix_${message.guild.id}`, `${args[0]}`);
        message.channel.send(
            new MessageEmbed()
            .setColor("GREEN")
            .setAuthor(message.author.tag, `${message.author.avatarURL({ dynamic: true })}`)
            .setDescription(`The new prefix is: ${args[0]}`)
		)
    }
};