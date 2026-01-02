import React from "react";
import { Link } from "react-router-dom";
import "../styles/case-study-detail.css";

export default function CaseStudyDetailExact() {
 

  return (
    <section className="csx-page">
      <div className="csx-container">

        {/* HERO */}
        <div className="csx-hero">
          <span className="csx-eyebrow">CASE STUDY</span>

          <h1>
            Nutric AI – Personalized Nutrition
            <br />System
          </h1>

          <p className="csx-subtitle">
            Built a CNN-LSTM pipeline that fuses vision intelligence,
            medical records, and behaviour tracking to automate bespoke
            nutrition journeys for patients.
          </p>

          <div className="csx-pills">
            <span>ROLE · Lead Architect & Researcher</span>
            <span>DOMAIN · HealthTech</span>
            <span>TIMELINE · 2023 – 2025</span>
          </div>
        </div>

        {/* KEY METRICS */}
        <section className="csx-section">
          <span className="csx-label">KEY METRICS</span>
          <h2>Impact in numbers</h2>
          <p className="csx-muted">
            Measurable outcomes that defined the success of this engagement.
          </p>

          <ul className="csx-metrics">
            <li>Reduced manual planning time by <strong>70%</strong> through automated intake scoring.</li>
            <li>Raised adherence accuracy to <strong>92%</strong> by contextualising vitals and allergies.</li>
            <li>Accepted for publication at <strong>ICCSP 2025</strong>, validating scientific rigour.</li>
          </ul>
        </section>

        {/* CHALLENGE & SOLUTION */}
        <section className="csx-section">
          <span className="csx-label">CHALLENGE & SOLUTION</span>
          <h2>From pain points to orchestrated delivery</h2>
          <p className="csx-muted">
            A transparent view of how we attacked the problem, architected the
            solution, and delivered tangible value.
          </p>

          <div className="csx-cards">
            <div className="csx-card">
              <h3>Problem</h3>
              <p>
                Clinicians needed a way to translate health records and
                meal images into precise nutrition plans without manual review.
              </p>
            </div>

            <div className="csx-card">
              <h3>Solution</h3>
              <p>
                Engineered a modular platform combining ingestion APIs,
                AI vision models, and dietitian workflows with
                compliance-ready audit trails.
              </p>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="csx-section">
          <span className="csx-label">PROCESS</span>
          <h2>Blueprint we executed</h2>
          <p className="csx-muted">
            Each phase was designed to de-risk delivery while accelerating
            time-to-value.
          </p>

          <div className="csx-phase">
            <span className="csx-phase-tag">PHASE</span>
            <h3>Discovery & Data Modelling</h3>
            <ul>
              <li>Stakeholder workshops with clinicians and dietitians</li>
              <li>Data quality audits across EMR, wearables, and images</li>
              <li>Success metrics aligned to safety and adherence</li>
            </ul>
          </div>

          <div className="csx-phase">
            <span className="csx-phase-tag">PHASE</span>
            <h3>Platform Engineering</h3>
            <ul>
              <li>Custom CNN-LSTM ensemble for multi-modal inference</li>
              <li>Human-in-the-loop feedback workflows</li>
              <li>HIPAA-aligned observability and monitoring</li>
            </ul>
          </div>

          <div className="csx-phase">
            <span className="csx-phase-tag">PHASE</span>
            <h3>Adoption & Scale</h3>
            <ul>
              <li>Hospital pilots and clinical validation</li>
              <li>Nutritionist enablement playbooks</li>
              <li>Academic publication and dissemination</li>
            </ul>
          </div>
        </section>

        {/* NEXT STEPS */}
        <section className="csx-cta">
          <span className="csx-label">NEXT STEPS</span>
          <h2>Continue the conversation</h2>
          <p className="csx-muted">
            Ready to explore a similar transformation? Reach out for a
            tailored roadmap.
          </p>

          <div className="csx-buttons">
            <button className="dark">Request Demo ↗</button>
            <button className="dark">SoftServe Hub ↗</button>
            <Link to="/" className="gold">Back to portfolio ↗</Link>
          </div>
        </section>

      </div>
    </section>
  );
}
