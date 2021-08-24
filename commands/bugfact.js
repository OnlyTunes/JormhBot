const fetch = require('node-fetch');
require('dotenv').config({path:'../.env'});
const apiURL = process.env.apiURL

exports.run = (client, message, args, user, channel, self) => {
    try {
        fetch(`${apiURL}/v1/jormh-bot/bugfact`)
        .then(res => res.text())
        .then(text => client.say(channel, `@${user.username}, YEP Bug Facts: ${text}`))
    } catch (err) {
        console.error(err)
    }
}