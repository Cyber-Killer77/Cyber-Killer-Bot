const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NzY1MjE5ODEwMTgyOTU1MDY4.X4Roew.IA9nNth_CysjtD3UPU5Xc2-r0rQ';

bot.on('ready', ()=> {
    console.log("bot is ready to be used");
})

bot.on('message', msg => {

    if(msg.content === "!help")
    {
        msg.reply(" `current commands : !youtube !discord-inv !game-info !release-date` ")
    }

   if( msg.content === "!game-version")
   {
       msg.reply("ᴄʏʙᴇʀ ᴋɪʟʟᴇʀ's current version is : **Test 0.1.0 ** ");
   }

   if(msg.content === "!youtube")
   {
       msg.reply("https://www.youtube.com/channel/UCsQJ45hahNq9gmjHIFJzoBg?view_as=subscriber");
   }

   if(msg.content === "!discord-inv")
   {
       msg.reply("https://discord.gg/7F5QCP");
   }

   if(msg.content === "!game-info")
   {
       msg.reply(" `ᴄʏʙᴇʀ ᴋɪʟʟᴇʀ is an FPS Shooter Game we are currently working on the game's version is currently : **Test 0.1.0**` ");
   }

   if(msg.content === "!release-date")
   {
       msg.reply("``game is still on development``");
   }
})

bot.login(token);