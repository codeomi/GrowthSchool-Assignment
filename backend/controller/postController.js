const Post = require("../model/Post");
const ErrorHandler = require("../utils/ErrorHandler");
const catchAsyncErrorHandler = require("../middleware/catchAsynError");

exports.createPost = catchAsyncErrorHandler(async (req, res, next) => {
  console.log(req.body);
  const post = await Post.create({
    title: req.body.title,
    description: req.body.email,
    images: req.body.images,
    link: req.body.link,
    category: req.body.category,
  });

  res.status(201).json({ success: true, post });
});

exports.updatePost = catchAsyncErrorHandler(async (req, res,next) => {
    let post = await Post.findById(req.params.id)
    if (!post) {
      return next(new ErrorHandler("Post not found", 400))
    }
    post = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    })
  
    res.status(200).json({ success: true, post })
  })


  exports.deletePost = async (req, res, next) => {
    let post = await Post.findById(req.params.id)
    if (!post) {
      return next(new ErrorHandler("Post not found", 400))
    }
    await post.remove()
    res.status(200).json({ success: true, message: "Post Deleted" })
  }