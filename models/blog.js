const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const blogSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
    minlength: 3,
    maxlength: 100
  },
  snippet: {
    type: String,
    required: true,
    minlength: 10,
    maxlength: 200
  },
  body :{
    type: String,
    required: true,
  }
}, {timestamps: true});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
