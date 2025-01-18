import React, { useState } from 'react';

const XDictionary = () => {
  // Initialize dictionary with the required words
  const initialDictionary = [
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." }
  ];

  // State for the dictionary and search term
  const [dictionary] = useState(initialDictionary);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState('');

  // Handle search functionality
  const handleSearch = () => {
    // Find the word in dictionary (case-insensitive)
    const result = dictionary.find(
      entry => entry.word.toLowerCase() === searchTerm.toLowerCase()
    );
    
    // Set the search result
    if (result) {
      setSearchResult(result.meaning);
    } else {
      setSearchResult("Word not found in the dictionary.");
    }
  };

  return (
    <div>
      <h1 style={{ fontFamily: "serif", fontSize: "32px", marginBottom: "20px" }}>Dictionary App</h1>
      
      <div>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ marginRight: "5px" }}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {searchResult && (
        <div>
          <p style={{ marginTop: "10px", marginBottom: "5px" }}>Definition:</p>
          <p>{searchResult}</p>
        </div>
      )}
    </div>
  );
};

export default XDictionary;