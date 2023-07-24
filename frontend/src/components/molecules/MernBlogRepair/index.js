import React from "react";
import Repair from "../../../assets/repair.png"

const MernBlogRepair = () => {
    return (
        <div className="h-screen w-full flex flex-col md:flex-row items-center justify-center">
            <div className="min-h-screen flex justify-center items-center">
                <img src={Repair} alt="MERN BLOG" className="w-70 h-70" />
            </div>
            <div className="w-24 h-1 md:w-1 md:h-32 bg-primary my-6 md:my-0 md:mx-8 "></div>
            <div className="flex flex-col items-center translate-y-[-150%] sm:translate-y-[-0%]">
                <h2 className="text-2xl text-center mb-4">
                    Sorry, the website is currently under construction.
                </h2>
            </div>
        </div>
    );
};

export default MernBlogRepair;
