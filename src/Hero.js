import React, { useEffect, useState } from "react";
import "./App.css";

const roles = ["Full Stack Developer", "React Enthusiast", "UI/UX Passionate", "CS Student"];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let timeout;
    const current = roles[roleIndex];
    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
      } else {
        timeout = setTimeout(() => setTyping(false), 1600);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
      } else {
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  return (
    <section id="home" className="hero">
      <div className="hero-bg-circles">
        <span className="circle c1"></span>
        <span className="circle c2"></span>
        <span className="circle c3"></span>
      </div>
      <div className="hero-content">
        <div className="hero-badge">👋 Welcome to my portfolio</div>
        <h1 className="hero-title">
          Hi, I'm <span className="gradient-text">Athisha</span>
        </h1>
        <p className="hero-role">
          <span className="typed-text">{displayed}</span>
          <span className="cursor">|</span>
        </p>
        <p className="hero-tagline">
          Crafting digital experiences with clean code & creative design.
        </p>
        <div className="hero-cta-group">
          <a href="#projects" className="btn-primary">View My Work</a>
          <a href="#contact" className="btn-secondary">Contact Me</a>
        </div>
        <div className="hero-scroll-hint">
          <span>Scroll down</span>
          <div className="scroll-arrow"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;