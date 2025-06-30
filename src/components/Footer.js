import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";


function Footer() {
  return (
    <footer className="bg-black text-white py-8 text-center">
      <p>&copy; {new Date().getFullYear()} JOBBERS CRIM OKIRIA. All rights reserved.</p>
      <div className="flex justify-center gap-6 mt-4 text-2xl">
        <a href="https://github.com/CRIMJOBBERS" target="_blank" rel="noreferrer">
          <FaGithub className="hover:text-green-400 transition" />
        </a>
        <a href="http://www.linkedin.com/in/jobbers-crim-okiria-713847249" target="_blank" rel="noreferrer">
          <FaLinkedin className="hover:text-green-400 transition" />
        </a>
        <a href="https://twitter.com/JobbersCrim" target="_blank" rel="noreferrer">
          <FaTwitter className="hover:text-green-400 transition" />
        </a>
        <a href="https://wa.me/256708165976" target="_blank" rel="noreferrer">
          <FaWhatsapp className="hover:text-green-400 transition" />
        </a>
      </div>
    </footer>
  );

}

export default Footer;
