const express = require("express");
const bodyParser = require("body-parser");
// const user = require("./routes/userRoute");
const errrorMiddleware = require("./middleware/error");

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

//route
// app.use("/api/v1", user);

app.use(errrorMiddleware);

module.exports = app;
