const Discord = require('discord.js')
module.exports = {
	name: 'args',
	description: 'Information con argumentos.',
	args: true,
	execute(message, args) {
		if (args[0] === 'foo') {
			return message.channel.send('bar');
		}

		message.channel.send(`First argument: ${args[0]}`);
	},
};