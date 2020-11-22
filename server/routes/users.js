const express = require("express");
const usersController = require("../controllers/users");
// const { authenticate } = require("../middleware");
const router = express.Router();

// !! add authenticate to all routes !! //

router.get("/", usersController.getAllUsers);

router.get("/:id", usersController.getUserById);

router.post("/", usersController.createUser);

router.put("/:id", usersController.updateUserById);

router.delete("/:id", usersController.deleteUserByUserId);

module.exports = router;
