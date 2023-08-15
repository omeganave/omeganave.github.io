import React from 'react'
import siteLogo from "../images/naturals.png"
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <Link to="/" className='homeLink'>
        <img src={siteLogo} alt="website logo" className='logo'/>
    </Link>
  )
}

export default Logo