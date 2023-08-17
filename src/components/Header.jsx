import React from 'react'
import HeaderButton from './HeaderButton'
import Logo from './Logo'
import SearchBar from './SearchBar'
import CartButton from './CartButton'

// The header that is present everywhere on the site.
const Header = () => {

  return (
    // Displays the contents of the header.
    <header><Logo /><HeaderButton text="Shop" link="/products" classes="headerButton"/><HeaderButton text="About" link="/about" classes="headerButton"/><HeaderButton text="Contacts" link="/contact" classes="headerButton"/><SearchBar /><CartButton/></header>
  )
}

export default Header