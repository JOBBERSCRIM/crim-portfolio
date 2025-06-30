import React from "react";

const certifications = {
  GDG: [
    {
      name: "Lead Term (24/25)",
      file: "LeadTerm-JOBBERS CRIM OKIRIA.pdf",
      description: "Club Lead Completion Certificate",
    },
    {
      name: "Core Team (23/24)",
      file: "CoreTeam-Jobbers-23-24.pdf",
      description: "Core Team Member for the term 23/24",
    },
    {
      name: "Hack4People Lead",
      file: "Leads Certificate-Hack4People.pdf",
      description: "Lead for Hack4People Hackathon",
    },
    {
      name: "Hack4People Attendance",
      file: "Hack for People Attendance.pdf",
      description: "Participation Certificate",
    },
  ],

  CyberSecurity: [
    { name: "Intro to Cybersecurity", file: "Introdn2CyberSecurity.pdf" },
    { name: "Endpoint Security", file: "EndpointSecurityUpdate20250630-28-c7oz9v.pdf" },
    { name: "Cyber Threat Management", file: "CyberThreatManagementUpdate20250630-28-f0tl41.pdf" },
    { name: "Ethical Hacking", file: "EthicalHackerUpdate20250630-28-a9581b.pdf" },
    { name: "Network Defense", file: "NetworkDefenseUpdate20250630-26-7qhnuy.pdf" },
    { name: "Junior Cybersecurity Analyst", file: "JuniorCybersecurityAnalystUpdate20250630-28-ifbmqb.pdf" },
  ],
  ComputeOntario: [
    { name: "H100 GPU Programming", file: "PracticalGuide2H100-Nvidia-Certificate.pdf" },
    { name: "Data Security", file: "DataSec-Certificate.pdf" },
    { name: "AI Showcase", file: "AI Completion Certificate.pdf" },
    { name: "ML Data Prep Attendance", file: "AttendanceCertificate-MLDataPrep.pdf" },
    { name: "Bioinformatics", file: "COSS 2025 Attendance Certificate-BioINfomatics.pdf" },
    { name: "Machine Learning Mastery", file: "2025-COSS-ML Certificate.pdf" },
  ],
};

function Certifications() {
  return (
    <section id="certifications" className="py-12 px-4 text-center">
      <h2 className="text-3xl font-semibold mb-10">Certifications</h2>

      {Object.entries(certifications).map(([category, certs]) => (
        <div key={category} className="mb-12">
          <h3 className="text-2xl font-bold mb-4">{category}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {certs.map((cert, i) => (
              <div key={i} className="bg-white dark:bg-gray-800 rounded shadow p-4 text-left">
                <h4 className="text-lg font-semibold mb-1">{cert.name}</h4>
                {cert.description && (
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{cert.description}</p>
                )}
                <a
                  href={`${process.env.PUBLIC_URL}/certificates/${category}/${cert.file}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 hover:underline text-sm"
                >
                  View Certificate →
                </a>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export default Certifications;