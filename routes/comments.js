const express = require("express");
const router = express.Router();
const verifyToken = require("../verifyToken");
const {
  createComment,
  getComments,
  updateComment,
  deleteComment,
} = require("../controllers/commentController");

//CREATE
router.post("/create", verifyToken, createComment);

//GET POST COMMENTS
router.get("/post/:postId", getComments);

//UPDATE
router.put("/:id", verifyToken, updateComment);

//DELETE
router.delete("/:id", verifyToken, deleteComment);

module.exports = router;
