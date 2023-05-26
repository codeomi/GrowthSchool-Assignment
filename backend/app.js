const express = require("express");
const bodyParser = require("body-parser");
const post = require("./routes/postRoute.js");
const errrorMiddleware = require("./middleware/error");

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

//route
app.use("/api/v1", post);

app.use(errrorMiddleware);

module.exports = app;
