const express = require("express");
const router = express.Router();
const {
  createPost,
  getPosts,
  getUserPosts,
  getPostDetails,
  updatePost,
  deletePost,
} = require("../controllers/postController");
const verifyToken = require("../verifyToken");

//CREATE
router.post("/create", verifyToken, createPost);

//GET POSTS
router.get("/", getPosts);

//GET USER POSTS
router.get("/user/:userId", getUserPosts);

//GET POST DETAILS
router.get("/:id", getPostDetails);

//UPDATE
router.put("/:id", verifyToken, updatePost);

//DELETE
router.delete("/:id", verifyToken, deletePost);

module.exports = router;
