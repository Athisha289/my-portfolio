import React from "react";
import "./App.css";
import { FaEnvelope, FaPhoneAlt, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <p className="contact-intro">
        I’d love to connect! Whether you want to collaborate, ask something, or
        just say hi — feel free to reach out 😊
      </p>

      <div className="contact-cards">
        <div className="contact-card">
          <FaEnvelope className="contact-icon" />
          <h4>Email</h4>
          <p>athisha289@gmail.com</p>
        </div>
        <div className="contact-card">
          <FaPhoneAlt className="contact-icon" />
          <h4>Phone</h4>
          <p>+91 6374603947</p>
        </div>
        <div className="contact-card">
          <FaGithub className="contact-icon" />
          <h4>GitHub</h4>
          <a href="https://github.com/Athisha289" 
          target="_blank" rel="noreferrer">
            github.com/athisha
          </a>
        </div>
        <div className="contact-card">
          <FaLinkedin className="contact-icon" />
          <h4>LinkedIn</h4>
          <a
            href="https://www.linkedin.com/in/athisha-m-9613b7373?utm_source=share_via&utm_content=profile&utm_medium=member_android"
            target="_blank"
            rel="noreferrer"
          >
            linkedin.com/in/athisha
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
