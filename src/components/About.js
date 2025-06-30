import React from "react";

function About() {
  return (
    <section
      id="about"
      className="py-16 px-6 bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">
        Who am I?
      </h2>

      <div className="max-w-6xl mx-auto text-left leading-relaxed text-lg sm:text-xl space-y-4">
        <p>
          A dynamic and results-driven Computer Engineer with a proven track record in leadership,
          software development, AI/ML, and community engagement.
        </p>
        <p>
          Experienced in managing cross-functional teams, organizing events at scale, and driving
          socio-economic transformation through technology, with passion and motive for continuous
          learning.
        </p>
        <p>
          Passionate about fostering innovation and delivering impactful tech solutions that empower
          communities and guaranties a secure & ever unfolding digital future. NOW!
        </p>
      </div>
    </section>
  );
}

export default About;