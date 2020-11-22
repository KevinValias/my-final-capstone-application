const jwt = require("jsonwebtoken");

const logger = (req, res, next) => {
  next();
};

const authenticate = (req, res, next) => {
  const bearerHeader = req.headers["authorization"];

  if (typeof bearerHeader !== "undefined") {
    const bearer = bearerHeader.split(" ");
    const bearerToken = bearer[1];
    const decoded = jwt.verify(bearerToken, "secret");
    if (!decoded) {
      throw new Error("Invalid token");
    }
    req.user = decoded;
    next();
  } else {
    res.sendStatus(401);
  }
};

module.exports = {
  logger,
  authenticate,
};
