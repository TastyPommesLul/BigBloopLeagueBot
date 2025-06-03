"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tmi_js_1 = require("tmi.js");
const client = (0, tmi_js_1.Client)({
    channels: [""],
    identity: {
        username: "BigBloopLeague",
        password: "oauth:puu4mlzihd2ucjmhaph04ber83curi",
    },
});
client.on('message', (channel, tags, message, self) => {
});
