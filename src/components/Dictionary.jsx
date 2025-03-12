import React, { useState } from 'react';

const Dictionary = () => {
    const [word, setWord] = useState('');
    const [definitions, setDefinitions] = useState([]);
    const [error, setError] = useState('');

    const fetchDefinitions = async () => {
        if (!word) return;

        try {
            const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
            if (!response.ok) {
                throw new Error('Word not found');
            }
            const data = await response.json();
            setDefinitions(data[0].meanings);
            setError('');
        } catch (err) {
            setError(err.message);
            setDefinitions([]);
        }
    };

    const handleSearch = (e) => {
        e.preventDefault();
        fetchDefinitions();
    };

    return (
        <div className="dictionary">
            <h1>Dictionary App</h1>
            <form onSubmit={handleSearch} className="search-container">
                <input
                    type="text"
                    value={word}
                    onChange={(e) => setWord(e.target.value)}
                    placeholder="Enter a word"
                />
                <button type="submit">Search</button>
            </form>
            {error && <p className="error">{error}</p>}
            <div className="definitions-container">
                <div className="definitions">
                    {definitions.map((meaning, index) => (
                        <div key={index}>
                            <h2>{meaning.partOfSpeech}</h2>
                            <ul>
                                {meaning.definitions.map((def, idx) => (
                                    <li key={idx}>{def.definition}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Dictionary;