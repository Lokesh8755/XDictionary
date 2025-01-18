import React, { useState } from 'react';

const Dictionary = () => {
    // Dictionary data
    const dictionary = [
        { word: "React", meaning: "A JavaScript library for building user interfaces." },
        { word: "Component", meaning: "A reusable building block in React." },
        { word: "State", meaning: "An object that stores data for a component." }
    ];

    // States for search input and result
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResult, setSearchResult] = useState('');
    const [hasSearched, setHasSearched] = useState(false);

    // Handle search function
    const handleSearch = () => {
        setHasSearched(true);
        
        if (!searchTerm.trim()) {
            setSearchResult('');
            return;
        }

        const foundWord = dictionary.find(
            item => item.word.toLowerCase() === searchTerm.toLowerCase()
        );

        if (foundWord) {
            setSearchResult(foundWord.meaning);
        } else {
            setSearchResult("Word not found in the dictionary.");
        }
    };

    return (
        <div style={{ 
            maxWidth: '500px', 
            margin: '0 auto', 
            padding: '20px',
            textAlign: 'center' 
        }}>
            <h1>Dictionary</h1>
            
            <div style={{ marginBottom: '20px' }}>
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search for a word..."
                    style={{
                        padding: '8px',
                        marginRight: '10px',
                        width: '200px'
                    }}
                />
                <button
                    onClick={handleSearch}
                    style={{
                        padding: '8px 16px',
                        backgroundColor: '#007bff',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer'
                    }}
                >
                    Search
                </button>
            </div>

            {hasSearched && searchResult && (
                <div>
                    {searchResult}
                </div>
            )}
        </div>
    );
};

export default Dictionary;