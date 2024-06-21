import { Country } from '@/src/types/Country';
import CountryCard from '../CountryCard/CountryCard';

type Props = {
    countries: Country[];
};

const CountriesList: React.FC<Props> = ({ countries }) => {
    return (
        <div className='grid grid-cols-5 gap-[24px] w-full'>
            {countries.map((country) => (
                <CountryCard country={country} key={country.name.official} />
            ))}
        </div>
    );
};

export default CountriesList;
