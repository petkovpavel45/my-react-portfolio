import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center h-full px-4">
        <h2 className="text-4xl sm:text-7xl font-bold text-white">
          Hi, I'm Pavel Petkov
        </h2>
        <h3 className="text-2xl sm:text-3xl font-semibold text-cyan-400 mt-3">
          Front-end Developer
        </h3>
        <p className="text-gray-400 py-4 max-w-lg text-lg leading-relaxed">
          I build fast, production-ready web applications with React, Angular,
          and Firebase. Currently at{" "}
          <span className="text-white font-medium">Nexern</span>, shipping 5–6
          live sites per month using AI-assisted development workflows.
        </p>

        <div className="flex gap-4 flex-wrap mt-2">
          <Link
            to="portfolio"
            smooth
            duration={500}
            className="group text-white w-fit px-6 py-3 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer hover:scale-105 duration-200"
          >
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
            </span>
          </Link>
          <Link
            to="contact"
            smooth
            duration={500}
            className="group text-white w-fit px-6 py-3 flex items-center rounded-md border border-gray-500 cursor-pointer hover:border-cyan-500 hover:scale-105 duration-200"
          >
            Contact Me
            <span className="group-hover:rotate-90 duration-300">
              <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
