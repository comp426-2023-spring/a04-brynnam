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