import React from "react";
import "./CodingProfile.css";
import "../../components/atoms/PrimaryBtn/PrimaryBtn.css";
import "../shared/Shared.css";
import { motion } from "framer-motion";
import { BottomLine } from "../../components";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import PrimaryBtn from "../../components/atoms/PrimaryBtn";
import serviceImage from "../../assets/repair.png"

const CodingProfile = () => {
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
          <h3 className="text-neutral text-center">
            Something About My Coding Journey
          </h3>
          <h1 className="text-4xl font-semibold drop-shadow-md text-center">
            Coding <span className="text-primary">Summary</span>
          </h1>
          <BottomLine />
        </motion.div>
      </div>
      <div className="flex flex-col items-center">
        <img src={serviceImage} alt="Comming Soon"/>
        <h2 className="text-2xl text-center mb-4">
          Sorry, Content of this page is not available yet.
        </h2>
        <Link to="/">
          <PrimaryBtn>
            <span>Go To HomePage</span>
            <span>
              <FaHome></FaHome>
            </span>
          </PrimaryBtn>
        </Link>
      </div>
    </div>
  );
};

export default CodingProfile;
