import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-20 py-32 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 md:pl-12 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="font-ubuntu sm:text-4xl text-3xl mb-4  font-medium text-white">
            Hi, I'm Raphael.
            <br/>Full Stack Developer.
          </h1>
          <div className="font-ubuntu flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-indigo-600 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-800 rounded text-lg">
              Contact Info
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Projects
            </a>
          </div>
        </div>
        <div class = "invert" className="md:pl-28 lg:max-w-lg lg:w-full md:w-1/2 w-4/6">
          <img
            className="object-cover object-center rounded filter invert"
            alt="hero"
            align="right"
            src="./binaryrain.svg"
            
          />
        </div>
      </div>
    </section>
  );
}
