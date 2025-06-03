import { Client } from 'tmi.js'
import { oauth } from "./info";

const client = Client({
    options: {
        debug: true,
    },
    identity: {
        username: "BigBloopLeague",
        password: `oauth:${oauth}`,
    },
    channels: ["BigBloopLeague"],
})

client.connect()

client.on('message', (channel, tags, message, self) => {
    if(self) return;

    const args = message.slice(1).split(' ');
    const command = args.shift()?.toLowerCase();

    if (message.toLowerCase() === "!hi") {
        client.say(channel, `Hello, @${tags.username}!`);
    }


})