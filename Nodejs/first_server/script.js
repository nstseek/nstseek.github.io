const express = require('express');
const bodyparser = require('body-parser');

const server = express();

server.listen(3000);

server.use(bodyparser.json());

server.get("/", (req, res) => {
    console.log("user connected");
    console.log("user ip", req.ip);
    console.log("method", req.method);
    console.log("url", `${req.hostname}${req.originalUrl}`);
    res.send("eae negrao");
});

server.post("/", (req, res) => {
    const data = req.body;
    console.log(data);
    res.send("data received");
});

