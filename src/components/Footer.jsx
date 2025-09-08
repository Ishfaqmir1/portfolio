import React from "react";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaHeart,
  FaTwitter,
  FaPen
} from "react-icons/fa";
import "../index.css";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Waves */}
      <div className="wave-wrapper">
        <div className="wave wave1"></div>
        <div className="wave wave2"></div>
        <div className="wave wave3"></div>
      </div>

      {/* Footer Content */}
      <div className="footer-content">
        <p className="made-by">
          Made with <FaHeart className="heart" /> by Ishfaq Ahmad Mir
        </p>
        <div className="footer-icons">
          <a href="https://linkedin.com/in/ishfaqmir" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/Ishfaqmir1" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noreferrer">
            <FaTwitter />
          </a>
          <a href="mailto:ishfaq@example.com">
            <FaEnvelope />
          </a>
          <a href="#contact">
            <FaPen />
          </a>
        </div>
        <p className="copyright">© Copyright 2025 Ishfaq Ahmad Mir. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
