const express = require("express");
const {
  createPost,
  deletePost,
  updatePost,
  getAllPost,
} = require("../controller/postController");

const router = express.Router();

router.route("/post/:id").post(createPost).put(updatePost).delete(deletePost).get(getAllPost);

module.exports = router;
