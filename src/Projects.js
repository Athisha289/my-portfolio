import React from "react";
import "./App.css";

const projects = [
  {
    emoji: "🌐",
    title: "Portfolio Website",
    desc: "My personal portfolio built using React, featuring smooth animations, responsive design, and a professional UI.",
    tags: ["React", "CSS", "Responsive"],
    demo: "https://athisha289.github.io/my-portfolio/",
    github: "https://github.com/Athisha289/my-portfolio",
  },
  {
    emoji: "🍽️",
    title: "Catering Service Web App",
    desc: "Fully responsive website where users can browse menus and place orders with direct WhatsApp integration.",
    tags: ["HTML", "CSS", "JS", "WhatsApp API"],
    demo: "https://praveen-beeda-icecream.netlify.app/",
    github: "https://github.com/Athisha289/SL-project",
  },
  {
    emoji: "🧭",
    title: "Campus-Navigator",
    desc: "A web application designed to navigate campus. It serves as a centralized hub for making navigation easier than ever before.",
    tags: ["HTML", "CSS", "JavaScript", "leaflet.js", "OpenStreetMap"],
    demo: "https://athisha289.github.io/Campus_Navigator/",
    github: "https://github.com/Athisha289/Campus_Navigator",
  },
  {
    emoji: "🏫",
    title: "Campus Complaint Portal",
    desc: "Interactive complaint portal with submitting and track campus issues in real time.",
    tags: ["JavaScript", "HTML", "CSS"],
    demo: "https://campus-complaint-portal.netlify.app/",
    github: "https://github.com/Athisha289/campus_complaint_portal",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="section-label">What I've Built</div>
      <h2 className="section-title">Featured <span className="gradient-text">Projects</span></h2>
      <div className="project-grid">
        {projects.map((p) => (
          <div className="project-card" key={p.title}>
            <div className="project-emoji">{p.emoji}</div>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <div className="project-tags">
              {p.tags.map((t) => <span key={t} className="tag">{t}</span>)}
            </div>
            {(p.demo || p.github) && (
              <div className="project-links">
                {p.demo && <a href={p.demo} target="_blank" rel="noreferrer" className="link-btn">Live Demo ↗</a>}
                {p.github && <a href={p.github} target="_blank" rel="noreferrer" className="link-btn ghost">GitHub ↗</a>}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;