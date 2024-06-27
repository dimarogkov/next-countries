'use client';
import { useEffect, useState } from 'react';
import { getCountry } from '@/src/services/countries';
import { Country } from '@/src/types/Country';

import CountryFlag from '../CountryFlag/CountryFlag';
import CountryContent from '../CountryContent/CountryContent';
import { Loader } from '../../ui';

type Props = {
    countryName: string;
};

const CountryInfo: React.FC<Props> = ({ countryName }) => {
    const [country, setCountry] = useState<Country | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        getCountry(countryName)
            .then((res) => setCountry(res[0]))
            .finally(() => setIsLoading(false));
    }, [countryName]);

    return (
        <>
            {!isLoading && country ? (
                <div className='flex flex-col lg:flex-row justify-between w-full gap-6 sm:gap-8 md:gap-10'>
                    <CountryFlag scr={country.flags.svg} alt={country.name.common} />
                    <CountryContent country={country} />
                </div>
            ) : (
                <Loader />
            )}
        </>
    );
};

export default CountryInfo;
