import React from "react";
import image from './../assets/hero.jpg'

const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black py-20 px-6 sm:px-12 flex items-center"
    >
      {/* Container */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="text-left space-y-6">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-cyan-400">
            About Me
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Hello! My name is{" "}
            <span className="font-semibold text-cyan-400">Muhammad Fadil</span>,  
            an aspiring <span className="text-cyan-300">web developer</span> who is
            passionate about learning modern technologies and building creative digital
            experiences. <br /> <br />
            <span className="text-cyan-400 font-semibold">MufaDevX</span> is just a
            personal codename/alias that represents my journey in the world of software
            development and design. For me, coding is not only about creating
            functionality but also about crafting experiences that feel alive and
            meaningful.
          </p>
          <div className="flex gap-4">
            <button className="rounded-lg bg-cyan-400 px-6 py-3 font-bold text-black transition hover:bg-cyan-300">
              View Portfolio
            </button>
            <button className="rounded-lg border border-cyan-400 px-6 py-3 font-bold transition text-cyan-400 hover:bg-cyan-400 hover:text-black">
              Contact Me
            </button>
          </div>
        </div>

        {/* Image Content */}
        <div className="flex justify-center md:justify-end">
          <div className="relative group w-[300px] h-[400px] sm:w-[350px] sm:h-[450px] rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={image}
              alt="Muhammad Fadil"
              className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
            <h3 className="absolute bottom-6 left-6 text-2xl font-bold text-white">
              Muhammad Fadil
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
