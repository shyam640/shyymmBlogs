import React from "react";
import Lottie from "react-lottie";
import {
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaReact,
  FaBootstrap,
  FaGithub,
  FaJava,
  FaPython,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiCplusplus,
  SiPostman,
  SiAmazonaws,
} from "react-icons/si";
import man from "../../../assets/man.json";

const MySkill = () => {
  const programmingStack = [
    {title: "C/C++", icon: <SiCplusplus className="text-blue-700"/>},
    {title: "Java", icon: <FaJava className="text-red-400"/>},
    {title: "Python", icon: <FaPython className="text-yellow-600"/>}
  ];
  const webStack = [
    { title: "HTML", icon: <FaHtml5 className="text-orange-600" /> },
    { title: "CSS", icon: <FaCss3Alt className="text-blue-400" /> },
    {
      title: "JavaScript",
      icon: <SiJavascript className="text-yellow-500 rounded" />,
    },
    { title: "NodeJS", icon: <FaNodeJs className="text-green-600" /> },
  ];
  const frameworks = [
    { title: "React", icon: <FaReact className="text-cyan-400" /> },
    { title: "Bootstrap", icon: <FaBootstrap className="text-indigo-600" /> },
    { title: "Tailwind-CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
    { title: "ExpressJS", icon: <SiExpress className="text-neutral" /> },
  ];
  const database = [
    {title: "MongoDB", icon: <SiMongodb className="text-green-800"/>},
    {title: "Firebase", icon: <SiFirebase className="text-blue-800"/>}
  ];
  const tools = [
    { title: "Postman", icon: <SiPostman className="text-red-600" /> },
    { title: "Git & GitHub", icon: <FaGithub className="text-black" /> },
    { title: "Amazon Web Service", icon: <SiAmazonaws className="text-white-500" /> },
  ];

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: man,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="pt-24">
      <h1 className="text-4xl font-semibold drop-shadow-md text-center mb-8">
        My <span className="text-primary">Skills</span>
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-evenly my-8">
        <div>
          <h2 className="text-cyan-500 text-xl font-semibold">Programming Stack:</h2>
          <div className="flex flex-wrap mb-4">
            {programmingStack?.map((skill) => (
              <div key={skill.title} className="text-center m-3">
                <div
                  className="rounded-lg h-12 w-12 hover:-translate-y-2 duration-300 flex items-center justify-center text-3xl cursor-pointer shadow-lg hover:shadow-xl bg-[#313131] hover:bg-[#262626] mx-auto"
                  title={skill.title}
                >
                  {skill?.icon}
                </div>
              </div>
            ))}
          </div>
          <h2 className="text-cyan-500 text-xl font-semibold">Web Stack:</h2>
          <div className="flex flex-wrap mb-4">
            {webStack?.map((skill) => (
              <div key={skill.title} className="text-center m-3">
                <div
                  className="rounded-lg h-12 w-12 hover:-translate-y-2 duration-300 flex items-center justify-center text-3xl cursor-pointer shadow-lg hover:shadow-xl bg-[#313131] hover:bg-[#262626] mx-auto"
                  title={skill.title}
                >
                  {skill?.icon}
                </div>
              </div>
            ))}
          </div>
          <h2 className="text-cyan-500 text-xl font-semibold">
            Library & Frameworks:
          </h2>
          <div className="flex flex-wrap mb-4">
            {frameworks?.map((skill) => (
              <div key={skill.title} className="text-center m-3">
                <div
                  className="rounded-lg h-12 w-12 hover:-translate-y-2 duration-300 flex items-center justify-center text-3xl cursor-pointer shadow-lg hover:shadow-xl bg-[#313131] hover:bg-[#262626] mx-auto"
                  title={skill.title}
                >
                  {skill?.icon}
                </div>
              </div>
            ))}
          </div>
          <h2 className="text-cyan-500 text-xl font-semibold">
            Databases:
          </h2>
          <div className="flex flex-wrap mb-4">
            {database?.map((skill) => (
              <div key={skill.title} className="text-center m-3">
                <div
                  className="rounded-lg h-12 w-12 hover:-translate-y-2 duration-300 flex items-center justify-center text-3xl cursor-pointer shadow-lg hover:shadow-xl bg-[#313131] hover:bg-[#262626] mx-auto"
                  title={skill.title}
                >
                  {skill?.icon}
                </div>
              </div>
            ))}
          </div>
          <h2 className="text-cyan-500 text-xl font-semibold">
            Platforms & Tools:
          </h2>
          <div className="flex flex-wrap mb-4">
            {tools?.map((skill) => (
              <div key={skill.title} className="text-center m-3">
                <div
                  className="rounded-lg h-12 w-12 hover:-translate-y-2 duration-300 flex items-center justify-center text-3xl cursor-pointer shadow-lg hover:shadow-xl bg-[#313131] hover:bg-[#262626] mx-auto"
                  title={skill.title}
                >
                  {skill?.icon}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <Lottie options={defaultOptions} height={400} width={360} />
        </div>
      </div>
    </div>
  );
};

export default MySkill;
