import React from 'react'
import './contactInfo.css'
function ContactInfo() {
  return (
    <div className='contact-info-container'>
        <a href='mailto:george@desertshieldpestcontrol@gmail.com' className="contact-info">george.desertshieldpestcontrol@gmail.com</a>
        <a href='tel:760-895-9111' className="contact-info">(760) 895-9111</a>
    </div>
  )
}

export default ContactInfo