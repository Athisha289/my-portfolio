import React from "react";
import "./App.css";

const skillsData = [
  { name: "HTML5", icon: "🌐" },
  { name: "CSS3", icon: "🎨" },
  { name: "JavaScript", icon: "⚡" },
  { name: "React", icon: "⚛️" },
  { name: "Git & GitHub", icon: "🐙" },
  { name: "Responsive Design", icon: "📱" },
];

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="section-label">What I Know</div>
      <h2 className="section-title">My <span className="gradient-text">Skills</span></h2>
      <div className="skills-grid">
        {skillsData.map((skill) => (
          <div className="skill-card" key={skill.name}>
            <div className="skill-icon">{skill.icon}</div>
            <h3 className="skill-name">{skill.name}</h3>
            {/* <div className="skill-bar-track">
              <div
                className="skill-bar-fill"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
            <span className="skill-percent">{skill.level}%</span> */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;