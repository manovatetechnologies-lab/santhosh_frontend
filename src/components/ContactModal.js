import React, { useState } from "react";
import "../styles/contact-modal.css";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const res = await fetch("https://santhosh-backend-0d9p.onrender.com/api/contact/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setSuccess("Message sent successfully. I’ll get back to you soon.");
      setFormData({
        name: "",
        email: "",
        company: "",
        service: "",
        message: "",
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact-page">
      <div className="contact-container">

        {/* LEFT CONTENT */}
        <div className="contact-info">
          <span className="contact-tag">LET’S CONNECT</span>

          <h1>
            Let’s build something
            <span> impactful</span>
          </h1>

          <p className="contact-desc">
            Whether you're a founder, enterprise leader, or growing team,
            I help translate ideas into scalable business and technology
            solutions with measurable outcomes.
          </p>

          <div className="contact-highlights">
            <div>
              <strong>Role</strong>
              <p>Manager – Business Operations & Client Strategy</p>
            </div>

            <div>
              <strong>Focus Areas</strong>
              <p>Strategy • Growth • Digital Transformation</p>
            </div>

            <div>
              <strong>Response Time</strong>
              <p>Within 24–48 hours</p>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="contact-form-card">
          <h3>Start a conversation</h3>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <input
                name="name"
                placeholder="Full name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                name="email"
                type="email"
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <input
              name="company"
              placeholder="Company / Organization"
              value={formData.company}
              onChange={handleChange}
            />

            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
            >
              <option value="">What are you looking for?</option>
              <option>Business Consulting</option>
              <option>Digital Transformation</option>
              <option>Growth & Scaling</option>
              <option>Product Strategy</option>
            </select>

            <textarea
              name="message"
              rows="5"
              placeholder="Tell me about your requirement..."
              value={formData.message}
              onChange={handleChange}
              required
            />

            <button className="submit-btn" type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message →"}
            </button>

            {success && <p className="form-success">{success}</p>}
            {error && <p className="form-error">{error}</p>}
          </form>
        </div>

      </div>
    </section>
  );
}
