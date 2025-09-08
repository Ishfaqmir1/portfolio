import React, { useState, useEffect } from 'react';
import '../index.css';

const Navbar = ({ darkMode, onToggleDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  const handleScroll = () => {
    const sections = ['home', 'about', 'skills', 'services', 'projects', 'certifications', 'contact'];
    for (const id of sections) {
      const element = document.getElementById(id);
      if (element) {
        const top = element.getBoundingClientRect().top;
        if (top <= 80 && top >= -element.offsetHeight + 80) {
          setActiveLink(id);
          break;
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${darkMode ? 'dark' : ''}`}>
      <div className="nav-container">
        <div className="logo">Ishfaq <span>Mir</span></div>

        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {['home', 'about', 'skills', 'services', 'projects', 'certifications', 'contact'].map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className={activeLink === item ? 'active' : ''}
                onClick={() => setMenuOpen(false)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        <div className="theme-toggle" onClick={onToggleDarkMode}>
          <span role="img" aria-label="theme">{darkMode ? '🌙' : '🌞'}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
