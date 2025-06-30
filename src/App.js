import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Certifications from "./components/Certifications";
import ProjectCarousel from "./components/ProjectCarousel";
import DarkToggle from "./components/DarkToggle";
import Blog from "./components/Blog";
import Post from "./components/Post";

function App() {
  return (
    <Router>
      <div className="bg-gray-50 text-black dark:bg-gray-900 dark:text-white font-body transition-colors duration-300">
        <Navbar />

        <Routes>
          {/* ✅ Main Portfolio Route */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <ProjectCarousel />
                <Skills />
                <About />
                <Certifications />
                <Contact />
                <Footer />
              </>
            }
          />

          {/* ✅ Blog Overview */}
          <Route path="/today" element={<Blog />} />

          {/* ✅ Full Blog Post View */}
          <Route path="/today/:slug" element={<Post />} />
        </Routes>

        <DarkToggle />

        {/* 🟢 Floating WhatsApp Button */}
        <a
          href="https://wa.me/256708165976"
          className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white text-2xl p-4 rounded-full shadow-lg transition-all"
          target="_blank"
          rel="noreferrer"
          aria-label="Chat on WhatsApp"
        >
          <FaWhatsapp />
        </a>
      </div>
    </Router>
  );
}

export default App;