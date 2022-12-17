# Discord-TerminalBot
A Discord bot that can execute terminal commands (WIP)

### What can I do with this thing?
There's many use-cases for this code. You can use this to:
- SSH into your Raspberry Pi without actually SSH into it
- Run multiple bot inside Pterodactyl server (for example you got Pterodactyl server with 4gb ram and Node.JS egg, but you only can create 1 server and don't know what should you do, you can use this to run other discord bot in same server)
- idk what else

### How to:
- Just clone this repo or download index.js and package.json
- Make sure you have Node.JS and npm installed or using Discord.js egg (for Pterodactyl server)
- (If you use Pterodactyl server) Upload index.js file and package.json
- Now as usual, create new discord apps or use existing one, then fill config part inside index.js file, then invite your bot into your discord server
- Now start your server or type `node index & disown` inside terminal (make sure you're inside this repo local directory)

### Now what?!?!?!
Wait for a moment and boom! type `$node -v` in one of discord channel (make sure your bot there) and you'll see the installed Node.JS version inside your server or device.
