import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import React, { Suspense, useEffect } from "react";
import { NotFound, Loader, ScrollToTop, ProjectDetails, Navbar, Footer, BlogDetail, BlogIndex, MernBlogRepair } from "./components";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Auth from "./pages/auth";
import CodingProfile from "./pages/CodingProfile";
import Upload from "./pages/Upload";

const Home = React.lazy(() => import("./pages/Home"));
const Project = React.lazy(() => import("./pages/Project"));

function App() {
  const location = useLocation();
  const isFalse = location.pathname.includes("404");

  useEffect(() => {
    const path = location.pathname;
    let title = "Portfolio"; // Set a default title for unknown paths

    switch (path) {
      case "/":
        title = "Home Page";
        break;
      case "/about":
        title = "About Us";
        break;
      case "/coding-profile":
        title = "Coding Profile";
        break;
      case "/project":
        title = "Projects";
        break;
      case "/contact":
        title = "Contact Us";
        break;
      case "/auth":
        title = "Authentication";
        break;
      case "/admin/upload":
        title = "Upload";
        break;
      case "/blog":
        title = "Blog";
        break;
      case "/mern-blog":
        title = "MERN Blog";
        break;
      default:
        title = "Portfolio"; // Set a default title for unknown paths
        break;
    }

    document.title = `${title} | @its_shyam640`;
  }, [location]);

  return (
    <>
      <ScrollToTop />
      {isFalse || <Navbar />}
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/coding-profile" element={<CodingProfile />} />
          <Route path="/project" element={<Project />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/admin/upload" element={<Upload />} />
          <Route path="/blog" element={<Blog />}>
            <Route index element={<BlogIndex />} />
            <Route path=":blog_path" element={<BlogDetail />} />
          </Route>
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate replace to="/404" />}></Route>
          <Route path="/mern-blog" element={<MernBlogRepair />} />
        </Routes>
      </Suspense>
      {isFalse || <Footer />}
    </>
  );
}

export default App;
