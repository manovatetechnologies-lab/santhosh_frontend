import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import CaseStudyDetail from "./pages/CaseStudyDetail";
/* COMPONENTS */
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CaseStudies from "./components/CaseStudies";

import ScrollToTop from "./components/ScrollToTop";

/* PAGES */
import Services from "./pages/Services";
import ServicePage from "./pages/ServicePage";
import Contact from "./components/ContactModal";

function App() {
  return (
    
    <Router>
      <ScrollToTop />
      <Navbar />

      <Routes>
        {/* HOME */}
        <Route
          path="/"
          element={
            <>
              <Hero />
            </>
          }
        />

        {/* CASE STUDIES */}
        <Route path="/case-studies" element={<CaseStudies />} />

        {/* SERVICES LIST */}
        <Route path="/services" element={<Services />} />

        {/* SERVICE DETAIL (DYNAMIC) */}
        <Route path="/services/:slug" element={<ServicePage />} />
        <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />
<Route path="/contact" element={<Contact/>}/>
      </Routes>
    </Router>
  );
}


export default App;
