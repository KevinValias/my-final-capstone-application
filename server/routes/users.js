const express = require("express");
const usersController = require("../controllers/users");
const { authenticate } = require("../middleware");
const router = express.Router();

// !! add authenticate to all routes !! //

router.get("/", authenticate, usersController.getAllUsers);

router.get("/:id", authenticate, usersController.getUserById);

router.post("/", authenticate, usersController.createUser);

router.put("/:id", authenticate, usersController.updateUserById);

router.delete("/:id", authenticate, usersController.deleteUserByUserId);

module.exports = router;
