// src/pages/Services.js
import React from "react";
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <section className="services-section">
      <h2>Services</h2>

      <Link to="/services/ui-ux-design">UI / UX Design</Link>
      <br />
      <Link to="/services/growth">Growth Strategy</Link>
    </section>
  );
}
