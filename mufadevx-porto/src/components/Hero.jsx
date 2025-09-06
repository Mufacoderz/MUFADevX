import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex h-screen flex-col items-center justify-center overflow-hidden text-center"
    >
      {/* Background 3D Spline */}
      <div className="absolute inset-0 z-0">
        <iframe
          src="https://my.spline.design/nexbotrobotcharacterconcept-y43u1B9tiBKErdJKm6WjtWfJ/"
          title="3D Hero Background"
          frameBorder="0"
          width="100%"
          height="100%"
          className="w-full h-full"
        />
      </div>

      {/* Overlay untuk area konten supaya klik bisa diteruskan ke tombol */}
      <div className="absolute inset-0 z-10 pointer-events-none"></div>

      {/* Content */}
      <div className="relative z-20">
        <h1 className="text-6xl font-extrabold tracking-wider text-white md:text-8xl">
          MUFA<span className="text-cyan-400">DevX</span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">
          Powered by AI, designed for humans. Build. Explore. Innovate.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex justify-center space-x-6">
          <a
            href="#about"
            className="rounded-lg bg-cyan-400 px-6 py-3 font-bold text-black transition hover:bg-cyan-300 z-30 pointer-events-auto"
          >
            Explore Projects
          </a>
          <a
            href="#contact"
            className="rounded-lg border border-cyan-400 px-6 py-3 font-bold transition text-cyan-400 hover:bg-cyan-400 hover:text-black z-30 pointer-events-auto"
          >
            Let's Connect
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
