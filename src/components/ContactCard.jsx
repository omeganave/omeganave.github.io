import React from 'react'

const ContactCard = ({ image, alt="PLACEHOLDER", text="PLACEHOLDER" }) => {
    /* Returns an image with some text underneath. */
  return (
    <div className='contentContainer'>
        <div className='contentBox'><img src={image} alt={alt} /><p>{text}</p></div>
    </div>
  )
}

export default ContactCard