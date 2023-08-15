import React from 'react'
import HeaderButton from './HeaderButton'
import Logo from './Logo'
import SearchBar from './SearchBar'
import CartButton from './CartButton'

const Header = () => {
    /* Not currently being used for anything. Add functionality for this! */
    const handleSearch = (searchQuery) => {
        console.log(`Searching for: ${searchQuery}`);
      }
      /* Returns the header. The header contains the site logo, three buttons, a search bar, and a cart button. */
  return (
    <header><Logo /><HeaderButton text="Shop" link="/products" classes="headerButton"/><HeaderButton text="About" link="/about" classes="headerButton"/><HeaderButton text="Contacts" link="/contact" classes="headerButton"/><SearchBar onSearch={handleSearch}/><CartButton/></header>
  )
}

export default Header