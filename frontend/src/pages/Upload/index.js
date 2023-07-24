import React from "react";
import { useEffect, useState } from "react";
import "./style.css"
import { useNavigate } from "react-router-dom";
import BlogForm from "./blogForm";
import TestimonialForm from "./testimonialForm";
import ProjectForm from "./projectForm";
import { RiCodeBoxFill, RiLogoutBoxLine, RiSimCardFill } from "react-icons/ri";
import { SiBlogger } from "react-icons/si";

const Upload = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    if (!userInfo) {
      navigate("/auth");
    }
  }, [navigate]);
  const handleLogout = async (e) => {
    e.preventDefault();
    localStorage.clear();
    navigate("/auth");
  }

  const [activeForm, setActiveForm] = useState('blog'); // State to track the active form

  const handleButtonClick = (formName) => {
    setActiveForm(formName);
  };
  return (
    <div className="flex flex-col">
      <div class="mt-24 button-container">
        <button onClick={() => handleButtonClick('blog')} class="m-4 primary-button text-white">
          <span>Upload Blog</span>
          <span>
            <SiBlogger />
          </span>
        </button>
        <button onClick={() => handleButtonClick('project')} class="m-4 primary-button text-white peer">
          <span>Upload Project</span>
          <span>
            <RiCodeBoxFill />
          </span>
        </button>
        <button onClick={() => handleButtonClick('testimonial')} class="m-4 primary-button text-white peer">
          <span>Upload Testimonial</span>
          <span>
            <RiSimCardFill />
          </span>
        </button>
        <button onClick={handleLogout} class="m-4 primary-button text-white peer">
          <span>Logout</span>
          <span>
            <RiLogoutBoxLine />
          </span>
        </button>
      </div>

      <div class="form-container">
        {activeForm === 'blog' && <BlogForm />}
        {activeForm === 'project' && <ProjectForm />}
        {activeForm === 'testimonial' && <TestimonialForm />}
      </div>
    </div>
  );
};

export default Upload;
