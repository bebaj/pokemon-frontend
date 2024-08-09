import React, { useState } from 'react';
import SearchBar from '../components/PokemonSearch';
import PokemonCard from '../components/PokemonCard';
import { getPokemonByName, catchPokemon } from '../services/api';
import PokemonSearch from '../components/PokemonSearch';
import {Link} from "react-router-dom";

const HomePage: React.FC = () => {
    const [pokemon, setPokemon] = useState<any>(null);

    const handleSearch = async (query: string) => {
        try {
            const data = await getPokemonByName(query);
            setPokemon(data);
        } catch (error) {
            console.error('Pokémon not found');
            setPokemon(null);
        }
    };

    const handleCatch = async () => {
        if (pokemon) {
            try {
                await catchPokemon(pokemon.id);
                alert(`${pokemon.name} caught successfully!`);
            } catch (error) {
                console.error('Error catching Pokémon', error);
            }
        }
    };

    return (
        <div>

                <h1>Welcome to the Pokémon App</h1>
                <p>
                    <Link to="/login">Login</Link>
                </p>
                <p>
                    <Link to="/register">Register</Link>
                </p>
            <h1>Pokémon Search</h1>
            <PokemonSearch />
        </div>
    );
};

export default HomePage;
