import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8080/api/',  // Backend alap URL-je
    headers: {
        'Content-Type': 'application/json',
    },
});

// Felhasználó regisztráció
export const registerUser = async (userData: { username: string; email: string; password: string }) => {
    const response = await api.post('users/register', userData);
    return response.data;
};

// Bejelentkezés
export const loginUser = async (credentials: { username: string; password: string }): Promise<{ token: string }> => {
    const response = await api.post<{ token: string }>('users/login', credentials);
    const token = response.data.token;

    // Token tárolása
    localStorage.setItem('token', token);

    // Token hozzáadása az Axios alapértelmezett fejléceihez
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    return response.data;
};

// Token eltávolítása kijelentkezéskor
export const logoutUser = () => {
    localStorage.removeItem('token');
    delete api.defaults.headers.common['Authorization'];
};

// Pokémon keresése név alapján
export const getPokemonByName = async (name: string) => {
    const response = await api.get(`pokemon/${name}`);
    return response.data;
};

// Pokémon befogása
export const catchPokemon = async (pokemonId: number) => {
    const response = await api.post(`pokemon/catch/${pokemonId}`);
    return response.data;
};

// Pokémon elengedése
export const releasePokemon = async (pokemonId: number) => {
    const response = await api.delete(`pokemon/release/${pokemonId}`);
    return response.data;
};
