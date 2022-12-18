const aoijs = require("aoi.js")

const bot = new aoijs.AoiClient({
  token: process.env.TOKEN,
  prefix: "$",
  intents: ["GUILDS", "GUILD_MESSAGES"]
})

bot.variables({
    pwd: "$HOME"
})

//Events
bot.onMessage()

bot.command({
    name: "ls",
    code: `$exec[cd $getServerVar[pwd;$guildID] && ls]`
})

bot.command({
    name: "neofetch",
    code: `$exec[neofetch --stdout]`
})

bot.command({
    name: "npm",
    code: `$exec[cd $getServerVar[pwd;$guildID] && npm]`
})

bot.command({
    name: "pip",
    code: `$exec[cd $getServerVar[pwd;$guildID] && pip]`
})

bot.command({
    name: "node",
    code: `$exec[cd $getServerVar[pwd;$guildID] && node]`
})

bot.command({
    name: "pwd",
    code: `$exec[cd $getServerVar[pwd;$guildID] && pwd]`
})

bot.command({
    name: "cd",
    code: `$setServerVar[pwd;$message;$guildID]`
})

bot.command({
    name: "exec",
    code: `$exec[$cd $getServerVar[pwd;$guildID] && $message]`
})

//Ready Event
bot.readyCommand({
    channel: "",
    code: `$log[Ready on $userTag[$clientID]]`
})
