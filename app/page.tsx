/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import { useCallback, useEffect, useMemo, useState } from 'react';
import debounce from 'lodash.debounce';

import { getAllCountries } from '@/src/services/countries';
import { getOptions } from '@/src/helpers/getOptions';
import { Country } from '@/src/types/Country';

import CountriesList from '@/src/components/elements/CountriesList/CountriesList';
import CountriesHead from '@/src/components/elements/CountriesHead/CountriesHead';
import CountryNotFound from '@/src/components/elements/CountryNotFound/CountryNotFound';
import { Loader } from '@/src/components/ui';

const HomePage = () => {
    const [countries, setCountries] = useState<Country[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const [appliedSearchValue, setAppliedSearchValue] = useState('');
    const [searchValue, setSearchValue] = useState('');
    const [selectValue, setSelectValue] = useState('');

    useEffect(() => {
        setIsLoading(true);

        getAllCountries()
            .then(setCountries)
            .finally(() => setIsLoading(false));
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
                    <div className='w-full mb-5 last:mb-0'>
                        <CountriesHead
                            searchValue={searchValue}
                            selectValue={selectValue}
                            options={options}
                            onSearchChange={onSearchChange}
                            onSelectChange={setSelectValue}
                        />

                        {filteredCountries.length ? (
                            <CountriesList countries={filteredCountries} />
                        ) : (
                            <CountryNotFound />
                        )}
                    </div>
                </section>
            ) : (
                <Loader />
            )}
        </>
    );
};

export default HomePage;
