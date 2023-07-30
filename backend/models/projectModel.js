const mongoose = require("mongoose");

const projectModel = new mongoose.Schema({
  mainImage: {
    type: String,
    default: "https://res.cloudinary.com/shyymm640/image/upload/v1690728596/crp0wxwy7l35yg7abzze.png",
  },
  images: {
    type: [String],
    default: ["https://res.cloudinary.com/shyymm640/image/upload/v1690728596/crp0wxwy7l35yg7abzze.png"],
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
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    default: "other",
  },
  liveLink: {
    type: String,
  },
  codeLink: {
    type: String,
  },
});

projectModel.pre("save", async function (next) {
  next();
});

const Project = mongoose.model("project", projectModel);

module.exports = Project;
