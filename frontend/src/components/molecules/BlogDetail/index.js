import React from "react";
import { useParams } from "react-router-dom";
import placeholderImage from "../../../assets/placeholder.jpg";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { FiExternalLink } from "react-icons/fi";
import { SiLinkedin, SiInstagram } from "react-icons/si";
import {
  EmailShareButton,
  EmailIcon,
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinIcon,
} from "react-share";

const BlogDetail = () => {
  const { blog_path } = useParams();
  const [blogs, setBlogs] = useState([]);
  const [blog, setBlog] = useState({});
  const url = window.location.href;

  const fetchBlogs = async () => {
    const { data } = await axios.get('/api/blogs');
    setBlogs(data);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  useEffect(() => {
    const current_blog = blogs.find((blog) => blog.path === blog_path);
    setBlog(current_blog);
  }, [blog_path, blogs]);


  return (
    <div className="mt-20">
      <h1 className="t text-center text-4xl">{blog?.title}</h1>
      <div className="text-center my-8">
        <LazyLoadImage
          placeholderSrc={placeholderImage}
          src={blog?.image}
          alt="Blog Main Image"
          className="main_blog_image"
        />
      </div>
      <div className="flex items-center justify-between flex-wrap mt-16 mb-4">
        <span>
          <strong className="text-primary">{blog?.date}</strong>
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2 lg:col-span-3">
          {blog?.description?.split("\n")?.map((s, i) => (
            <React.Fragment key={i + 1}>
              <p className="text-neutral text-justify">{s}</p>
              <br />
            </React.Fragment>
          ))}
        </div>
        <div className="md:col-span-2 lg:col-span-1 px-4 py-6 rounded shadow-lg">
          <div className="">
            <h4 className="text-lg font-medium mb-3">Writer :</h4>
            <p className="flex items-center gap-3">
              <span>
                <SiLinkedin />
              </span>
              <a
                href={blog?.linkedin_link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600 hover:underline flex items-center"
              >
                <span>LinkedIn</span> <FiExternalLink />
              </a>
            </p>
            <p className="flex items-center gap-3">
              <span>
                <SiInstagram />
              </span>
              <a
                href={blog?.instagram_link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600 hover:underline flex items-center"
              >
                <span>Instagram</span> <FiExternalLink />
              </a>
            </p>
          </div>

          <div className="w-full h-[1px] bg-neutral my-6"></div>

          <h4 className="text-lg font-medium mb-3">
            Share :{" "}
          </h4>
          <div className="flex items-center gap-4 flex-wrap">
            <EmailShareButton url={url} title="Shyam Sundar Vashishtha">
              <EmailIcon size={32} round={true} />
            </EmailShareButton>
            <FacebookShareButton url={url} title="Shyam Sundar Vashishtha">
              <FacebookIcon size={32} round={true} />
            </FacebookShareButton>
            <TwitterShareButton url={url} title="Shyam Sundar Vashishtha">
              <TwitterIcon size={32} round={true} />
            </TwitterShareButton>
            <LinkedinShareButton url={url} title="Shyam Sundar Vashishtha">
              <LinkedinIcon size={32} round={true} />
            </LinkedinShareButton>
            <WhatsappShareButton url={url} title="Shyam Sundar Vashishtha">
              <WhatsappIcon size={32} round={true} />
            </WhatsappShareButton>
          </div>

          <div className="w-full h-[1px] bg-neutral my-6"></div>

          <h4 className="text-lg font-medium mb-3">Tags : </h4>
          <div>
            {blog?.tags && blog.tags.split(' ').map((tag, index) => (
              <button
                key={index}
                className="bg-gray-300 text-white bg-opacity-40 px-2 py-0 m-1 rounded"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
