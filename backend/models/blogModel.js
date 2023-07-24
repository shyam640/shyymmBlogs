const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  path: {
    type: String,
    required: true, 
    unique: true,
    trim: true,
  },
  date: {
    type: String,
    default: () => {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date().toLocaleDateString('en-US', options);
    }
  },
  image: {
    type: String,
    default: "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
  },
  instagram_link: {
    type: String,
    trim: true,
    default: "https://www.instagram.com/_shhyy__mm_640_/"
  },
  linkedin_link: {
    type: String,
    trim: true,
    default: "https://www.linkedin.com/in/itsshyam640/"
  },
  tags: {
    type: String,
    trim: true
  },
  description: {
    type: String,
  }
});

blogSchema.pre('save', async function (next) {
  next();
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;