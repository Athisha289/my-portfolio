import React, { useState, useEffect } from "react";
import "./App.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="logo-mark">
        <span className="logo-icon">A</span>
        <span className="logo-name">M.Athisha</span>
      </div>
      <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
        <span></span><span></span><span></span>
      </button>
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        {["home", "about", "skills", "projects", "contact"].map((sec) => (
          <li key={sec}>
            <a href={`#${sec}`} onClick={() => setMenuOpen(false)}>
              {sec.charAt(0).toUpperCase() + sec.slice(1)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;