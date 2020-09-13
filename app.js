const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv/config");

//Import Routes

const postsRoute = require("./routes/posts");

const app = express();

//Middleware redirect /posts to postsRoute, likewise can have multiple middleware
app.use(cors());
app.use(bodyParser.json());
app.use("/posts", postsRoute);

//Routes
app.get("/", (req, res) => {
  res.send("We are on home");
});

//Mongo connect
mongoose
  .connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection to the Atlas Cluster is successful!");
  })
  .catch((err) => console.error(err));

//Listen to server
app.listen(3000);
