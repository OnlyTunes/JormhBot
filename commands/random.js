const fetch = require('node-fetch');
require('dotenv').config({path:'../.env'});
const apiURLtwo = process.env.apiURLtwo
exports.run = (client, message, args, user, channel, self) => {
    fetch(`${apiURLtwo}/twitch/random_user/jormh`)
        .then(res => res.text())
        .then(text => client.say(channel, `@${user.username}, summoned @${text} randomly`))
}