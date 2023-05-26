const express = require("express");
const {
  createPost,
  deletePost,
  updatePost,
} = require("../controller/postController");

const router = express.Router();

router.route("/post/:id").post(createPost).put(updatePost).delete(deletePost);

module.exports = router;
