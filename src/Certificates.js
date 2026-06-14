import React from "react";
import "./App.css";

const certificates = [
  {
    title: "Hackathon certificate",
    issuer: "Heber Hack",
    date: "2026",
    image: "/certificates/hackathon_certificate.jpeg",
    link: "#"
  },
  {
    title: "Internship Certificate",
    issuer: "At UK Info Tech",
    date: "2025",
    image: "/certificates/UK_info_tech_internship.jpeg",
    link: "#"
  },
  {
    title: "Technical Competition",
    issuer: "At JJ college of Engineering",
    date: "2026",
    image: "/certificates/Technical_competition.jpeg",
    link: "#"
  },
  {
    title: "Internship Certificate",
    issuer: "At Canaan-ed-tech",
    date: "2026",
    image: "/certificates/canaan_internship.jpeg",
    link: "#"
  }
];

const Certificates = () => {
  return (
    <section id="certificates" className="projects">
      <div className="section-label">My Qualifications</div>
      <h2 className="section-title">My <span className="gradient-text">Certificates</span></h2>
      <div className="project-grid">
        {certificates.map((cert, index) => (
          <div className="project-card" key={`${cert.title}-${index}`}>
            <div className="cert-image-wrapper" style={{ marginBottom: '1rem', borderRadius: '12px', overflow: 'hidden' }}>
              <img src={process.env.PUBLIC_URL + cert.image} alt={cert.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
            </div>
            <h3>{cert.title}</h3>
            <p className="cert-issuer" style={{ color: 'var(--primary)', fontWeight: 'bold', marginBottom: '0.5rem' }}>{cert.issuer} • {cert.date}</p>
            <p>{cert.description}</p>
            <div className="project-links" style={{ marginTop: '1.5rem' }}>
              <a href={cert.link && cert.link !== "#" ? cert.link : process.env.PUBLIC_URL + cert.image} target="_blank" rel="noreferrer" className="link-btn">View Certificate ↗</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
