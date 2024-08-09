// src/api/axios.ts
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8080/', // Az API alap URL-je
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api;