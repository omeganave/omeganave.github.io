import React from 'react'
import siteLogo from "../images/naturals.png"
import { Link } from 'react-router-dom'

// The site's logo. Displays a clickable image that returns to the Home page.
const Logo = () => {
  return (
    <Link to="/" className='homeLink'>
        <img src={siteLogo} alt="website logo" className='logo'/>
    </Link>
  )
}

export default Logo