import React, { useEffect, useState } from "react";
import "../styles/hero.css";
import ImpactSection from "./ImpactSection";
import "../styles/about.css";
import { FiMail, FiBriefcase } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import profile from "../assets/profile1.jpg";
import ServiceSection from "./ServiceSection";
import SkillsSection from "./SkillsAdvanced";
import Recognition from "./Recognition";
import Experience from "./Experience";
import Contact from "./Contact";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";
import { FiTrendingUp } from "react-icons/fi";
import { FiExternalLink } from "react-icons/fi";
import Gallery from "./gallery";
import { useNavigate } from "react-router-dom";


function Hero() {
const [activeCard, setActiveCard] = useState(null);
const navigate = useNavigate();
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add("active");
      });
    }, { threshold: 0.15 });

    els.forEach(el => obs.observe(el));
  }, []);

const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const el = document.getElementById(location.state.scrollTo);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <>
    <section className="hero">

      {/* LEFT CONTENT */}
      <div className="hero-left">
        <span className="hero-tag reveal">
          STRATEGY • TECHNOLOGY • LEADERSHIP • GROWTH
        </span>

        <h1 className="reveal">
          Santhosh G
        </h1>

        <h3 className="reveal">
          Manager- Business Operations & Client Strategy<span> <br></br>@Manovate Technologies</span>
        </h3>

        <p className="reveal">
          I build transformative technology strategies that 3× efficiency
          for enterprises and startups. From strategic vision to full-stack
          execution, every initiative blends innovation and leadership.
        </p>

        {/* MAIN ACTION BUTTONS */}
        <div className="hero-actions reveal">
      
      {/* WORK WITH ME — Calendly */}
      <a
        href="https://calendly.com/santhoshsandy3825/business-consulting"
        target="_blank"
        rel="noopener noreferrer"
        className="primary"
      >
        Work with me ↗
      </a>

      {/* VIEW CASE STUDIES — Internal Page */}
      <button
        className="secondary"
        onClick={() => navigate("/case-studies")}
      >
        View Case Studies ↗
      </button>

    </div>

        {/* WEBSITE LINK BUTTON */}
<div className="hero-website-link reveal">
  <a
    href="https://manovate.co.in"
    target="_blank"
    rel="noopener noreferrer"
  >
    Visit Manovate Website
    <FiExternalLink className="link-icon" />
  </a>
</div>


        {/* FEATURE CARDS */}
<div className="hero-feature-cards">

  {/* CARD 1 */}
<div
  className={`feature-card reveal ${activeCard === 1 ? "active" : ""}`}
  onClick={() => setActiveCard(1)}
>
  <div className="feature-row">
    <div className="feature-icon">
      <FiBriefcase />
    </div>

    <div className="feature-content">
      <h4>Business & Consulting Services</h4>

      
      <p>Strategic consulting grounded in deep analysis and clear decision frameworks.</p>

    </div>
  </div>
</div>


  {/* CARD 2 */}
<div
  className={`feature-card reveal ${activeCard === 2 ? "active" : ""}`}
  onClick={() => setActiveCard(2)}
>
  <div className="feature-row">
    <div className="feature-icon">
      <FiTrendingUp />
    </div>

    <div className="feature-content">
      <h4>Growth & Execution Strategy</h4>


  <p>Execution-driven growth delivering measurable outcomes and scalable results.</p>
    </div>
  </div>
</div>


</div>

      </div>

      {/* RIGHT IMAGE */}
      <div className="hero-right reveal">
        <img
          src={profile}
          alt="CEO"
        />

        <div className="floating-badge">
          Manager<br />
          <span>3+ Years Experience</span>
        </div>
      </div>

    </section>

    <ImpactSection/>

    <section className="about-section reveal" id="about">
  <h2>About Me</h2>

  <div className="about-card">
    <p>
      I’m <strong>Santhosh G</strong>, 
      I'm working with organizations across multiple regions globally. I collaborate
      with startups, enterprises, and leadership teams to design scalable business
      strategies, consulting frameworks, and digital solutions that drive sustainable growth.
    </p>

    <p>
      My work spans business consulting, enterprise transformation, and technology-led
      execution, helping organizations align operations, people, and systems effectively.
      I focus on clarity, governance, and measurable outcomes ensuring every initiative
      translates into real business impact across markets and industries.
    </p>

    <div className="about-meta">
      BASED IN TAMIL NADU • WORKING GLOBALLY • MULTI-INDUSTRY EXPERIENCE
    </div>

    <div className="about-actions">
  <a
  className="primary-btn reveal"
  href="mailto:santhoshsandy@manovate.co.in"
>
  <FiMail className="btn-icon" />
  Business Email
</a>


 

  <a
    className="secondary-btn reveal"
    href="https://www.linkedin.com/in/santhosh155/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaLinkedinIn className="btn-icon gold-icon" />
    LinkedIn Profile
  </a>
</div>

  </div>
</section>

<ServiceSection/>

<SkillsSection/>

<Recognition/>
<Gallery/>

<Experience/>

<Contact/>

<Footer/>
    </>
  );
}

export default Hero;
