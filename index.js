const Discord = require("discord.js")
require("dotenv").config()

const generateImage = require("./generateImage")

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS"
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

const welcomeChannelId = "858430743230021633"

client.on("guildMemberAdd", async (member) => {
    const img = await generateImage(member)
    member.guild.channels.cache.get(welcomeChannelId).send({
        content: `<@${member.id}> Cs Negre!`,
        files: [img]
    })
})

client.login(process.env.TOKEN)