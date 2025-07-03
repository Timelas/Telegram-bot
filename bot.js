const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config();

const TOKEN = process.env.BOT_TOKEN;
const ADMIN_CHAT_ID = process.env.ADMIN_CHAT_ID;

const bot = new TelegramBot(TOKEN, { polling: true });

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const fromUser = `${msg.from.first_name || ""} ${msg.from.last_name || ""} (@${msg.from.username || "нет username"})`;
  const text = msg.text;

  if (chatId.toString() === ADMIN_CHAT_ID) return;

  bot.sendMessage(ADMIN_CHAT_ID, `✉️ Сообщение от ${fromUser}:\n\n${text}`);
  bot.sendMessage(chatId, "Спасибо! Мы скоро свяжемся с вами.");
});

