import React from "react";
import {
  
  FiBriefcase,
  FiCalendar,
  FiLinkedin,
  FiGlobe,
  FiDownload
} from "react-icons/fi";
import "../styles/contact.css";


export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-card">

        <span className="contact-tag">CONTACT</span>

        <h2>
          Let’s build intelligent systems that deliver
          <br /> measurable outcomes
        </h2>

        <p>
          Share the problem you’re solving and I’ll craft an engagement
          roadmap that aligns strategy, automation, and delivery around
          your business goals.
        </p>

        {/* ACTION LINKS */}
        <div className="contact-actions">
       
          <a href="mailto:santhoshsandy@manovate.co.in">
            <FiBriefcase /> Business Email
          </a>

          <a
  href="https://calendly.com/santhoshsandy3825/business-consulting"
  target="_blank"
  rel="noopener noreferrer"
>
  <FiCalendar /> Schedule Intro Call
</a>

          <a href="https://www.linkedin.com/in/santhosh155/" target="_blank" rel="noreferrer">
            <FiLinkedin /> LinkedIn
          </a>

          <a href="https://manovate.co.in/" target="_blank" rel="noreferrer">
            <FiGlobe /> Website
          </a>
        </div>

        {/* PRIMARY CTA */}
   <a
  className="contact-primary"
  href="/assets/Santhosh-card.pdf"
  download
>
  Download Business Card <FiDownload />
</a>


      </div>
    </section>
  );
}
