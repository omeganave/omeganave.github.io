import React from 'react'

// The contact card for displaying on the Contacts page. Displays an image and some text underneath. Accepts the image, the image alt text, and the text underneath as parameters.
const ContactCard = ({ image, alt, text }) => {
  return (
    <div className='contactContainer'>
        <div className='contactBox'><img src={image} alt={alt} /><p>{text}</p></div>
    </div>
  )
}

export default ContactCard