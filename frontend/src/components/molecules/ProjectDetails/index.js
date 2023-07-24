import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import axios from "axios";
import { PrimaryBtn, SecondaryBtn } from "../../../components";
import { FaLink, FaCode } from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";
import placeholderImage from "../../../assets/placeholder.jpg";

const ProjectDetails = () => {
  const [projects, setProjects] = useState([]);
  const { id } = useParams();
  const [item, setItem] = useState();


  const fetchProjects = async () => {
    const { data } = await axios.get('/api/projects');
    setProjects(data);
  }

  useEffect(() => {
    fetchProjects();
  }, [])

  useEffect(() => {
    const filtered = projects.find((item) => item._id === id);
    setItem(filtered);
  }, [id, projects]);

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 2,
    autoplay: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="parent py-16">
      <h1 className="text-center text-4xl font-medium mt-8">{item?.title}</h1>

      <Slider {...settings}>
        {item?.images?.map((image, index) => (
          <div key={index} className="mt-6">
            <div
              className="mx-1 md:mx-4 rounded-lg shadow-xl single-blog cursor-pointer border-2 border-primary flex flex-col justify-between"
              style={{ backgroundColor: "#313131" }}
            >
              <LazyLoadImage
                placeholderSrc={placeholderImage}
                src={image}
                className="project_image object-cover"
              />
            </div>
          </div>
        ))}
      </Slider>
      <p className="text-neutral font-medium mt-10 mb-6">
        <span className="font-semibold text-white text-xl">Description: </span>{" "}
        {item?.description}
      </p>
      <div className="my-6">
        <h2 className="text-2xl font-semibold mb-3">Features</h2>
        <ul className="list-disc grid grid-cols-1 md:grid-cols-2 ml-4">
          {item?.features?.split('\n').map((feature, index) => (
            <li key={index} className="text-neutral">
              {feature}
            </li>
          ))}
        </ul>
      </div>


      <div className="my-6">
        <h2 className="text-2xl font-semibold mb-3">Tools & Technologies:</h2>
        <ul className="list-disc grid grid-cols-1 md:grid-cols-2 ml-4">
          {item?.technologies?.split('\n').map((technology, index) => (
            <li key={index} className="text-neutral">
              {technology}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center mt-8">
        <a href={item?.liveLink} className="mr-4" target="blank">
          <PrimaryBtn>
            <span>Visit Now</span>
            <span>
              <FaLink />
            </span>
          </PrimaryBtn>
        </a>
        <a href={item?.codeLink} target="blank">
          <SecondaryBtn>
            <span>Source Code</span>
            <span>
              <FaCode />
            </span>
          </SecondaryBtn>
        </a>
      </div>
    </div>
  );
};

export default ProjectDetails;
