const express = require("express");
const { Server } = require("http");
const app = express();

app.get("/", (req, res) => {
  res.send("Hi");
});

app.listen(3000, () => console.log("Server ready"));

process.on("SIGTERM", () => {
  Server.close(() => {
    console.log("Process terminated");
  });
});
