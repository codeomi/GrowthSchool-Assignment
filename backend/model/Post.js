const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please enter product name."],
  },
  description: {
    type: String,
    required: [true, "Please enter product description."],
  },
  link: {
    type: String,
    required: [true, "Please enter link to the course"],
  },
  images: {
    type: String,
    // required: [true, "Please enter course image"],
  },
  category: {
    type: String,
    required: [true, "Please enter product Category."],
  },
 
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Post", postSchema);
