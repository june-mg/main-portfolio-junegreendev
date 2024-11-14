import React from "react";
import "./Contact.scss";

const Contact = () => {
  return (
    <div className="contact">
      <h2>Let’s Connect!</h2>
      <p>I'm open to opportunities and collaborations. Reach out via LinkedIn or Twitter.</p>
      <div className="contact-links">
        <a href="https://www.linkedin.com/in/junegreen" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://twitter.com/junegreen" target="_blank" rel="noopener noreferrer">Twitter</a>
      </div>
    </div>
  );
};

export default Contact;
