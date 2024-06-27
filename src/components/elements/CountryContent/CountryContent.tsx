import { Country } from '@/src/types/Country';
import { BtnLink, Label, Subtitle, Text, Title } from '../../ui';

type Props = {
    country: Country;
};

const CountryContent: React.FC<Props> = ({ country }) => {
    const { name, region, subregion, capital, area, population, languages, continents, timezones, maps } = country;

    return (
        <div className='flex flex-col w-full lg:w-[50%] gap-6 sm:gap-8 md:gap-10'>
            <div className='w-full p-3 rounded-md bg-light dark:bg-darkLight'>
                <Title className='tracking-wide mb-1 sm:mb-2 last:mb-0'>{name.common}</Title>
                <Subtitle className='font-medium'>{name.official}</Subtitle>
            </div>

            <ul className='grid sm:grid-cols-2 w-full gap-2'>
                <li>
                    <Text className='flex flex-wrap items-start gap-1'>
                        <span className='font-semibold leading-8'>Region:</span>{' '}
                        <span className='leading-8'>{region || '-'}</span>
                    </Text>
                </li>
                <li>
                    <Text className='flex flex-wrap items-start gap-1'>
                        <span className='font-semibold leading-8'>Subregion:</span>{' '}
                        <span className='leading-8'>{subregion || '-'}</span>
                    </Text>
                </li>
                <li>
                    <Text className='flex flex-wrap items-start gap-1'>
                        <span className='font-semibold leading-8'>Capital:</span>{' '}
                        <span className='leading-8'>{capital || '-'}</span>
                    </Text>
                </li>
                <li>
                    <Text className='flex flex-wrap items-start gap-1'>
                        <span className='font-semibold leading-8'>Area:</span>{' '}
                        <span className='leading-8'>{area || 0}</span>
                    </Text>
                </li>
                <li>
                    <Text className='flex flex-wrap items-start gap-1'>
                        <span className='font-semibold leading-8'>Population:</span>{' '}
                        <span className='leading-8'>{population || 0}</span>
                    </Text>
                </li>
                <li>
                    <Text className='flex flex-wrap items-start gap-1'>
                        <span className='font-semibold leading-8'>Languages:</span>{' '}
                        {Object.keys(languages).map((language) => (
                            <Label key={languages[language]}>{languages[language]}</Label>
                        ))}
                    </Text>
                </li>
                <li>
                    <Text className='flex flex-wrap items-start gap-1'>
                        <span className='font-semibold leading-8'>Continents:</span>{' '}
                        {continents.map((continent) => (
                            <Label key={continent}>{continent}</Label>
                        ))}
                    </Text>
                </li>
                <li>
                    <Text className='flex flex-wrap items-start gap-1'>
                        <span className='font-semibold leading-8'>Timezones:</span>{' '}
                        {timezones.map((timezone) => (
                            <Label key={timezone}>{timezone}</Label>
                        ))}
                    </Text>
                </li>
            </ul>

            <div className='flex flex-col sm:flex-row gap-3'>
                <BtnLink href={maps.googleMaps} target='blank'>
                    Google Maps
                </BtnLink>

                <BtnLink href={maps.openStreetMaps} target='blank'>
                    Open Street Maps
                </BtnLink>
            </div>
        </div>
    );
};

export default CountryContent;
