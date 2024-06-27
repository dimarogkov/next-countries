import { Country } from '@/src/types/Country';
import { BtnLink, Label, Subtitle, Text, Title } from '../../ui';

type Props = {
    country: Country;
};

const CountryInfo: React.FC<Props> = ({ country }) => {
    const { name, region, subregion, capital, area, population, languages, continents, timezones, maps } = country;

    return (
        <div className='flex flex-col w-full lg:w-[50%] gap-[24px] sm:gap-[32px] md:gap-[40px]'>
            <div className='w-full p-[12px] rounded-[6px] bg-light dark:bg-darkLight'>
                <Title className='tracking-[1px]'>{name.common}</Title>
                <Subtitle className='font-medium'>{name.official}</Subtitle>
            </div>

            <ul className='grid sm:grid-cols-2 w-full gap-[8px]'>
                <li>
                    <Text className='flex flex-wrap items-start gap-[4px]'>
                        <span className='font-semibold leading-[32px]'>Region:</span>{' '}
                        <span className='leading-[32px]'>{region || '-'}</span>
                    </Text>
                </li>
                <li>
                    <Text className='flex flex-wrap items-start gap-[4px]'>
                        <span className='font-semibold leading-[32px]'>Subregion:</span>{' '}
                        <span className='leading-[32px]'>{subregion || '-'}</span>
                    </Text>
                </li>
                <li>
                    <Text className='flex flex-wrap items-start gap-[4px]'>
                        <span className='font-semibold leading-[32px]'>Capital:</span>{' '}
                        <span className='leading-[32px]'>{capital || '-'}</span>
                    </Text>
                </li>
                <li>
                    <Text className='flex flex-wrap items-start gap-[4px]'>
                        <span className='font-semibold leading-[32px]'>Area:</span>{' '}
                        <span className='leading-[32px]'>{area || 0}</span>
                    </Text>
                </li>
                <li>
                    <Text className='flex flex-wrap items-start gap-[4px]'>
                        <span className='font-semibold leading-[32px]'>Population:</span>{' '}
                        <span className='leading-[32px]'>{population || 0}</span>
                    </Text>
                </li>
                <li>
                    <Text className='flex flex-wrap items-start gap-[4px]'>
                        <span className='font-semibold leading-[32px]'>Languages:</span>{' '}
                        {Object.keys(languages).map((language) => (
                            <Label key={languages[language]}>{languages[language]}</Label>
                        ))}
                    </Text>
                </li>
                <li>
                    <Text className='flex flex-wrap items-start gap-[4px]'>
                        <span className='font-semibold leading-[32px]'>Continents:</span>{' '}
                        {continents.map((continent) => (
                            <Label key={continent}>{continent}</Label>
                        ))}
                    </Text>
                </li>
                <li>
                    <Text className='flex flex-wrap items-start gap-[4px]'>
                        <span className='font-semibold leading-[32px]'>Timezones:</span>{' '}
                        {timezones.map((timezone) => (
                            <Label key={timezone}>{timezone}</Label>
                        ))}
                    </Text>
                </li>
            </ul>

            <div className='flex flex-col sm:flex-row gap-[10px]'>
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

export default CountryInfo;
