import React, { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import AOS from "aos";
import "aos/dist/aos.css";
import "../index.css";
import contactImg from "../assets/contact.svg"; // Replace with your original image

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "your_service_id",      // Replace
        "your_template_id",     // Replace
        formData,
        "your_public_key"       // Replace
      )
      .then(() => {
        setSent(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSent(false), 3000);
      })
      .catch((err) => console.error("EmailJS error:", err));
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-heading">
          <h2>Contact Me</h2>
          <p>Get in touch</p>
        </div>

        <div className="contact-content">
          {/* Left Side Image */}
          <div className="contact-image" data-aos="fade-right">
            <img src={contactImg} alt="Contact" />
          </div>

          {/* Right Side Form */}
          <div className="contact-form" data-aos="fade-left">
            <p className="form-title">✈️ Have some project?</p>
            <form onSubmit={handleSubmit}>
              <label>Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
              />

              <label>Mail</label>
              <input
                type="email"
                name="email"
                placeholder="Your email"
                value={formData.email}
                onChange={handleChange}
              />

              <label>Project</label>
              <textarea
                name="message"
                placeholder="Type your message"
                value={formData.message}
                onChange={handleChange}
              />

              <div className="button-container">
                <button type="submit">
                  Send <span className="arrow">✈</span>
                </button>
              </div>
              {sent && <p className="sent-message">Message sent!</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
