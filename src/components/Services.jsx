import React, { useState, useEffect, useRef } from 'react';
import '../index.css';

const services = [
  {
    icon: '💻',
    title: 'Frontend Development',
    description: 'I build responsive, fast, and accessible websites using React, HTML, CSS, and JavaScript.'
  },
  {
    icon: '🎨',
    title: 'UI Design',
    description: 'I design clean and modern user interfaces that offer great user experiences.'
  },
  {
    icon: '🌐',
    title: 'Portfolio Websites',
    description: 'I develop personal portfolios and showcase sites for professionals and students.'
  },
  {
    icon: '⚙️',
    title: 'Web App Integration',
    description: 'I connect frontend designs with backend APIs and cloud services.'
  }
];

const Services = () => {
  const [index, setIndex] = useState(0);
  const cardRefs = useRef([]);

  const prev = () => {
    setIndex((prev) => (prev === 0 ? services.length - 1 : prev - 1));
  };

  const next = () => {
    setIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
          }
        });
      },
      { threshold: 0.3 }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="services-section">
      <h2 className="services-title">Services</h2>
      <p className="services-subtitle">What I can do</p>

      <div className="carousel-container">
        <button className="nav-button left" onClick={prev}>&lt;</button>

        <div className="carousel-wrapper">
          {services.slice(index, index + 3).map((service, i) => (
            <div
              key={i}
              className="service-card"
              ref={(el) => (cardRefs.current[i] = el)}
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>

        <button className="nav-button right" onClick={next}>&gt;</button>
      </div>
    </section>
  );
};

export default Services;
