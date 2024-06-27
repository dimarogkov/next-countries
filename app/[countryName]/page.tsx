'use client';
import { useEffect, useState } from 'react';
import { getCountry } from '@/src/services/countries';
import { Country } from '@/src/types/Country';

import CountryFlag from '@/src/components/elements/CountryFlag/CountryFlag';
import CountryInfo from '@/src/components/elements/CountryInfo/CountryInfo';
import { BtnLink, Loader } from '@/src/components/ui';

type Props = {
    params: {
        countryName: string;
    };
};

const CountryPage: React.FC<Props> = ({ params }) => {
    const [country, setCountry] = useState<Country | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const countryName = params.countryName.replaceAll('%20', ' ');

        setIsLoading(true);
        getCountry(countryName)
            .then((res) => setCountry(res[0]))
            .finally(() => setIsLoading(false));
    }, [params.countryName]);

    return (
        <section className='relative w-full'>
            <BtnLink href='/' className='mb-[20px] sm:mb-[24px] md:mb-[40px] last:mb-0'>
                Back
            </BtnLink>

            {!isLoading && country ? (
                <div className='flex flex-col lg:flex-row justify-between w-full gap-[24px] sm:gap-[32px] md:gap-[40px]'>
                    <CountryFlag scr={country.flags.svg} alt={country.name.common} />
                    <CountryInfo country={country} />
                </div>
            ) : (
                <Loader />
            )}
        </section>
    );
};

export default CountryPage;
