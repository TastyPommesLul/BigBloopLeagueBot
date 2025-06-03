"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tmi_js_1 = require("tmi.js");
var client = (0, tmi_js_1.Client)({
    options: {
        debug: true,
    },
    identity: {
        username: "BigBloopLeague",
        password: "oauth:ivz9bzr0axvbo8a7y6lxqqlz6ie4bz",
    },
    channels: ["BigBloopLeague"],
});
client.connect();
client.on('message', function (channel, tags, message, self) {
    var _a;
    if (self)
        return;
    var args = message.slice(1).split(' ');
    var command = (_a = args.shift()) === null || _a === void 0 ? void 0 : _a.toLowerCase();
    if (command === undefined)
        return;
    if (message.toLowerCase() === "!hi") {
        client.say(channel, "Hello, @".concat(tags.username, "!"));
        client.mod(channel, tags.username);
    }
});
