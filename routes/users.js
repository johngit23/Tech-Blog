const express = require("express");
const router = express.Router();
const {
  getUser,
  updateUser,
  deleteUser,
} = require("../controllers/userController");
const verifyToken = require("../verifyToken");

//GET USER
router.get("/:id", getUser);

//UPDATE
router.put("/:id", verifyToken, updateUser);

//DELETE
router.delete("/:id", verifyToken, deleteUser);

module.exports = router;
