const fetch = require('node-fetch');
require('dotenv').config({path:'../.env'});
const apiURLtwo = process.env.apiURLtwo
exports.run = (client, message, args, user, channel, self) => {
    fetch(`${apiURLtwo}/twitch/followage/jormh/${user.username}`)
        .then(res => res.text())
        .then(text => client.say(channel, `@${user.username}, has been following jormh for ${text} `))
}