const express = require("express");
const bodyParser = require("body-parser");
const usersRouter = require("./routes/users");

require("dotenv").config();
const app = express();

const port = process.env.PORT || 80;

app.use(bodyParser.json());

app.use("/users", usersRouter);

app.get("/", (req, res) => {
  res.send("Welcome to your server again, again!!!");
});

app.listen(port, () => {
  console.log(`Web server is listening on port ${port}!`);
});
