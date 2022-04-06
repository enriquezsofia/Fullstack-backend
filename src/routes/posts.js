const express = require("express");
const router = express.Router();

const postController = require("../controllers/posts-controller");

const postMiddleware = require("../middlewares/posts-middleware");

// /posts/
router.get("/", postController.listPosts);

router.post("/", postMiddleware.validatePost, postController.savePost);

router.get("/:id", postController.getPost);

router.delete("/:id", postController.deletePost);

router.put("/:id", postController.updatePost);

module.exports = router;
