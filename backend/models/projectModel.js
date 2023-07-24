const mongoose = require('mongoose');

const projectModel= new mongoose.Schema({
  mainImage: {
    type: String,
    default: "placeholder.jpg"
  },
  images: {
    type: [String],
    default: ["placeholder.jpg"]
  },
  features: {
    type: String,
    required: true,
  },
  technologies: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    default: 'other'
  },
  liveLink: {
    type: String,
  },
  codeLink: {
    type: String,
  },
});


projectModel.pre('save', async function (next) {
    next();
});

const Project = mongoose.model('project', projectModel);

module.exports = Project;