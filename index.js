const tmi = require('tmi.js');
const pb = require("@madelsberger/pausebuffer");
require('dotenv').config({path:'./.env'});
let channelName = "jormh";
let prefix = "?"

let config = {
    options: {
        debug: true
    },
    connection: {
        cluster: "aws",
        reconnect: true
    },
    identity: {
        username: process.env.username,
        password: process.env.oauth,
    },
    channels: [channelName]
}

let client = pb.wrap(new tmi.client(config));
client.connect();

client.on("connected", (address, port) => {
    console.log(" The bot has connected on " + address + ':' + port)
    // client.say(channelName, "YEP Im now watching over this chat monkaW")
})

client.on("chat", (channel, user, message, self) => {
    if (self) return;
    if (message == "peepoHey") {
        client.say(channelName, "peepoHey")
    }
    if (message == "catJAM") {
        client.say(channelName, "catJAM")
    }
    if (message == "borpaSpin") {
        client.say(channelName, "borpaSpin")
    }
    if (message == "BOOBA") {
        client.say(channelName, "BOOBA")
    }
    if (message == "Clap") {
        client.say(channelName, "Clap")
    }
    if (message == "EZ") {
        client.say(channelName, "EZ")
    }
    if (message == "EZ Clap") {
        client.say(channelName, "EZ Clap")
    }
    if (message == "gachiHYPER") {
        client.say(channelName, "gachiHYPER")
    }
    if (message == "YEP COCK") {
        client.say(channelName, "YEP COCK")
    }
    if (message == "KEKW") {
        client.say(channelName, "KEKW")
    }



    // TEMPLATE
    // if (message == "") {
    //     client.say(channelName, "")
    // }

    // cmd handler code
    const args = message.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();

    try {
        let commandFile = require(`./commands/${cmd}.js`)
        commandFile.run(client, message, args, user, channel, self)
    } catch (err) {
        return;
    }

})

	