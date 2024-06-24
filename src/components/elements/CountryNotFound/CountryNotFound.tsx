import { Text, Title } from '../../ui';

const CountryNotFound = () => {
    return (
        <div className='relative w-full'>
            <Title className='mb-[8px] last:mb-0'>Country not found...</Title>
            <Text>No country found. Try searching again.</Text>
        </div>
    );
};

export default CountryNotFound;
