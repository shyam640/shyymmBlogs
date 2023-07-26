import React from "react";
import { motion } from "framer-motion";
import "./About.css";
import MyImage from "../../assets/icon512.png";
import "../../components/atoms/PrimaryBtn/PrimaryBtn.css";
import "../shared/Shared.css";
import { BottomLine, MySkill, Education } from "../../components";
import { FaDownload } from "react-icons/fa";

const About = () => {
  return (
    <div className="parent pt-16 my-16">
      <div className="">
        <motion.div
          className="mb-10"
          initial={{ y: -200, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { duration: 1, type: "spring" },
          }}
        >
          <h3 className="text-neutral text-center">Something About Myself</h3>
          <h1 className="text-4xl font-semibold drop-shadow-md text-center">
            About <span className="text-primary">Me</span>
          </h1>
          <BottomLine />
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: { duration: 1, delay: 1.25 },
            }}
          >
            <img
              src={MyImage}
              alt="Shyam Sundar Vashishtha"
              className="p-12 w-70 h-70 transform translate-y-[-12%]"
              title="Shyam Sundar Vashishtha"
            />
          </motion.div>
          <motion.div
            className=""
            initial={{ x: 200, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: { duration: 6, delay: 1.25 },
            }}
          >
            <h1 className="text-4xl font-semibold mb-4 text-center translate-y-[-380%] sm:translate-y-[-0%] sm:text-3xl sm:mb-2 md:text-left">
              Shyam Sundar Vashishtha
            </h1>
            <p className="text-neutral font-medium text-center translate-y-[-100%] sm:translate-y-[-0%] sm:mb-2 md:text-left">
              Skilled in multiple programming languages and web development
              technologies, I have a passion for creating innovative solutions
              to complex problems. With experience in C/C++, Python, Java,
              HTML5, CSS3, JavaScript, Bootstrap, ReactJS, NodeJS, MongoDB,
              ExpressJS, SQL and familiarity with Amazon Web Services (AWS)
              platform for cloud-based solutions. I am able to tackle challenges
              head-on and deliver high-quality results.
            </p>
            <br />
            <p className="text-neutral font-medium text-center translate-y-[-150%] sm:translate-y-[-0%] sm:mb-2 md:text-left">
              With a strong track record of success and a commitment to
              excellence, I am always striving to push the boundaries of what is
              possible. My ability to think outside the box and collaborate
              effectively with others makes me a valuable asset to any team.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-4 mt-4 text-center translate-y-[-50%] sm:translate-y-[-0%] sm:mb-2 md:text-left ">
              <h2 className="font-medium">
                <span className="mr-2 text-primary">Name : </span>Shyam Sundar
                Vashishtha
              </h2>
              <h2 className="font-medium">
                <span className="mr-2 text-primary">Phone : </span>
                +91-8817719155
              </h2>
              <h2 className="font-medium">
                <span className="mr-2 text-primary">Email : </span>
                shyamvashishtha640@gmail.com
              </h2>
              <h2 className="font-medium">
                <span className="mr-2 text-primary">Address : </span>Joura,
                Madhya Pradesh, India | Pincode:476221
              </h2>
              <a
                href="https://drive.google.com/file/d/1mxA1mfXVC_8-0eFs03LmRFlR6J2MChmi/view?usp=drivesdk"
                target="blank"
              >
                <div className="flex justify-center md:justify-start translate-y-[60%] sm:translate-y-[-0%]">
                  <button className="primary-button">
                    <span>My Resume</span>
                    <span>
                      <FaDownload />
                    </span>
                  </button>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* My Skill */}
      <MySkill />

      {/* Education */}
      <Education />
    </div>
  );
};

export default About;
