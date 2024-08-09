export interface Pokemon {
    id: number;
    name: string;
    sprites: {
        front_default: string;
    };
    // további mezők, amik a válaszban szerepelnek
}

export interface User {
    id: number;
    username: string;
    email: string;
    // további mezők, amik a válaszban szerepelnek
}
