import React from "react";
import "./App.css";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="section-label">Who I Am</div>
      <h2 className="section-title">About <span className="gradient-text">Me</span></h2>
      <div className="about-grid">
        <div className="about-card">
          <div className="about-icon">🎓</div>
          <h3>Education</h3>
          <p>B.Sc. Computer Science student (3rd Year), building a strong foundation in software development and algorithms.</p>
        </div>
        <div className="about-card featured-card">
          <div className="about-icon">💡</div>
          <h3>Who I Am</h3>
          <p>
            I'm <strong>Athisha</strong>, a passionate web developer who loves turning ideas into
            elegant digital experiences. I thrive on learning new technologies and building
            projects that make a real impact.
          </p>
        </div>
        <div className="about-card">
          <div className="about-icon">🚀</div>
          <h3>Experience</h3>
          <p>Built responsive apps with backend — Completed internships and developed real-world projects including admin dashboards, complaint portals, and business websites — deployed on Netlify & GitHub Pages with Git version control.</p>
        </div>
      </div>
    </section>
  );
};

export default About;