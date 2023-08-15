import React, { useState } from 'react';
import magnifier from "../images/Magnifier.svg"


const SearchBar = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };
    const handleSearchSubmit = (event) => {
        event.preventDefault();
        onSearch(searchQuery);
    };
  return (
    <form onSubmit={handleSearchSubmit} className="searchBar">
        <input 
        type="text"
        placeholder='Search AromaGlowNaturals.com'
        value={searchQuery}
        onChange={handleSearchChange}
        />
        <button type='submit'><img src={magnifier} alt="Search"/></button>
    </form>
  )
}

export default SearchBar