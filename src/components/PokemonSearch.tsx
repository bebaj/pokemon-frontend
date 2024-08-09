import React, { useState } from 'react';
import axios from 'axios';

const PokemonSearch: React.FC = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSearch = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!query) return;

        setLoading(true);
        setError(null);

        try {
            // Fetch Pokémon data from PokéAPI by name
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${query.toLowerCase()}`);
            setResults([response.data]);
        } catch (err) {
            setError('Pokémon not found');
            setResults([]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search Pokémon"
                />
                <button type="submit">Search</button>
            </form>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            <ul>
                {results.map((pokemon) => (
                    <li key={pokemon.id}>
                        <p>{pokemon.name}</p>
                        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PokemonSearch;
