// models/Post.js

const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  publicationDate: {
    type: Date,
    default: Date.now
  },
  category: {
    type: String,
    required: true
  },
  tags: [String],
  content: {
    type: String,
    required: true
  },
  imageUrl: String,
  videoUrl: String
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
