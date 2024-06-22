/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { getAllCountries } from '@/src/services/countries';
import debounce from 'lodash.debounce';

import CountriesList from '@/src/components/elements/CountriesList/CountriesList';
import CountriesHead from '@/src/components/CountriesHead/CountriesHead';
import { Loader } from '@/src/components/ui';
import { Country } from '@/src/types/Country';

const HomePage = () => {
    const [countries, setCountries] = useState<Country[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [search, setSearch] = useState('');
    const [appliedSearch, setAppliedSearch] = useState('');

    useEffect(() => {
        let time = 0;

        getAllCountries()
            .then(setCountries)
            .finally(() => (time = window.setTimeout(() => setIsLoading(false), 2000)));

        return () => {
            window.clearTimeout(time);
        };
    }, []);

    const applySearch = useCallback(debounce(setAppliedSearch, 700), []);

    const onSearchChange = (value: string) => {
        applySearch(value);
        setSearch(value);
    };

    const filteredCountries = useMemo(() => {
        let arr = [...countries];

        if (appliedSearch) {
            arr = arr.filter(({ name }) => name.common.toLowerCase().includes(appliedSearch.toLowerCase()));
        }

        return arr;
    }, [appliedSearch, countries]);

    return (
        <>
            {!isLoading ? (
                <section className='relative w-full'>
                    <div className='w-full mb-[20px] last:mb-0'>
                        <CountriesHead search={search} onSearchChange={onSearchChange} />
                        <CountriesList countries={filteredCountries} />
                    </div>
                </section>
            ) : (
                <Loader />
            )}
        </>
    );
};

export default HomePage;
