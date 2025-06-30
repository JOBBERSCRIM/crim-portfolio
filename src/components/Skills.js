import React from "react";

function Skills() {
  const skills = ["Flutter Cross platform", "Cybersecurity", "Ethical Hacking", "Network Defense", "Cyberthreat Intelligence", "UI/UX-Figma", "Graphics Design", "Video Editing", "Python,C,C++,Kotlin","FireBase", "Bootsrap", "Wordpress","ReactJS", "M365 Plaforms", "Metasploit", "Wireshark", "Nmap", "Docker", "Git", "HTML/CSS", "JavaScript", "Node.js", "Linux", "AI/ML" ];

  return (
    <section id="skills" className="py-12 text-center">
  <h2 className="text-3xl font-semibold mb-6">Technical Skills</h2>
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
        {skills.map((skill, i) => (
      <div key={i} className="bg-gray-50 text-black dark:bg-gray-900 dark:text-white transition-colors duration-300">
        {skill}
      </div>
    ))}
  </div>
</section>

  );
}

export default Skills;
