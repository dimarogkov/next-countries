/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import { useCallback, useEffect, useMemo, useState } from 'react';
import debounce from 'lodash.debounce';

import { getAllCountries } from '@/src/services/countries';
import { getOptions } from '@/src/helpers/getOptions';
import { Country } from '@/src/types/Country';

import CountriesList from '@/src/components/elements/CountriesList/CountriesList';
import CountriesHead from '@/src/components/CountriesHead/CountriesHead';
import { Loader } from '@/src/components/ui';

const HomePage = () => {
    const [countries, setCountries] = useState<Country[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const [searchValue, setSearchValue] = useState('');
    const [appliedSearchValue, setAppliedSearchValue] = useState('');
    const [selectValue, setSelectValue] = useState('');

    useEffect(() => {
        let time = 0;

        getAllCountries()
            .then(setCountries)
            .finally(() => (time = window.setTimeout(() => setIsLoading(false), 1500)));

        return () => {
            window.clearTimeout(time);
        };
    }, []);

    const applySearchValue = useCallback(debounce(setAppliedSearchValue, 700), []);
    const options = getOptions(countries);

    const onSearchChange = (value: string) => {
        applySearchValue(value);
        setSearchValue(value);
    };

    const filteredCountries = useMemo(() => {
        let arr = [...countries];

        if (appliedSearchValue) {
            arr = arr.filter(({ name }) => name.common.toLowerCase().includes(appliedSearchValue.toLowerCase()));
        }

        if (selectValue) {
            selectValue !== 'All' && (arr = arr.filter(({ region }) => region === selectValue));
        }

        return arr;
    }, [appliedSearchValue, countries, selectValue]);

    return (
        <>
            {!isLoading ? (
                <section className='relative w-full'>
                    <div className='w-full mb-[20px] last:mb-0'>
                        <CountriesHead
                            searchValue={searchValue}
                            selectValue={selectValue}
                            options={options}
                            onSearchChange={onSearchChange}
                            onSelectChange={setSelectValue}
                        />
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
