import React from "react";
import "./App.css";
import { FaEnvelope, FaPhoneAlt, FaGithub, FaLinkedin } from "react-icons/fa";

const contactItems = [
  {
    icon: <FaEnvelope />,
    label: "Email",
    value: "athisha289@gmail.com",
    href: "mailto:athisha289@gmail.com",
    color: "#6366f1",
  },
  {
    icon: <FaPhoneAlt />,
    label: "Phone",
    value: "+91 6374603947",
    href: "tel:+916374603947",
    color: "#8b5cf6",
  },
  {
    icon: <FaGithub />,
    label: "GitHub",
    value: "github.com/Athisha289",
    href: "https://github.com/Athisha289",
    color: "#1f2937",
  },
  {
    icon: <FaLinkedin />,
    label: "LinkedIn",
    value: "linkedin.com/in/athisha",
    href: "https://www.linkedin.com/in/athisha-m-9613b7373",
    color: "#0a66c2",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="section-label">Get In Touch</div>
      <h2 className="section-title">Contact <span className="gradient-text">Me</span></h2>
      <p className="contact-intro">
        Open to opportunities, collaborations, or just a chat — reach out anytime! 🚀
      </p>

      <div className="contact-cards-grid">
        {contactItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            className="contact-card"
            style={{ "--card-accent": item.color }}
          >
            <div className="contact-icon" style={{ color: item.color }}>{item.icon}</div>
            <div>
              <h4>{item.label}</h4>
              <p>{item.value}</p>
            </div>
          </a>
        ))}
      </div>

      <footer className="footer">
        <p><span className="gradient-text">M.Athisha</span> · Made with ❤️ in React</p>
      </footer>
    </section>
  );
};

export default Contact;
