const Discord = require("discord.js")
require("dotenv").config()

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if (message.content == "doptix je gay"){
        message.reply("https://tenor.com/view/ben-yes-yes-fthememer-phone-call-yes-call-yes-gif-24938145")
    }
})

client.on("messageCreate", (message) => {
    if (message.content == "doptix není gay"){
        message.reply("https://tenor.com/view/talking-ben-laugh-ho-ho-ho-gif-25061559")
    }
})


client.login(process.env.TOKEN)