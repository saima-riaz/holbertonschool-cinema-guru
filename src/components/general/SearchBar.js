import React from 'react';
import './general.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'; // Import the search icon

const SearchBar = ({ title, setTitle }) => {
    const handleInput = (event) => {
        setTitle(event.target.value);
    };

    return (
        <div className="search-bar">
            <FontAwesomeIcon icon={faSearch} className="search-icon" /> {/* Add the search icon */}
            <input
                type="text"
                value={title}
                onChange={handleInput}
                placeholder="Search Movies"
                className="search-input" // Add a class for styling
            />
        </div>
    );
};

export default SearchBar;