import React from "react";
import "./App.css";

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        <div className="project-card">
          <h3>Portfolio Website</h3>
          <p>My personal portfolio built using React and CSS.</p>
        </div>
        <div className="project-card">
          <h3>WebAppliction for catering serivice</h3>
          <p>Fully responsive website users can easily browse and place orders. The project includes a direct WhatsApp integration, allowing customers to connect and place orders.</p>
          <a href="https://lnkd.in/g7h3fMeM">Live Demo</a> | <a href="https://lnkd.in/gcpS5JmU">GitHub</a>
        </div>
        <div className="project-card">
          <h3>Todo App</h3>
          <p>Built with features Add new tasks, Mark tasks as completed  and can remove, Delete tasks.</p>
          <a href="https://lnkd.in/g_T9ysxM">Live Demo</a> | <a href="https://lnkd.in/gtu2jCXe">GitHub</a>
        </div>
        <div className="project-card">
          <h3>Quiz App</h3>
          <p>This app allows users answering multiple-choice questions, and it gives instant scoring.</p>
          <a href="https://lnkd.in/erFSesJz ">Live Demo</a> | <a href="https://lnkd.in/evndat5F">GitHub</a>
        </div>
      </div>
    </section>
  );
};

export default Projects;