import React, { useState, useEffect } from "react";
import {
  FiUsers,
  FiTrendingUp,
  FiBookOpen,
  FiLayers
} from "react-icons/fi";
import "../styles/impact.css";

export default function ImpactReplica() {
  const [tooltip, setTooltip] = useState(null);

  const data = [
    { year: 2019, value: 80 },
    { year: 2020, value: 150 },
    { year: 2021, value: 260 },
    { year: 2022, value: 380 },
    { year: 2023, value: 480 },
    { year: 2024, value: 560 },
  ];

  const maxValue = 600;

  useEffect(() => {
  const el = document.querySelector(".graph-reveal");

  if (!el) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        el.classList.add("active");
      }
    },
    { threshold: 0.4 }
  );

  observer.observe(el);

  return () => observer.disconnect();
}, []);


  return (
    <section className="impact-replica reveal">

      {/* LEFT SIDE : CARDS */}
      <div className="impact-cards">

        <div className="impact-card">
          <div className="impact-card-header">
            <span>GLOBAL CLIENTS</span>
            <FiUsers />
          </div>
          <h2>500+</h2>
          <p>
            Trusted by enterprises across
            <strong> 24+ countries worldwide</strong>,
            spanning multiple industries.
          </p>
        </div>

        <div className="impact-card">
          <div className="impact-card-header">
            <span>EFFICIENCY UPLIFT</span>
            <FiTrendingUp />
          </div>
          <h2>2× – 3×</h2>
          <p>
            Measurable productivity improvement delivered
            through intelligent systems and automation.
          </p>
        </div>

        <div className="impact-card">
          <div className="impact-card-header">
            <span>TECHNOLOGY ENABLEMENT</span>
            <FiBookOpen />
          </div>
          <h2>Next-Gen</h2>
          <p>
            Enterprise-focused education and capability building
            in AI, cloud, and modern engineering practices.
          </p>
        </div>

        <div className="impact-card">
          <div className="impact-card-header">
            <span>PROJECTS DELIVERED</span>
            <FiLayers />
          </div>
          <h2>1000+</h2>
          <p>
            End-to-end delivery of large-scale digital,
            analytics, and transformation programs.
          </p>
        </div>

      </div>

      {/* RIGHT SIDE : GRAPH */}
      <div className="impact-graph graph-reveal">
        <span className="graph-title">Client Growth</span>

        <div className="graph-wrapper">
          <svg
            viewBox="0 0 520 320"
            preserveAspectRatio="xMidYMid meet"
            className="growth-svg"
          >

            {/* Y Axis Grid + Labels */}
            {[600, 450, 300, 150].map((val, i) => {
              const y = 280 - (val / maxValue) * 240;
              return (
                <g key={i}>
                  <line
                    x1="50"
                    y1={y}
                    x2="480"
                    y2={y}
                    stroke="rgba(255, 255, 255, 0.08)"
                  />
                  <text
                    x="20"
                    y={y + 4}
                    className="y-label"
                  >
                    {val}
                  </text>
                </g>
              );
            })}

            {/* AXES */}
            <line x1="50" y1="280" x2="480" y2="280" className="axis" />
            <line x1="50" y1="40" x2="50" y2="280" className="axis" />

            {/* GROWTH LINE */}
            <polyline
              className="growth-line"
              points={data
                .map((d, i) => {
                  const x = 50 + i * 70;
                  const y = 280 - (d.value / maxValue) * 240;
                  return `${x},${y}`;
                })
                .join(" ")}
            />

            {/* DATA POINTS */}
            {data.map((d, i) => {
              const x = 50 + i * 70;
              const y = 280 - (d.value / maxValue) * 240;

              return (
                <circle
                  key={i}
                  cx={x}
                  cy={y}
                  r="6"
                  className="growth-point"
                  onMouseEnter={() =>
                    setTooltip({ x, y, year: d.year, value: d.value })
                  }
                  onMouseLeave={() => setTooltip(null)}
                />
              );
            })}

            {/* X AXIS LABELS */}
            {data.map((d, i) => (
              <text
                key={i}
                x={50 + i * 70}
                y="305"
                className="x-label"
              >
                {d.year}
              </text>
            ))}
          </svg>

          {/* TOOLTIP */}
          {tooltip && (
            <div
              className="graph-tooltip"
              style={{
                left: tooltip.x + 10,
                top: tooltip.y - 10
              }}
            >
              <strong>{tooltip.year}</strong>
              <span>{tooltip.value} Clients</span>
            </div>
          )}
        </div>
      </div>

    </section>
  );
}
