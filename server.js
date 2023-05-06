#!/usr/bin/env node

import { rps, rpsls } from "./lib/rpsls";

import minimist from "minimist";
import express from "express";

const app = express();
const args = minimist(process.argv.slice(2));
const port = args["port"] || 500;