var Discord = require('discord.js');
var auth = require('./auth.json');

// Initialize Discord client
var client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('voiceStateUpdate', (oldMember, newMember) =>{
    let newUserChannel = newMember.voiceChannel
    let oldUserChannel = oldMember.voiceChannel

    if(oldUserChannel === undefined && newUserChannel !== undefined) {
    // User Joins a voice channel
        console.log("=====joined=====");
        console.log(newUserChannel);

    } else if(newUserChannel === undefined){
    // User leaves a voice channel
        console.log("=====left=====");
        console.log(oldUserChannel);

    }
});

client.on('message', message => {
    if (message.content === 'ping') {
        message.channel.send('pong', {
            tts: true
        });
    }
});

client.login(auth.token);