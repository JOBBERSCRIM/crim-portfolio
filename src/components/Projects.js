import React from "react";

function Projects() {
  const projects = [
    { name: "Network Scanner", description: "Python-based port and vulnerability scanner.", link: "#" },
    { name: "Cyber Vault", description: "Secure file-sharing tool with AES encryption.", link: "#" },
    { name: "Portfolio v1", description: "My first site using WordPress & Bootstrap.", link: "#" }
  ];

  return (
    <section id="projects" style={{ padding: "2rem" }}>
      <h2>Featured Projects</h2>
      <div style={{ display: "flex", gap: "1rem", overflowX: "auto" }}>
        {projects.map((project, i) => (
          <div key={i} style={{ minWidth: "250px", border: "1px solid #ccc", padding: "1rem" }}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.link}>View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
