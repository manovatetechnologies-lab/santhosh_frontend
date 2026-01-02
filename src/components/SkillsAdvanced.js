import React, { useEffect } from "react";
import {
  FiCpu,
  FiDatabase,
  FiSettings,
  FiTrendingUp,
  FiCode,
  FiTool,
  FiUsers,
} from "react-icons/fi";
import "../styles/skills-advanced.css";

export default function SkillsBands() {
  useEffect(() => {
    const bands = document.querySelectorAll(".skill-band");
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) e.target.classList.add("active");
        });
      },
      { threshold: 0.3 }
    );
    bands.forEach(b => obs.observe(b));
  }, []);

  return (
    <section className="skills-bands" id="skills">

      <span className="skills-tag">SKILLS</span>

      <h2 className="skills-title">
        Capabilities built for modern, scalable businesses
      </h2>

      {/* ================= AI & INTELLIGENCE ================= */}
    
      {/* ================= AUTOMATION ================= */}
      <div className="skill-band">
        <div className="skill-head">
          <FiSettings className="skill-icon" />
          <h3>Automation Leadership</h3>
        </div>

        <p>
          Architecting intelligent automation systems that reduce cost,
          increase speed, and improve operational reliability.
        </p>

        <div className="skill-chips">
          <span>Workflow Automation</span>
          <span>Process Optimization</span>
          <span>Automation Strategy</span>
          <span>Intelligent Automation</span>
          <span>API Engineering</span>
          <span>n8n Workflows</span>
          <span>Change Management</span>
        </div>
      </div>

      {/* ================= BUSINESS & STRATEGY ================= */}
      <div className="skill-band">
        <div className="skill-head">
          <FiTrendingUp className="skill-icon" />
          <h3>Business & Strategic Skills</h3>
        </div>

        <p>
          Aligning technology with business objectives to enable growth,
          transformation, and competitive advantage.
        </p>

        <div className="skill-chips">
          <span>Digital Transformation (DX)</span>
          <span>Business Development</span>
          <span>Business Growth Strategies</span>
          <span>Business Strategy & Client Solutions</span>
          <span>Project Planning</span>
          <span>Project Management</span>
          <span>Product Development</span>
        </div>
      </div>

      {/* ================= ENGINEERING ================= */}
      <div className="skill-band">
        <div className="skill-head">
          <FiCode className="skill-icon" />
          <h3>Engineering & Platforms</h3>
        </div>

        <p>
          Building robust, maintainable systems using modern engineering
          frameworks and best practices.
        </p>

        <div className="skill-chips">
          <span>PyTorch</span>
          <span>Model Serialization (pickle)</span>
          <span>API Integration</span>
          <span>Debugging Code</span>
        </div>
      </div>

      {/* ================= TOOLS ================= */}
      <div className="skill-band">
        <div className="skill-head">
          <FiTool className="skill-icon" />
          <h3>Technical Tools & Productivity</h3>
        </div>

        <div className="skill-chips">
          <span>Microsoft Excel</span>
          <span>Microsoft PowerPoint</span>
          <span>Microsoft Office</span>
          <span>Documentation</span>
          <span>Typing</span>
        </div>
      </div>
       <div className="skill-band">
        <div className="skill-head">
          <FiCpu className="skill-icon" />
          <h3>AI & Advanced Intelligence</h3>
        </div>

        <p>
          Designing production-ready AI systems that learn, reason, and scale
          across real-world business environments.
        </p>

        <div className="skill-chips">
          <span>Artificial Intelligence (AI)</span>
          <span>Machine Learning (ML)</span>
          <span>Predictive Modeling</span>
          <span>LSTM Networks</span>
          <span>Natural Language Processing (NLP)</span>
          <span>Large Language Models (LLMs)</span>
          <span>Generative AI</span>
          <span>Intelligent Agents</span>
        </div>
      </div>

      {/* ================= DATA & ANALYTICS ================= */}
      <div className="skill-band">
        <div className="skill-head">
          <FiDatabase className="skill-icon" />
          <h3>Data Science & Analytics</h3>
        </div>

        <p>
          Transforming complex data into insights that drive leadership,
          forecasting, and strategic decision-making.
        </p>

        <div className="skill-chips">
          <span>Data Science</span>
          <span>Data Analysis</span>
          <span>Data Engineering</span>
          <span>Database Administration</span>
          <span>Data Preparation</span>
          <span>Data Transformation</span>
          <span>Data Visualization</span>
          <span>Analytical Skills</span>
          <span>Microsoft Power BI</span>
          <span>Jupyter</span>
        </div>
      </div>

      {/* ================= SOFT SKILLS ================= */}
      <div className="skill-band">
        <div className="skill-head">
          <FiUsers className="skill-icon" />
          <h3>Soft Skills & Leadership</h3>
        </div>

        <p>
          Leading teams, communicating vision, and driving innovation across
          cross-functional environments.
        </p>

        <div className="skill-chips">
          <span>Communication</span>
          <span>Team Collaboration</span>
          <span>Problem Solving</span>
          <span>Innovation & Creativity</span>
          <span>Recognition</span>
        </div>
      </div>

    </section>
  );
}
