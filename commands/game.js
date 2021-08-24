const fetch = require('node-fetch');
require('dotenv').config({path:'../.env'});
const apiURLtwo = process.env.apiURLtwo
exports.run = (client, message, args, user, channel, self) => {
    fetch(`${apiURLtwo}/twitch/game?channel=jormh`)
        .then(res => res.text())
        .then(text => client.say(channel, `@${user.username}, Jormh is currently playing: ${text}`))
}