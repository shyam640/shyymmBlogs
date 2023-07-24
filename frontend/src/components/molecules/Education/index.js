import React from "react";
import Lottie from "react-lottie";
import readingBook from "../../../assets/reading-book.json";

const Education = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: readingBook,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="pt-24">
      <div className="mb-12">
        <h1 className="text-4xl font-semibold drop-shadow-md text-center">
          My <span className="text-primary">Qualification</span>
        </h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
        <div className="">
          <Lottie
            options={defaultOptions}
            height="70%"
            width="90%"
            className="mx-auto lg:mr-auto"
          />
        </div>
        <div className="mx-auto lg:ml-auto">
          {/* Diploma */}
          <div className="p-6 bg-[#313131] bg-opacity-90 backdrop-blur-lg rounded-lg shadow-lg inline-block w-[300px] hover:shadow-primary duration-300 cursor-pointer">
            <div className="text-right mb-4">
              <h3 className="text-2xl font-semibold text-primary">
                Bachelor of Technology in Computer Science and Engineering
              </h3>
              <p className="text-sm text-neutral font-semibold">2020 - 2024</p>
            </div>
            <p className="text-sm text-neutral text-justify">
            Currently pursuing a Bachelor\'s degree in Computer Science at Lovely Professional University in Punjab, India, with coursework in Data Structures and Algorithms, Database Management Systems, and Object-Oriented Programming. I hava my current CGPA of 7.66.
            </p>
          </div>

          <div className="my-6 md:my-4 md:ml-[200px] p-6 bg-[#313131] bg-opacity-90 backdrop-blur-lg rounded-lg shadow-lg w-[300px] hover:shadow-primary duration-300 cursor-pointer">
            <div className="text-right mb-4">
              <h3 className="text-2xl font-semibold text-primary">
                Higher Secondary Education
              </h3>
              <p className="text-sm text-neutral font-semibold">2018-2019</p>
            </div>
            <p className="text-sm text-neutral text-justify">
              I have successfully completed my <b>Higher Secondary Education (XII)</b>{" "}
              from Miss Hill Higher Secondary School, Gwalior, Madhya Pradesh with a percentage of 82%.
            </p>
          </div>

          {/* SSC */}
          <div className="p-6 bg-[#313131] bg-opacity-90 backdrop-blur-lg rounded-lg shadow-lg w-[300px] hover:shadow-primary duration-300 cursor-pointer">
            <div className="text-right mb-4">
              <h3 className="text-2xl font-semibold text-primary">High School</h3>
              <p className="text-sm text-neutral font-semibold">2016 - 2017</p>
            </div>
            <p className="text-sm text-neutral text-justify">
            I have successfully completed my <b>Secondary Education (X)</b>{" "}
              from T.S.S. International School, Morena, Madhya Pradesh with a CGPA of 9.6.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
