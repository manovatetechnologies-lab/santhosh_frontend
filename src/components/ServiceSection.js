import React from "react";
import {
  FiGlobe,
  FiSmartphone,
  FiCpu,
  FiZap,
  FiPenTool,
  FiShoppingCart,
  FiCloud,
  FiSettings,
  FiBarChart2,
  FiBriefcase,
  FiTrendingUp,
  FiLayers,
  FiCompass,
  FiActivity,
  FiTarget,
} from "react-icons/fi";
import "../styles/servicesection.css";


export default function Services() {
  return (
    <section className="services-section" id="services">

      <span className="services-tag">SERVICES</span>

      <h2 className="services-title">
        Strategic engagements built to scale modern businesses
      </h2>

      <p className="services-subtitle">
        From business strategy and enterprise scaling to full-stack delivery,
        Manovate Technologies partners with organizations to drive measurable growth.
      </p>

      {/* ✅ ONLY ONE services-grid (fixed) */}
      <div className="services-grid">

        
          <div className="service-card featured">
            <h3>Website Development</h3>
            <p>High-performance, responsive, scalable platforms.</p>
            <FiGlobe className="service-icon" />
          </div>
        

        
          <div className="service-card">
            <h3>Mobile App Development</h3>
            <p>iOS & Android apps with seamless UX.</p>
            <FiSmartphone className="service-icon" />
          </div>
        

        
          <div className="service-card">
            <h3>Custom Software Solutions</h3>
            <p>Systems built around your workflows.</p>
            <FiCpu className="service-icon" />
          </div>
        

        
          <div className="service-card">
            <h3>Business Automation</h3>
            <p>Intelligent automation for efficiency.</p>
            <FiZap className="service-icon" />
          </div>
        

        
          <div className="service-card">
            <h3>UI / UX Design</h3>
            <p>User-centered interface design.</p>
            <FiPenTool className="service-icon" />
          </div>
      

        
          <div className="service-card">
            <h3>E-Commerce Solutions</h3>
            <p>Secure, scalable commerce platforms.</p>
            <FiShoppingCart className="service-icon" />
          </div>
        

        <div className="service-card" >
            <h3>Cloud Solutions</h3>
            <p>Cloud-native infrastructure.</p>
            <FiCloud className="service-icon" />
          </div>

       
          <div className="service-card">
            <h3>CRM / ERP Systems</h3>
            <p>Enterprise system integration.</p>
            <FiSettings className="service-icon" />
          </div>
        

        
          <div className="service-card">
            <h3>Data Analytics</h3>
            <p>Insights & dashboards.</p>
            <FiBarChart2 className="service-icon" />
          </div>
  

       
          <div className="service-card">
            <h3>IT Consulting</h3>
            <p>Strategic technology guidance.</p>
            <FiBriefcase className="service-icon" />
          </div>
    

        
          <div className="service-card">
            <h3>Business Strategy</h3>
            <p>Long-term growth frameworks.</p>
            <FiCompass className="service-icon" />
          </div>
       

        
          <div className="service-card">
            <h3>Startup Consulting</h3>
            <p>From idea to scale.</p>
            <FiLayers className="service-icon" />
          </div>
        

        
          <div className="service-card">
            <h3>Brand Identity</h3>
            <p>Positioning & messaging.</p>
            <FiPenTool className="service-icon" />
          </div>
      

       
          <div className="service-card">
            <h3>Digital Marketing</h3>
            <p>Growth-focused campaigns.</p>
            <FiActivity className="service-icon" />
          </div>
       

       
          <div className="service-card">
            <h3>Growth Strategy</h3>
            <p>Data-driven scaling.</p>
            <FiTrendingUp className="service-icon" />
          </div>
       

       
          <div className="service-card">
            <h3>Revenue & Growth Optimization</h3>
            <p>Revenue Growth Optimization</p>
            <FiTarget className="service-icon" />
          </div>
        

      </div>
    </section>
  );
}
