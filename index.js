"use strict";

require('dotenv').config({ silent: true });
const compression = require("compression");
const bodyParser = require("body-parser");
const express = require("express");
const cfenv = require("cfenv").getAppEnv();

const server = express();
server.use(compression());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json({ limit: '100mb' }));

server.listen(cfenv.port, error => {
    if (error) return console.error(error);
    console.info(`==> 🌎  Listening on port ${cfenv.port}. Url: ${cfenv.url} `);
})

require("./server/server")(server, { express: express, cfenv: cfenv });
require("./client/server")(server, { express: express });