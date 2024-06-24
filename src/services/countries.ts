const qpiUrl = 'https://restcountries.com/v3.1';

export const getAllCountries = async () => {
    const res = await fetch(`${qpiUrl}/all`);

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json();
};

export const getCountry = async (name: string) => {
    const res = await fetch(`${qpiUrl}/name/${name}`);

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json();
};
