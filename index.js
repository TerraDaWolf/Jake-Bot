const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', (message) => {

    if(message.content == 'j!help') {
        message.channel.send('There are 3 commands currently. They are j!help, j!intro, and j!fox');
    }
    if(message.content == 'j!intro') {
        message.channel.send('Hi! I am Jake Bot. I am a simple bot made by Azazel (TerraDaWolf)#6013. https://imgur.com/a/OkUAxMN');
    }
    if(message.content == 'j!fox') {
        message.channel.send('Heres a fox uwu https://imgur.com/a/pNJpJll');
    }

})

client.login('NTA2MjAzNDk0MDMwNTA4MDg0.DrgwRg.1XROXGg11o6ZYnFpJ6WdWEl6Mko');
