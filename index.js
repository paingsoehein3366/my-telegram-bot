const { Telegraf } = require('telegraf');

// Initialize your bot with the token provided by BotFather
const bot = new Telegraf('6531915487:AAHiPTAfly3Fm3aC6nPiVCfdAn2xjp5Jzjg');

// Start command handler
bot.start((ctx) => ctx.reply('Welcome to your Telegram Bot!'));

// Help command handler
bot.help((ctx) => ctx.reply('Send me a message and I will echo it back to you.'));

// Echo message handler
bot.on('message', (ctx) => ctx.reply(ctx.message.text));

// Start polling for updates
bot.launch().then(() => {
      console.log('Bot is up and running!');
}).catch((err) => {
      console.error('Error starting bot:', err);
});