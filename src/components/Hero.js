import React from "react";
import Typewriter from "typewriter-effect";

function Hero() {
  return (
    <section
      id="hero"
      className="py-16 px-4 text-center bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white"
    >
      <div className="overflow-hidden">
        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 inline-block animate-slide"
        >
          <Typewriter
            options={{
              strings: ["Welcome, I'm JOBBERS CRIM OKIRIA"],
              autoStart: true,
              loop: true,
              delay: 75,
              deleteSpeed: 40,
              pauseFor: 60000, // 10 seconds pause
              cursor: " ",
            }}
          />
        </h1>
      </div>

      <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto text-gray-300">
        Computer Engineer | Software Engineer | Web Developer | Cybersecurity Enthusiast | AI/ML Engineer
      </p>
    </section>
  );
}

export default Hero;