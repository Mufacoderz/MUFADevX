import React from "react";
import image from "./../assets/hero.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-black py-20 px-6 sm:px-12 flex items-center"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="text-left space-y-8">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-cyan-400 tracking-wide">
            About Me
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            I’m{" "}
            <span className="font-semibold text-cyan-400">
              Muhammad Fadil
            </span>
            , a passionate web developer exploring the
            intersection of technology, creativity, and design.
            <br /> <br />
            Under the alias{' '}
            <span className="text-cyan-400 font-bold">MufaDevX</span>, I aim to
            craft not just functional applications, but digital experiences that feel{" "}
            alive, engaging, and meaningful.
          </p>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-cyan-300">
              My Journey
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 mt-2 bg-cyan-400 rounded-full"></div>
                <p className="text-gray-300">
                  🌱 Started learning <span className="text-cyan-300">HTML, CSS & JS</span> to
                  build small creative projects.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 mt-2 bg-cyan-400 rounded-full"></div>
                <p className="text-gray-300">
                  ⚡ Fell in love with <span className="text-cyan-300">React & MERN</span> stack,
                  building full-stack applications.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 mt-2 bg-cyan-400 rounded-full"></div>
                <p className="text-gray-300">
                  🚀 Expanding into <span className="text-cyan-300">AI-powered web experiences</span>{" "}
                  & futuristic interactive designs.
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            <button className="rounded-xl bg-cyan-400 px-6 py-3 font-bold text-black shadow-lg shadow-cyan-500/30 hover:bg-cyan-300 transition">
              View Portfolio
            </button>
            <button className="rounded-xl border border-cyan-400 px-6 py-3 font-bold text-cyan-400 hover:bg-cyan-400 hover:text-black transition">
              Contact Me
            </button>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="relative group w-[320px] h-[420px] sm:w-[360px] sm:h-[460px] rounded-2xl overflow-hidden shadow-2xl border border-cyan-400/30 backdrop-blur-md bg-white/5">
            <img
              src={image}
              alt="Muhammad Fadil"
              className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
            <h3 className="absolute bottom-6 left-6 text-2xl font-bold text-white tracking-wide">
              Muhammad Fadil
            </h3>
            <p className="absolute bottom-2 left-6 text-cyan-300 text-sm tracking-wider">
              MufaDevX
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
