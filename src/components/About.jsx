import React from 'react';
import { TypeAnimation } from 'react-type-animation'; // ✅ updated import

const About = () => {
  return (
    <section id="about" className="about-section" data-aos="fade-up">
      <div className="about-container">
        <h2>About Me</h2>

        <TypeAnimation
          className="about-typed"
          sequence={[
            'Frontend Developer.', 1000,
            'React Enthusiast.', 1000,
            'UI/UX Designer.', 1000,
            'Creative Coder.', 1000,
            'Freelancer from India.', 1000,
          ]}
          wrapper="span"
          speed={60}
          repeat={Infinity}
        />

        <p>
          I'm Ishfaq Ahmad Mir, a passionate frontend developer who builds clean, modern, and user-friendly websites using the latest technologies.
        </p>
      </div>
    </section>
  );
};

export default About;
