#!/usr/bin/env node

import minimist from 'minimist';
import express from "express";

import { playRps, playRpsls} from "./lib/rpsls.js";

const args = minimist(process.argv.slice(2));
const app = express();
const port = args["port"] || 5000

app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.get("/app/", (req, res) => {
    res.status(200).send('200 OK');
})

//play points
app.get("/app/rps/", (req, res) => {
    res.status(200).send(JSON.stringify(playRps()));
})

app.get("/app/rpsls/", (req, res) => {
    res.status(200).send(JSON.stringify(playRpsls()));
})

//requests
app.get("/app/rps/play/", (req, res) => {
    res.status(200).send(JSON.stringify(playRps(req.query.shot)));
})

app.get("/app/rpsls/play/", (req, res) => {
    res.status(200).send(JSON.stringify(playRpsls(req.query.shot)));
})

//JSON
app.post("/app/rps/play/", (req, res) => {
    res.status(200).send(JSON.stringify(playRps(req.body.shot)));
})

app.post("/app/rpsls/play/", (req, res) => {
    res.status(200).send(JSON.stringify(playRpsls(req.body.shot)));
})

//url
app.get("/app/rps/play/:shot", (req, res) => {
    res.status(200).send(JSON.stringify(playRps(req.params.shot)));
})

app.get("/app/rpsls/play/:shot", (req, res) => {
    res.status(200).send(JSON.stringify(playRpsls(req.params.shot)));
})

app.get("*", (req, res) => {
    res.status(404).send("404 NOT FOUND");
})

app.listen(port, () =>{
    console.log('Server listening on port ' + port);
})
