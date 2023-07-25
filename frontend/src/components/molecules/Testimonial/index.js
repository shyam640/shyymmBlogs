import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { FaQuoteLeft } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Testimonial.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import {
  headingAnimation,
  sectionBodyAnimation,
} from "../../../hooks/useAnimation";
import { BottomLine } from "../../../components";

const Testimonial = () => {
  const [ref, inView] = useInView();
  const [testimonial, setTestimonial] = useState([]);
  const [viewDiv, setViewDiv] = useState(false);
  const animation = useAnimation();

  const fetchTestimonial = async () => {
    const {data} = await fetch('/api/testimonials');
    console.log(data);
    setTestimonial(data);
  }

  useEffect(() => {
    fetchTestimonial();
  }, [])

  useEffect(() => {
    if (inView) {
      setViewDiv(true);
    } else {
      setViewDiv(false);
    }
  }, [inView, animation]);
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 3,
    autoplay: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-12 parent">
      <motion.div
        className="mb-8"
        initial="hidden"
        animate={viewDiv && "visible"}
        variants={headingAnimation}
      >
        <h3 className="text-center text-neutral">What My Clients Say</h3>
        <h1 className="text-4xl font-semibold text-center text-primary">
          Testimonials
        </h1>
        <BottomLine />
      </motion.div>

      <motion.div
        ref={ref}
        initial="hidden"
        animate={viewDiv && "visible"}
        variants={sectionBodyAnimation}
      >
        <Slider {...settings}>
          {testimonial.map((review) => (
            <div key={review._id} className="mt-6">
              <div
                className="mx-4 rounded-lg shadow-xl single-blog cursor-pointer border-2 border-primary pt-6 flex flex-col justify-between h-[300px]"
                style={{ backgroundColor: "#313131" }}
              >
                <div className="px-6">
                  <FaQuoteLeft className="mb-4 text-4xl text-primary"></FaQuoteLeft>
                  <h2 className="text-center">{review.description}</h2>
                </div>
                <div className="flex justify-end px-6 py-2 mt-12 rounded-b bg-primary">
                  <div className="mr-4 text-right text-gray-200">
                    <h2 className="font-medium leading-none">{review.name}</h2>
                    <p className="text-xs leading-none">{review.position}</p>
                  </div>
                  <img
                    src={review.image}
                    alt="client"
                    className="inline-block w-16 h-16 -mt-10 bg-white rounded-full"
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </motion.div>
    </div>
  );
};

export default Testimonial;
