import React from "react";
import "./App.css";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <img src="/photo.jpeg" alt="Athisha" className="profile-pic" /><br/>
      <h1>Hello, I'm <span className="highlight">Athisha</span></h1>
      <p className="subtitle">Aspiring Full Stack Developer</p>
      <button><a href="#projects" className="btn">View My Work</a></button>
    </section>
  );
};

export default Hero;