const express = require("express");
const path = require("path");

const root = path.resolve(path.dirname(""));

app = express();
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(`${root}/public/html/index.html`);
})

app.get("/team", (req, res) => {
  res.sendFile(`${root}/public/html/team.html`);
})

app.get("/explore", (req, res) => {
  res.sendFile(`${root}/public/html/explore.html`);
})

app.get("/contests", (req, res) => {
  res.sendFile(`${root}/public/html/contests.html`);
})

app.listen(3001);