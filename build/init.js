#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = __importDefault(require("./app"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var PORT = process.env.PORT;
var handleListening = function () {
    return console.log("\u2705Listening on: http://localhost:" + PORT);
};
app_1.default.listen(PORT, handleListening);
//# sourceMappingURL=init.js.map