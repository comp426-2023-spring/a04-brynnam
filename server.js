#!/usr/bin/env node

import { rps, rpsls } from "./lib/rpsls.js";

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

//play rps query endpoint
app.get("/app/rps/play/", (req, res) => {
    res.status(200).send(JSON.stringify(rps(req.query.shot)))
})

//play rpsls query endpoint
app.get("/app/rpsls/play/", (req, res) => {
    res.status(200).send(JSON.stringify(rpsls(req.query.shot)))
})

//JSON rps request endpoint
app.post("/app/rps/play/", (req, res) => {
    res.status(200).send(JSON.stringify(rps(req.body.shot)))
})

//JSON rpsls request endpoint
app.post("/app/rpsls/play/", (req, res) => {
    res.status(200).send(JSON.stringify(rpsls(req.body.shot)))
})

//url rps endpoint
app.get("/app/rps/play/:shot", (req, res) => {
    res.status(200).send(JSON.stringify(rps(req.params.shot)))
})

//url rpsls endpoint
app.get("/app/rpsls/play/:shot", (req, res) => {
    res.status(200).send(JSON.stringify(rpsls(req.params.shot)))
})


//default endpoint (404)
app.get("*", (req, res) => {
    res.status(404).send('404 NOT FOUND');
})

//console port notification
app.listen(port, () => {
    console.log('Server listening on port ' + port);
})