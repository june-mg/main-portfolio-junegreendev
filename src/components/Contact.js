import React from "react";
import "./Contact.scss";

const Contact = () => {
  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <div className="contact-links">
        <a href="mailto:your.email@example.com">Email</a>
        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </section>
  );
};

export default Contact;

