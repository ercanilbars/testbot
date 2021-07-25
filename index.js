const { Telegraf } = require('telegraf')

const bot = new Telegraf("1893282703:AAGVZa8M24BQXNpR0qffMlvB6deA0ID8hN4")
const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;



function timeLeft() {
    let countdownDate = "Aug 2, 2021 21:00:00 GMT"
    let countDown = new Date(countdownDate).getTime()
    let now = new Date().getTime()
    let distance = countDown - now
    var formattedDays = ("0" + Math.floor(distance / (day))).slice(-2);
    var formattedHours = ("0" + Math.floor((distance % (day)) / (hour))).slice(-2);
    var formattedMins = ("0" + Math.floor((distance % (hour)) / (minute))).slice(-2);
    var formattedSecs = ("0" + Math.floor((distance % (minute)) / second)).slice(-2);

    var text =formattedDays+" days, "+formattedHours+" hours, "+formattedMins+" mins, "+formattedSecs+" secs"+'\n'+'\n'+
    "🔥🔥Pre-sale live at 2 August at 9 pm UTC🔥🔥" +"\n"+"\n"
    "Please invite your friends🚀🚀🚀"
        
    return text
    
  }

bot.start((ctx) => ctx.reply('You must add your group'))
bot.hears("whenpresale", ctx => ctx.reply(timeLeft()))
bot.command('whenpresale', (ctx) => ctx.reply(timeLeft()))
bot.command('countdown', (ctx) => ctx.reply(timeLeft()))

bot.launch()