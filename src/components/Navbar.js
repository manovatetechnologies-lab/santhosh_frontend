import React, { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import "../styles/navbar.css";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";



export default function Navbar() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

const location = useLocation();

useEffect(() => {
  if (location.pathname !== "/") {
    setActive("");
  }
}, [location.pathname]);


  const goToCaseStudies = () => {
  setActive("casestudies");
  navigate("/case-studies");
};


 const scrollTo = (id) => {
  if (location.pathname !== "/") {
    navigate("/", { state: { scrollTo: id } });
  } else {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }

  setMenuOpen(false);
};


  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

const goToContactPage = () => {
  setMenuOpen(false);
  navigate("/contact");
};


  return (
    <header className="navbar">
      <div className="nav-inner">

        {/* BRAND */}
        <div className="nav-brand" onClick={() => scrollTo("home")}>
          <span className="brand-dot"></span>
          <span className="brand-name">
            Santhosh G <em>— Manovate Technologies</em>
          </span>
        </div>

        {/* DESKTOP LINKS */}
        <nav className="nav-links">
  <button
    className={active === "about" ? "active" : ""}
    onClick={() => scrollTo("about")}
  >
    About
  </button>

  <button
    className={active === "services" ? "active" : ""}
    onClick={() => scrollTo("services")}
  >
    Services
  </button>

  <button
    className={active === "skills" ? "active" : ""}
    onClick={() => scrollTo("skills")}
  >
    Skills
  </button>

  {/* ROUTE BASED */}
  <button
    className={active === "casestudies" ? "active" : ""}
    onClick={goToCaseStudies}
  >
    Case Studies
  </button>

  <button
    className={active === "contact" ? "active" : ""}
    onClick={() => scrollTo("contact")}
  >
    Contact
  </button>
</nav>


        {/* CTA (DESKTOP) */}
        <button className="nav-cta" onClick={goToContactPage}>
  Work with me ↗
</button>


        {/* MOBILE TOGGLE */}
        <button
          className="nav-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

      </div>

      {/* MOBILE MENU */}
      <div className={`mobile-nav ${menuOpen ? "open" : ""}`}>
        <button onClick={() => scrollTo("about")}>About</button>
        <button onClick={() => scrollTo("services")}>Services</button>
        <button onClick={() => scrollTo("projects")}>Insights</button>
        <button onClick={() => scrollTo("skills")}>Skills</button>
        <button onClick={goToCaseStudies}>Case Studies</button>
        <button onClick={() => scrollTo("contact")}>Contact</button>

        <button className="mobile-cta" onClick={goToContactPage}>
  Work with me ↗
</button>

      </div>
    </header>
  );
}
