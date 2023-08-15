import React from 'react'
import HeaderButton from './HeaderButton'
import Logo from './Logo'
import SearchBar from './SearchBar'
import CartButton from './CartButton'

const Header = () => {
    const handleSearch = (searchQuery) => {
        console.log(`Searching for: ${searchQuery}`);
      }
  return (
    <header><Logo /><HeaderButton text="Shop" link="/products" classes="headerButton"/><HeaderButton text="About" link="/about" classes="headerButton"/><HeaderButton text="Contacts" link="/contact" classes="headerButton"/><SearchBar onSearch={handleSearch}/><CartButton/></header>
  )
}

export default Header