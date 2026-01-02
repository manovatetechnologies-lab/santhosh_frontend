import React, { useEffect } from "react";
import "../styles/recognition.css";

export default function Recognition() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) e.target.classList.add("active");
        });
      },
      { threshold: 0.3 }
    );

    els.forEach(el => obs.observe(el));
  }, []);

  return (
    <section className="recognition-section">

      <div className="recognition-inner">

        {/* LEFT CONTENT */}
        <div className="recognition-left reveal">
          <span className="section-tag">RECOGNITION</span>

          <h2>
            Active business engagements<br />
            across enterprise and growth-stage companies
          </h2>

          <p>
  Recent advisory and consulting engagements reflecting trusted
  collaboration with leadership teams across multiple industries.
  All engagements were conducted within the <strong>Chennai business ecosystem</strong>,
  focusing on strategy, digital transformation, automation,
  and scalable execution.
</p>

<p className="location-note">
  Primary engagement location: Chennai, India
</p>

        </div>

        {/* RIGHT CONTENT */}
        <div className="recognition-right">

          {/* 2024 */}
          <div className="recognition-card reveal">
            <span className="year">2024</span>
            <h3>6 Business Engagements</h3>

            <ul>
              <li>Enterprise strategy & advisory sessions</li>
              <li>Founder and leadership consulting meetings</li>
              <li>Digital transformation & automation planning</li>
            </ul>
          </div>

          {/* 2025 */}
          <div className="recognition-card reveal">
            <span className="year">2025</span>
            <h3>5 Business Engagements</h3>

            <ul>
              <li>Growth strategy & scaling advisory</li>
              <li>Technology and automation consulting</li>
              <li>Operational optimization initiatives</li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}
