const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const path = require("path");
const cors = require("cors");
const connectDB = require("./config/db");
const userRoute = require("./routes/userRoute");
const Blog = require("./models/blogModel");
const { errorHandler, notFound } = require("./middlewares/errorMiddleware");
const Testimonial = require("./models/testimonialModel");
const Project = require("./models/projectModel");

const app = express();
connectDB();
app.use(express.static(path.join(__dirname, "build")));
app.use(express.json());

app.use(cors());
// CORS middleware
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.json("API Working !!");
});

// Routes
app.get("/api/blogs", async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (error) {
    console.error("Error fetching blogs", error);
    res.status(500).json({ error: "Error fetching blogs" });
  }
});

app.post("/api/blog", async (req, res) => {
  try {
    const blogData = req.body;
    const blog = new Blog(blogData);
    await blog.save();
    res.json(blog);
  } catch (error) {
    res.status(500).json({ error: "Error saving blog" });
  }
});

// Routes
app.get("/api/testimonials", async (req, res) => {
  try {
    const testimonials = await Testimonial.find();
    res.json(testimonials);
  } catch (error) {
    res.status(500).json({ error: "Error fetching testimonials" });
  }
});

app.post("/api/testimonial", async (req, res) => {
  try {
    const testimonialData = req.body;
    const testimonial = new Testimonial(testimonialData);
    await testimonial.save();
    res.json(testimonial);
  } catch (error) {
    res.status(500).json({ error: "Error saving testimonial" });
  }
});

// Routes
app.get("/api/projects", async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: "Error fetching projects" });
  }
});

app.post("/api/project", async (req, res) => {
  try {
    const projectData = req.body;
    const project = new Project(projectData);
    await project.save();
    res.json(project);
  } catch (error) {
    res.status(500).json({ error: "Error saving project" });
  }
});

app.use("/api/users", userRoute);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, console.log(`Server started on port ${PORT}`));

module.exports = app;
