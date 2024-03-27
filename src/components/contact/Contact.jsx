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
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input
        type="text"
        name="user_name"
        value={user.name}
        onChange={handleNameChange}
      />
      <label>Email</label>
      <input
        type="email"
        name="user_email"
        value={user.email}
        onChange={handleEmailChange}
      />
      <label>Message</label>
      <textarea
        name="message"
        value={user.message}
        onChange={handleMessageChange}
      />
      <input type="submit" value="Send" />
    </form>
  );
}

export default Contact;
