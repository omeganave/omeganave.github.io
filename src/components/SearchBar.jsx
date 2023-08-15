import React, { useState } from 'react';
import magnifier from "../images/Magnifier.svg"


const SearchBar = ({ onSearch }) => {
    /* Consts to handle searching with the search bar */
    const [searchQuery, setSearchQuery] = useState('');
    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };
    const handleSearchSubmit = (event) => {
        event.preventDefault();
        onSearch(searchQuery);
    };

    const [isFlipped, setIsFlipped] = useState(false);
    const handleMouseEnter = () => {
        setIsFlipped(true);
    };
    const handleMouseLeave = () => {
        setIsFlipped(false);
    };


    /* Returns a form with an input box and search button. */
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