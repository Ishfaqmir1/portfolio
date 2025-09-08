import React, { useState } from 'react';
import '../index.css';

const certifications = [
  {
    icon: '🏅',
    title: 'Certificate of Completion for Bootstrap from Great Learning.',
    link: '#'
  },
  {
    icon: '🧾',
    title: 'Certificate of Completion for CSS from Great Learning.',
    link: '#'
  },
  {
    icon: '🖥️',
    title: 'Responsive Web Design course certificate from FreeCodeCamp.',
    link: '#'
  },
  {
    icon: '📄',
    title: 'Hackerrank JavaScript certification cleared.',
    link: '#'
  }
];

const Certifications = () => {
  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((prev) => (prev === 0 ? certifications.length - 1 : prev - 1));
  };

  const next = () => {
    setIndex((prev) => (prev === certifications.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="certifications" className="certifications-section">
      <h2 className="cert-title">Certifications</h2>
      <p className="cert-subtitle">What I have done</p>

      <div className="carousel-container">
        <button className="nav-button left" onClick={prev}>&lt;</button>

        <div className="carousel-wrapper">
          {certifications.slice(index, index + 3).map((cert, i) => (
            <div key={i} className="cert-card">
              <div className="cert-icon">{cert.icon}</div>
              <p className="cert-title">{cert.title}</p>
              <a href={cert.link} className="view-more">View More</a>
            </div>
          ))}
        </div>

        <button className="nav-button right" onClick={next}>&gt;</button>
      </div>
    </section>
  );
};

export default Certifications;
