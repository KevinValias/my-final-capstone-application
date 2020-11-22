const mysql = require("mysql");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const pool = require("../sql/connection");
const { handleSQLError } = require("../sql/error");

// for bcrypt
const saltRounds = 10;

const signup = (req, res) => {
  const { userName, userPassword } = req.body;
  let sql = "INSERT INTO users (userName, userPassword) VALUES (?, ?)";

  bcryptjs.hash(userPassword, saltRounds, function (err, hash) {
    sql = mysql.format(sql, [userName, hash]);

    pool.query(sql, (err, result) => {
      if (err) {
        if (err.code === "ER_DUP_ENTRY")
          return res.status(409).send("userName is taken");
        return handleSQLError(res, err);
      }
      return res.send("Sign-up successful");
    });
  });
};

const login = (req, res) => {
  const { userName, userPassword } = req.body;
  let sql = "SELECT * FROM users WHERE userName = ?";
  sql = mysql.format(sql, [userName]);

  pool.query(sql, (err, rows) => {
    if (err) {
      return handleSQLError(res, err);
    }
    if (!rows.length) {
      return res.status(404).send("No matching users");
    }

    const hash = rows[0].userPassword;
    bcryptjs.compare(userPassword, hash).then((result) => {
      if (!result) return res.status(400).send("Invalid userPassword");

      const data = { ...rows[0] };
      data.userPassword = "REDACTED";

      const token = jwt.sign(data, "secret");

      res.json({
        msg: "Login successful",
        token,
        userName: userName,
      });
    });
  });
};

module.exports = {
  signup,
  login,
};
