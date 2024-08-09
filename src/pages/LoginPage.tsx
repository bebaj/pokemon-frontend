import React, { useState } from 'react';
import { loginUser } from '../services/api';
const LoginPage: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setLoading(true);
        setError(null);

        try {
            await loginUser({ username, password });
            // Sikeres bejelentkezés esetén, például átirányítás a főoldalra
            window.location.href = '/';
        } catch (error) {
            setError('Bejelentkezési hiba! Ellenőrizd a felhasználónevet és a jelszót.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h1>Bejelentkezés</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Felhasználónév:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Jelszó:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                {error && <p>{error}</p>}
                <button type="submit" disabled={loading}>
                    {loading ? 'Bejelentkezés...' : 'Bejelentkezés'}
                </button>
            </form>
        </div>
    );
};

export default LoginPage;
