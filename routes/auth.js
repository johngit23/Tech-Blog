const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  logoutUser,
  refetchUser,
} = require("../controllers/authController");

//REGISTER
router.post("/register", registerUser);

//LOGIN
router.post("/login", loginUser);

//LOGOUT
router.get("/logout", logoutUser);

//REFETCH USER
router.get("/refetch", refetchUser);

module.exports = router;
