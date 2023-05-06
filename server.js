#!/usr/bin/env node

import { rps, rpsls } from "./lib/rpsls";

import minimist from "minimist";
import express from "express";

const app = express();

app.use(express.json);
app.use(express.urlencoded({extended: true}));

const args = minimist(process.argv.slice(2));
const port = args["port"] || 500;

//check endpoint at /app/ that returns 200 OK
app.get("/app/", (req, res) =>{
    res.status(200).send('200 OK');
})

//rps endpoint
app.get("/app/rps/", (req, res) => {
    res.status(200).send(JSON.stringify(rps()));
})

//rpsls endpoint
app.get("/app/rpsls/", (req, res) => {
    res.status(200).send(JSON.stringify(rpsls()));
})

//play rps request endpoint

//play rpsls request endpoint

//JSON play rps request endpoint

//JSON play rpsls request endpoint

//url play rps request endpoint

//url play ps request endpoint

//default endpoint (404)
app.get("*", (req, res) => {
    res.status(404).send('404 NOT FOUND');
})

//console port notification