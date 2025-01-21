const express = require("express");
const Router = require("./routers/Router");
const app = express();

app.use(express.json());

app.use("/api/v1", Router);

app.all("*", (req, res) => {
  res.status(404).json({
    status: "fail",
    message: `Can't find ${req.originalUrl} on this server!`,
  });
});

module.exports = app;
