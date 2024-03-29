import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";

function Contact() {
  const [user, setUser] = useState({ name: "", email: "", message: "" });
  const form = useRef();

  const handleNameChange = (e) => {
    setUser({
      ...user,
      name: e.target.value,
    });
  };
  const handleEmailChange = (e) => {
    setUser({
      ...user,
      email: e.target.value,
    });
  };
  const handleMessageChange = (e) => {
    setUser({
      ...user,
      message: e.target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          setUser({});
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="contact-container">
      <h2>Get In Touch</h2>
      <p>We'd love to hear from you! Get in touch and we'll respond as quick as we can.</p>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input
          type="text"
          name="user_name"
          value={user.name}
          onChange={handleNameChange}
          placeholder="Please enter your name..."
        />
        <label>Email</label>
        <input
          type="email"
          name="user_email"
          value={user.email}
          onChange={handleEmailChange}
          placeholder="Please enter your email..."
        />
        <label>Message</label>
        <textarea
          name="message"
          value={user.message}
          onChange={handleMessageChange}
          placeholder="How can we help? e.g. get a quote or inquire about our services"
        />
        <input className="contact-button" type="submit" value="Send" />
      </form>
    </div>
  );
}

export default Contact;
