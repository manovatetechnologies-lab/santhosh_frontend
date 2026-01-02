import React, { useState } from "react";
import "../styles/gallery.css";
import meet1 from "../assets/meet1.jpg";
import meet2 from "../assets/meet2.jpg";
import meet3 from "../assets/meet3.jpg";
import meet4 from "../assets/meet4.jpg";
import meet5 from "../assets/meet5.jpg";
import meet6 from "../assets/meet6.jpg";
import meet7 from "../assets/meet7.jpg";
import meet8 from "../assets/meet8.jpg";
import meet9 from "../assets/meet9.jpg";

const galleryImages = [
  {
    id: 1,
    src: meet1,
    title: "Executive Strategy Meeting",
    tag: "Leadership",
  },
  {
    id: 2,
    src: meet2,
    title: "Client Business Discussion",
    tag: "Client Strategy",
  },
  {
    id: 3,
    src: meet3,
    title: "Boardroom Presentation",
    tag: "Operations",
  },
  {
    id: 4,
    src: meet4,
    title: "Corporate Partnership Meet",
    tag: "Business Growth",
  },
  {
    id: 5,
    src: meet5,
    title: "Team Leadership Session",
    tag: "Leadership",
  },
    {   
    id: 6,
    src: meet6,
    title: "Market Analysis Meeting",
    tag: "Client Strategy",
  },    
    {       
    id: 7,
    src: meet7,
    title: "Annual Financial Review",   
    tag: "Operations",
  },    
    {       
    id: 8,
    src: meet8,
    title: "Global Expansion Discussion",
    tag: "Business Growth",
  },
    {       
    id: 9,
    src: meet9, 
    title: "Innovation Brainstorming Session",
    tag: "Leadership",
  },
];

const Gallery = () => {
  const [activeImage, setActiveImage] = useState(null);

  return (
    <section className="gallery-page">
      {/* HERO */}
      <div className="gallery-hero">
        <h1>Leadership in Action</h1>
        <p>
          A visual showcase of strategic meetings, client engagements, and
          business operations leadership.
        </p>
      </div>

      {/* GRID */}
      <div className="gallery-grid">
        {galleryImages.map((img) => (
          <div
            key={img.id}
            className="gallery-card"
            onClick={() => setActiveImage(img)}
          >
            <img src={img.src} alt={img.title} />
            <div className="gallery-overlay">
              <span className="gallery-tag">{img.tag}</span>
              <h3>{img.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {activeImage && (
        <div className="gallery-modal" onClick={() => setActiveImage(null)}>
          <div className="gallery-modal-content">
            <img src={activeImage.src} alt={activeImage.title} />
            <h3>{activeImage.title}</h3>
            <p>{activeImage.tag}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;