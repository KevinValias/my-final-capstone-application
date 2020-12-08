require("dotenv").config(); // always up-top //
const express = require("express");
const bodyParser = require("body-parser");
const usersRouter = require("./routes/users");
const authRouter = require("./routes/auth");
// const cors = require("cors");
const { logger } = require("./middleware");

const app = express();

const port = process.env.PORT || 4000;
app.use(express.static("client"));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Content-Type", "application/json");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, authorization"
  );
  res.header("Access-Control-Allow-Methods", "*");
  next();
});

app.use(bodyParser.json());
app.use("/users", usersRouter);
app.use("/auth", authRouter);
app.use(logger);

app.get("/", (req, res) => {
  res.send("Welcome to your server again, again!!!");
});

app.listen(port, () => {
  console.log(`Web server is listening on port ${port}!`);
});
