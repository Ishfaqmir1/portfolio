import React from 'react';
import profile from '../assets/profile.png';
import { TypeAnimation } from 'react-type-animation'; // ✅ new import

const Home = () => {
  return (
    <section id="home" className="home-section">
      {/* Left Side */}
      <div className="home-left" data-aos="fade-right">
        <h3 className="greeting">
          <span role="img" aria-label="wave">👋</span> HELLO! HOW ARE YOU?
        </h3>

        <h1 className="name-line">
          I am <span className="name-highlight">Ishfaq Ahmad Mir</span>
        </h1>

        <TypeAnimation
          className="home-typed"
          sequence={[
            'Frontend Developer', 1000,
            'React Enthusiast', 1000,
            'UI/UX Designer', 1000,
            'Creative Coder', 1000,
            'Freelancer from India', 1000,
          ]}
          wrapper="span"
          speed={60}
          repeat={Infinity}
        />

        <div className="home-buttons">
          <a href="\public\ISHFAQ AHMAD MIR - Resume (1).pdf" download className="btn">
            ⬇️ Download CV
          </a>
          <a href="9149419298" className="btn">
            📩 Contact Me
          </a>
        </div>

        {/* Social Icons */}
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/ishfaqmir01/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="https://github.com/Ishfaqmir1" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="mirishfaq01@gmail.com.com"  target="_blank" rel="noopener noreferrer">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="home-right" data-aos="fade-left">
        <img src={profile} alt="Profile" />
      </div>
    </section>
  );
};

export default Home;
