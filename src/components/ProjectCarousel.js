import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

const ProjectCarousel = () => {
  const projects = [
    {
      title: "BiteBack App",
      img: "/images/projects/biteback.jpg", // Replace with your actual image
      description:
        "A Flutter-based app to combat hunger by connecting restaurants with verified distributors and communities in need. Supports NGO and government partnerships.",
      link: "#", // Add GitHub or demo link when ready
    },
    {
      title: "AI Image Recognition",
      img: "/images/projects/ai-vision.jpg",
      description:
        "An AI project using pretrained models for image recognition and big data processing. A foundational step into scalable intelligent systems.",
      link: "#",
    },
    {
      title: "Recon Toolkit for Ethical Hackers",
      img: "/images/projects/recon-suite.jpg",
      description:
        "A curated suite of reconnaissance tools for Kali Linux, designed for efficient OSINT workflows and real-time threat monitoring infrastructure.",
      link: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="py-16 px-4 bg-white dark:bg-gray-900 text-center text-black dark:text-white transition-colors duration-300"
    >
      <h2 className="text-3xl sm:text-4xl font-bold mb-10">Featured Projects</h2>

      <div className="max-w-6xl mx-auto">
        <Swiper
          effect="coverflow"
          grabCursor
          centeredSlides
          slidesPerView="auto"
          loop
          autoplay={{ delay: 3000 }}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          navigation
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          className="mySwiper"
        >
          {projects.map((proj, i) => (
            <SwiperSlide
              key={i}
              className="w-[300px] bg-white dark:bg-gray-800 text-black dark:text-white rounded-lg shadow-md p-4 transition-colors duration-300"
            >
              <img
                src={proj.img}
                alt={proj.title}
                className="w-full h-48 object-cover rounded mb-4"
              />
              <h3 className="text-lg font-semibold mb-1">{proj.title}</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                {proj.description}
              </p>
              {proj.link !== "#" && (
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 hover:underline text-sm"
                >
                  View Project →
                </a>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ProjectCarousel;