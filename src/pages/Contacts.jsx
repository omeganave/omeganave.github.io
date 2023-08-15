import React from 'react';
import ContactCard from '../components/ContactCard';
import phone from "../images/phone.png";
import envelope from "../images/envelope.png";

const Contacts = () => {
  /* The Contacts page. Returns two contact cards. */
  return (
    <div className='mainContainer'>
      <ContactCard image={phone} alt="Phone" text="1-(709)-555-5673"/>
      <ContactCard image={envelope} alt="Envelope" text="contact@aromaglownaturals.com"/>
    </div>
  )
}

export default Contacts