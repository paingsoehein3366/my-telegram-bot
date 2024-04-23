require("dotenv").config();
const { Telegraf } = require('telegraf');
const Token = process.env.My_Token || "";
let url = process.env.URL || "";

// Initialize your bot with the token provided by BotFather
const bot = new Telegraf(`${Token}`);

function myancare() {
      const text = "MyanCare function";
      return text;
};
function department() {
      const text = "Department function";
      return text;
};
//check users
function checkUsers(user)  {
      const userInfor = user.chat;
      console.log("user: ",userInfor);
};

// Start command handler
bot.start((ctx) => {
      checkUsers(ctx);
      ctx.reply('Welcome to my Telegram Bot! /help');
});

// Help command handler
bot.help((ctx) => {
      fetch(`${url}/help`, {
            method: "GET"
      }).then(res => {
            console.log(res);
            ctx.reply('/MyanCare \n/Department \n/TechTeam');
      }).catch(err => {
            console.log("Error: ", err);
            ctx.reply("Failed");
      });
});

// Echo message handler
bot.on('message', (ctx) => {
      checkUsers(ctx)
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