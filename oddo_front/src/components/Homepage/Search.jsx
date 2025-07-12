import React, { useState } from 'react';

const SearchBar = () => {
  const [availability, setAvailability] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const handleAvailabilityChange = (event) => {
    setAvailability(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
      <div className='main'>

          <div className="search-bar">

              <input
                  type="text"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={handleSearchChange}
              />
              <button>Search</button>
                <select value={availability} onChange={handleAvailabilityChange}>
                    <option value="">Select Availability</option>
                    <option value="full-time">Full-Time</option>
                    <option value="part-time">Part-Time</option>
                    <option value="freelance">Freelance</option>
                </select>
          </div>
          
      </div>
  );
};

export default SearchBar;