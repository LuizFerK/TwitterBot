const TwitterBot = require('./bot.js');

function BotInit() {
	TwitterBot.BotRetweet();
}

BotInit();

module.exports = {
	BotInit,
};
