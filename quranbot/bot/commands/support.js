const Discord = require("discord.js");
const client = new Discord.Client();
const { MessageEmbed } = require('discord.js');
const support = require("../../config/bot")
const disbut = require('discord-buttons');
const { MessageButton, MessageActionRow } = require("discord-buttons")
module.exports = {
  name: "support",
  cooldown: 1,
  aliases: ["server"],

  run: async function(client, message, args) {
		if(message.author.bot) return;
  		if(!message.guild) return;
	let embed = new Discord.MessageEmbed()  
	.setColor('BLACK')
    .setFooter(message.guild.name, message.guild.iconURL({ dynamic: true }))
    .setDescription(`Any problem you encounter, go to the technical support of the bot`)
	.setAuthor(`${message.author.tag}`, message.author.avatarURL({ dynamic: true }))
	.setTimestamp()
	let button3 = new MessageButton()
.setStyle ('url')
.setLabel('Support')
.setURL(process.env.support || support);
let buttonRow = new MessageActionRow()
    .addComponent(button3)
	message.channel.send(embed, buttonRow)
  }
};
