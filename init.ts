#!/usr/bin/env node
"use strict";
import app from "./app";
import dotenv from "dotenv";

dotenv.config();
const PORT: number | undefined | string = process.env.PORT;

const handleListening: () => void = () =>
  console.log(`✅ Listening on: http://localhost:${PORT}`);

app.listen(PORT, handleListening);
