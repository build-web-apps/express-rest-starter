const express = require("express");
const Post = require("../models/Post");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("we are on router posts");
});

router.get("/specific", (req, res) => {
  res.send("we are on router specific posts");
});

router.post("/test", (req, res) => {
  const post = req.body;
  console.log(post);
  res.send("post received");
});

//POST call to save or make an entry to Post db
router.post("/", async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  });
  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

//GET all the Posts
router.get("/list", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});

//GET a specific post
router.get("/:postId", async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    res.json(post);
  } catch (err) {
    res.json({ message: err });
  }
});

//DELETE a id by postID
router.delete("/:postId", async (req, res) => {
  console.log("am in delete");
  try {
    const removedPost = await Post.findByIdAndDelete(req.params.postId);
    // const removedPost = await Post.remove({_id: req.params.postId})
    res.json(removedPost);
  } catch (err) {
    console.log("err", err);
    res.json({ message: err });
  }
});

//UPDATE a post
router.patch("/:postId", async (req, res) => {
  try {
    const updatedPost = await Post.updateOne(
      { _id: req.params.postId },
      { $set: { title: req.body.title } }
    );
    res.json(updatedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
