import React, { useEffect } from "react";
import { ArrowUpRight } from "lucide-react";


import "../styles/case-studies.css";

const caseStudies = [
  {
    id: 1,
    slug: "ai-financial-advisor",   // ✅ ADD THIS
    category: "AI & FinTech",
    title: "AI Financial Advisor Platform",
    client: "Wealth Management Firm",
    result: "60% faster client onboarding",
    description:
      "Led the design and rollout of an AI-powered financial advisory platform using LangChain to deliver personalized investment insights, automate portfolio analysis, and improve advisor-client decision making."
  },
  {
    id: 2,
    slug: "artifits-ai",
    category: "AI & Computer Vision",
    title: "ARTIFITS – AI Workout Detection System",
    client: "Fitness Technology Startup",
    result: "85% exercise accuracy improvement",
    description:
      "Managed the development of an AI-based computer vision system that detects workout posture in real time, identifies form errors, and provides corrective feedback to reduce injury and improve training outcomes."
  },
  {
    id: 3,
    slug: "fake-news-detection",
    category: "AI & Trust Systems",
    title: "Fake News Detection Platform",
    client: "Media Intelligence Company",
    result: "70% misinformation reduction",
    description:
      "Oversaw the implementation of an AI-driven fake news detection system that analyzes content credibility, source reliability, and semantic patterns to flag misinformation at scale."
  },
  {
    id: 4,
    slug: "digital-marketing-accelerator",
    category: "Digital Growth",
    title: "Digital Marketing Accelerator",
    client: "E-Commerce & SME Clients",
    result: "3× lead conversion growth",
    description:
      "Built a digital marketing acceleration framework combining performance analytics, campaign automation, and funnel optimization to rapidly scale online reach and revenue for multiple clients."
  },
  {
    id: 5,
    slug: "startup-launch-kit",
    category: "Startup Enablement",
    title: "Startup Launch Kit",
    client: "Early-Stage Founders",
    result: "50% faster go-to-market",
    description:
      "Created an end-to-end startup launch toolkit covering product validation, branding, MVP development, operations setup, and growth strategy to help founders launch confidently."
  },
  {
    id: 6,
    slug: "enterprise-hrms",
    category: "HR Technology",
    title: "Enterprise HRMS Platform",
    client: "Mid-Sized Enterprises",
    result: "40% HR process automation",
    description:
      "Directed the development of a centralized HRMS solution covering payroll, attendance, performance management, and compliance to streamline internal operations and reporting."
  },
  {
    id: 7,
    slug: "crm-transformation",
    category: "Customer Experience",
    title: "CRM Transformation System",
    client: "Sales-Driven Organizations",
    result: "35% sales efficiency increase",
    description:
      "Led CRM implementation and customization to unify customer data, automate sales workflows, and enhance customer engagement across multiple touchpoints."
  },
  {
    id: 8,
    slug: "secure-messaging-app",
    category: "Communication Platforms",
    title: "Secure Messaging Application",
    client: "Enterprise & Internal Teams",
    result: "2× internal collaboration speed",
    description:
      "Managed the delivery of a secure real-time messaging platform with role-based access, audit logging, and scalable infrastructure for internal and client communications."
  },
  {
    id: 9,
    slug: "delivery-application",
    category: "Logistics & Mobility",
    title: "On-Demand Delivery Application",
    client: "Local & Regional Businesses",
    result: "30% delivery time reduction",
    description:
      "Oversaw the launch of a scalable delivery application enabling real-time tracking, route optimization, and seamless order management for operational efficiency."
  }
];

export default function CaseStudies() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) e.target.classList.add("active");
        });
      },
      { threshold: 0.2 }
    );
    els.forEach(el => observer.observe(el));
  }, []);

  return (
    <section id="case-studies" className="case-section">
      <div className="case-container">

        {/* HEADER */}
        <div className="case-header reveal">
          <div>
            <span className="case-tag">FEATURED WORK</span>
            <h2>Impact Through Execution</h2>
            {/* BACK TO HOME */}
       </div>

          
        </div>

        {/* GRID */}
        <div className="case-grid">
          {caseStudies.map((study, index) => (
         <div
              key={study.id}
              className="case-card reveal"
              style={{ transitionDelay: `${index * 120}ms` }}
            >

              <div className="case-card-top">
                <span className="case-category">{study.category}</span>
                <ArrowUpRight className="case-arrow" />
              </div>

              <h3>{study.title}</h3>
              <p className="case-client">{study.client}</p>

              <p className="case-desc">{study.description}</p>

              <div className="case-result">
                {study.result}
              </div>
           </div>
          ))}
        </div>

      </div>
    </section>
  );
}
