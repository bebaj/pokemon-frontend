import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PokemonDetailPage from './pages/PokemonDetailPage';
import LoginPage from './pages/LoginPage';
import PrivateRoute from './components/PrivateRoute';
import RegisterPage from "./pages/RegisterPage";

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route
                    path="/pokemon/:name"
                    element={
                        <PrivateRoute>
                            <PokemonDetailPage />
                        </PrivateRoute>
                    }
                />
            </Routes>
        </Router>
    );
};

export default App;