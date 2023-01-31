import React from "react";

export default function Contact() {

  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <form
          netlify
          name="test"
          className="lg:w-fit md:w-fit flex flex-col md:ml-auto w-full">
          <h2 className="text-white  dsm:text-4xl text-3xl mb-1 font-medium title-font">
            Contact Me
          </h2>
          <h2 className="title-font pt-5 font-semibold text-white tracking-widest text-xs">
                EMAIL
              </h2>
              <a className="text-indigo-400 leading-relaxed">
                dev.raphget@email.com
              </a>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed text-indigo-400">804-517-7150</p>
        </form>
      </div> 
    </section>
  );
}
