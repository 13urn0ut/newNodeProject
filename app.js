const express = require("express");
const Router = require("./routers/Router");
const app = express();

app.use(express.json());

app.use("/api/v1", Router);

module.exports = app;
