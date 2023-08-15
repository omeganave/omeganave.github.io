import React from 'react'
import siteLogo from "../images/naturals.png"
import { Link } from 'react-router-dom'

const Logo = () => {
    /* Returns a Link which contains the site logo, and leads to the home page. */
  return (
    <Link to="/" className='homeLink'>
        <img src={siteLogo} alt="website logo" className='logo'/>
    </Link>
  )
}

export default Logo