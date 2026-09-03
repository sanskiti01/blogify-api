const express = require('express');
const router = express.Router();

const { getAllPosts, getPostById } = require('../controller/posts.controller');

router.get('/', getAllPosts);
router.get('/:id', getPostById);

module.exports = router;
