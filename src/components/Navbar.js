import React from "react";
import { SocialIcon } from 'react-social-icons';

export default function Navbar() {
  return (
    <header className="font-ubuntu bg-gray-800 md:sticky top-0 z-10">
      <div className="container hover:scale-110 transition duration-300 ease-in-out mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="" className="ml-3 text-xl">
            Raphael Getachew
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="text-gray-500 mr-5 hover:text-white">
            Projects
          </a>
          <a href="#skills" className="text-gray-500 mr-5 hover:text-white">
            Skills
          </a>
        </nav>
        <a href="https://github.com/raphget?tab=repositories" className="text-gray-500 mr-5 hover:text-white">
            <SocialIcon url="https://github.com/raphget?tab=repositories" bgColor="white" className="mr-2" style={{ height: 30, width: 30 }}/>
            GitHub
        </a>
        <a href="https://www.linkedin.com/in/raphael-getachew-284a0118b/" className="text-gray-500 mr-5 hover:text-white">
            <SocialIcon url="https://www.linkedin.com/in/raphael-getachew-284a0118b/" className="mr-2" style={{ height: 30, width: 30 }}/>
            LinkedIn

        </a>
      </div>
    </header>
  );
}
