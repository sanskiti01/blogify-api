// Temporary in-memory data
const posts = [
  { id: "1", title: "First Post", content: "Hello World" },
  { id: "2", title: "Second Post", content: "Another Post" }
];

// Get All Posts
exports.getAllPosts = (req, res) => {
  return res.status(200).json({
    success: true,
    data: {
      posts: posts
    }
  });
};

// Get Post By ID
exports.getPostById = (req, res) => {
  const post = posts.find(p => p.id === req.params.id);

  if (!post) {
    return res.status(404).json({
      success: false,
      message: "Post not found"
    });
  }

  return res.status(200).json({
    success: true,
    data: {
      post: post
    }
  });
};
