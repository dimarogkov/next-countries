import { getAllCountries } from '@/src/services/countries';
import { Country } from '@/src/types/Country';

import CountriesList from '@/src/components/elements/CountriesList/CountriesList';

const HomePage = async () => {
    const data: Country[] = await getAllCountries();

    return (
        <section className='relative w-full'>
            <div className='w-full mb-[20px] last:mb-0'>
                <CountriesList countries={data} />
            </div>
        </section>
    );
};

export default HomePage;
