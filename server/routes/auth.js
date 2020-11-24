const express = require("express");
const authController = require("../controllers/auth");
const { authenticate } = require("../middleware");
const router = express.Router();

router.post("/signup", authenticate, authController.signup);

router.post("/login", authenticate, authController.login);

module.exports = router;
