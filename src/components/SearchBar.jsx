import React, { useState } from 'react';
import magnifier from "../images/Magnifier.svg"
import { useNavigate } from "react-router-dom"

// The search bar. Searches by product title.
const SearchBar = () => {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');

    // Changes the search query whenever the input box is changed.
    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    // Navigates to the products page, with a search term included in the link.
    const handleSearchSubmit = (event) => {
        event.preventDefault();
        const encodedSearchQuery = encodeURIComponent(searchQuery);
        navigate(`/products?search=${encodedSearchQuery}`);
    };

    // Handling the mirroring animation when hovering over the search bar.
    const [isFlipped, setIsFlipped] = useState(false);
    const handleMouseEnter = () => {
        setIsFlipped(true);
    };
    const handleMouseLeave = () => {
        setIsFlipped(false);
    };

  return (
    <form onSubmit={handleSearchSubmit} className="searchBar" onMouseEnter = {handleMouseEnter} onMouseLeave = {handleMouseLeave}>
        <input 
        type="text"
        placeholder='Search AromaGlowNaturals.com'
        value={searchQuery}
        onChange={handleSearchChange}
        
        />
        <button type='submit'><img src={magnifier} alt="Search" className={`flippable-image ${isFlipped ? 'flipped' : ''}`}/></button>
    </form>
  )
}

export default SearchBar