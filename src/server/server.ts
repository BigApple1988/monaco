import {Zlib} from 'zlib';
import {WebSocketServer} from "ws";
import createServer from "next";
import {parse} from "@babel/core";
const dev = process.env.NODE_ENV !== "production";
const hostname = "localhost";
const port = 3000;
const next = require('next');
const app = new next({dev,hostname,port})
const handle = app.getRequestHandler();

const signalrUrl = "livetiming.formula1.com/signalr";
const signalrHub = "Streaming";

const socketFreq = 250;
const retryFreq = 10000;

app.prepare().then( async () => {
    const wss = new WebSocketServer({noServer : true})
    const server = createServer(async (req, res) => {
        try {
            const parsedUrl = parse()
        }
    })
})