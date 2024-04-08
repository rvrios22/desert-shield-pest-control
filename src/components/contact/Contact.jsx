import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import "./contact.css";

function Contact() {
  const [user, setUser] = useState({ name: "", email: "", tel: '', message: "" });
  const form = useRef();

  const toastSuccess = Swal.mixin({
    toast: true,
    position: "center",
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
  });

  const toastError = Swal.mixin({
    toast: true,
    position: "center",
    showConfirmButton: true,
  });

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
  const handleTelChange = (e) => {
    setUser({
      ...user,
      tel: e.target.value,
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
        (res) => {
          toastSuccess.fire({
            icon: "success",
            title: "Thanks for reaching out!",
            text: "I'll respond to you as soon as I can.",
            background: "#F5F6F7",
            color: "black",
          });
        },
        (error) => {
          console.log("FAILED...", error.text);
          toastError.fire({
            icon: "error",
            title: "Oops",
            text: "Looks like there's a bug in the system. Please reach out via phone while we resolve this issue.",
            background: "#F5F6F7",
            color: "black",
          });
        }
      )
      .finally(() => {
        setUser({
          name: "",
          email: "",
          tel: '',
          message: "",
        });
      });
  };

  return (
    <div id="contact" className="contact-container">
      <h2>Get In Touch</h2>
      <p>
        We'd love to hear from you! Get in touch and we'll respond as quick as
        we can.
      </p>
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
        <label>Phone</label>
        <input
          type="tel"
          name="user_tel"
          value={user.tel}
          onChange={handleTelChange}
          placeholder="Please enter your number..."
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
