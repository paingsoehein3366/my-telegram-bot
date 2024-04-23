require("dotenv").config();
const { Telegraf } = require('telegraf');
const Token = process.env.My_Token || "";

// Initialize your bot with the token provided by BotFather
const bot = new Telegraf(`${Token}`);

// Start command handler
bot.start((ctx) => ctx.reply('Welcome to my Telegram Bot! /help'));

function myancare() {
      const text = "MyanCare function";
      return text;
};
function department() {
      const text = "Department function";
      return text;
}

// Help command handler
bot.help((ctx) => {
      ctx.reply('/MyanCare \n/Department \n/TechTeam');
});

// Echo message handler
bot.on('message', (ctx) => {
      if (ctx.text === '/MyanCare') return ctx.reply(myancare());
      if (ctx.text === '/Department') return ctx.reply(department())
      ctx.reply(ctx.message.text);
});

// Start polling for updates
bot.launch().then(() => {
      console.log('Bot is up and running!');
}).catch((err) => {
      console.error('Error starting bot:', err);
});