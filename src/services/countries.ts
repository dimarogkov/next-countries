const qpiUrl = 'https://restcountries.com/v3.1';

export const getAllCountries = async () => {
    const res = await fetch(`${qpiUrl}/all`, { method: 'GET' });

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json();
};
