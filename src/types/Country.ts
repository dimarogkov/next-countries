export interface CountryName {
    common: string;
    official: string;
}

export interface CountryLanguages {
    [key: string]: string;
}

export interface CountryMaps {
    googleMaps: string;
    openStreetMaps: string;
}

export interface CountryFlags {
    svg: string;
    alt: string;
}

export interface Country {
    name: CountryName;
    capital: string;
    region: string;
    subregion: string;
    languages: CountryLanguages;
    area: number;
    maps: CountryMaps;
    population: number;
    timezones: string[];
    continents: string[];
    flags: CountryFlags;
}
