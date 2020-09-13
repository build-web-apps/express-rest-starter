const express = require("express");
const mongoose = require("mongoose");
require("dotenv/config");

const app = express();

//Middlewares in express
app.use("/posts", () => {
  console.log("this is midddleware running");
});

//Routes
app.get("/", (req, res) => {
  res.send("We are on home");
});

app.get("/posts", (req, res) => {
  res.send("Am in posts");
});

//Mongo connect
const uri1 = process.env.DB_CONNECTION;

console.log(uri1);
mongoose
  .connect(uri1, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connection to the Atlas Cluster is successful!");
  })
  .catch((err) => console.error(err));

//Listen to server
app.listen(3000);
