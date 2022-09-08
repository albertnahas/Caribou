
export interface Climate {
    high: number;
    low: number;
    precip: number;
    weather: string;
}

export interface Themes {
    culture?: number;
    modern?: number;
    temples?: number;
    beach?: number;
    family?: number;
    food?: number;
    museums?: number;
    nightlife?: number;
    sightseeing?: number;
}

export interface City {
    climate: Climate;
    path: string[];
    photos: string[];
    region: string;
    score: number;
    themes: Themes;
}