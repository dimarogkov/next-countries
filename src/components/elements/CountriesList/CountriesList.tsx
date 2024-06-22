import { Country } from '@/src/types/Country';
import CountryCard from '../CountryCard/CountryCard';

type Props = {
    countries: Country[];
};

const CountriesList: React.FC<Props> = ({ countries }) => {
    return (
        <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 w-full gap-[20px] md:gap-[24px]'>
            {countries.map((country) => (
                <CountryCard country={country} key={country.name.official} />
            ))}
        </div>
    );
};

export default CountriesList;
