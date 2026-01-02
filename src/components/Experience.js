import React, { useEffect } from "react";
import "../styles/experience.css";

export default function ExperienceSpotlight() {
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
    <section className="experience-spotlight">
      <div className="experience-inner">

        {/* HEADER */}
        <div className="experience-header reveal">
          <span className="section-tag">PROFESSIONAL EXPERIENCE</span>
          <h2>Driving business growth and global client partnerships</h2>

          <p>
            Over <strong>3+ years of professional experience</strong> across
            business operations, client strategy, and executive leadership,
            working with organizations across multiple industries and markets.
          </p>
        </div>

        {/* ROLE 1 */}
        <div className="role-row reveal">
          <div className="role-main">
            <h3>Manager – Business Operations & Client Strategy</h3>
            <span className="company">Manovate Technologies</span>
          </div>

          <div className="role-meta">
            <span className="years">2025 — Present</span>
          </div>

          <div className="role-details">
            <p>
              As Manager – Business Operations & Client Strategy at Manovate Technologies,
              I am responsible for driving revenue growth, managing strategic client
              relationships, and aligning delivery execution to support sustainable
              business expansion across domestic and international markets.
            </p>

            <p>
              My role bridges business development, client consulting, and operational
              coordination. I work closely with founders, leadership teams, and delivery
              stakeholders to ensure every engagement is structured, scalable, and
              outcome-driven, with a strong focus on long-term value creation.
            </p>

            <ul>
              <li>
                Led end-to-end business development initiatives including market research,
                lead generation, client acquisition, proposals, pricing strategy,
                negotiations, and deal closures
              </li>
              <li>
                Managed global client engagements across IT and Non-IT service domains,
                ensuring alignment between client expectations and delivery execution
              </li>
              <li>
                Worked closely with technical, delivery, and operations teams to translate
                business requirements into feasible, scalable, and value-driven solutions
              </li>
              <li>
                Acted as the primary client relationship manager, ensuring smooth onboarding,
                transparent communication, and high customer satisfaction
              </li>
              <li>
                Supported leadership in defining pricing models, service offerings,
                go-to-market strategies, and long-term growth planning
              </li>
              <li>
                Conducted market and competitor analysis to identify new opportunities,
                industry trends, and expansion areas
              </li>
            </ul>
          </div>
        </div>

        {/* ROLE 2 */}
        <div className="role-row reveal">
          <div className="role-main">
            <h3>Chief Executive Officer</h3>
            <span className="company">Softserve Hub</span>
          </div>

          <div className="role-meta">
            <span className="years">2022 — 2025</span>
          </div>

          <div className="role-details">
            <p>
              As a Chief Executive Officer of Softserve Hub, I was responsible
              for establishing the company’s vision, service offerings, and operational
              framework. I led the organization from its early stages, overseeing
              business strategy, client consulting, partnerships, and end-to-end
              delivery execution.
            </p>

            <p>
              I worked directly with startups and growing businesses as a strategic
              advisor, helping clients define digital and operational roadmaps.
              My involvement spanned requirement discovery, solution design,
              execution planning, and long-term advisory support.
            </p>

            <p>
              In addition to client-facing responsibilities, I managed internal teams,
              delivery workflows, and service processes, ensuring quality, scalability,
              and consistency across all engagements while maintaining strong client
              trust and credibility.
            </p>

            <ul>
              <li>
                Defined and executed overall business strategy, service positioning,
                and growth roadmap
              </li>
              <li>
                Led client consulting engagements, acting as a trusted advisor for
                business and technology decisions
              </li>
              <li>
                Built and scaled service offerings for startups and growth-stage
                businesses across multiple domains
              </li>
              <li>
                Managed cross-functional teams and delivery coordination to ensure
                timely, high-quality execution
              </li>
              <li>
                Established long-term client relationships through value-driven,
                outcome-focused consulting
              </li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}
