import { Country } from '@/src/types/Country';
import { BtnLink, Label, Subtitle, Text, Title } from '@/src/components/ui';
import { getCountry } from '@/src/services/countries';
import Image from 'next/image';

type Props = {
    params: {
        countryName: string;
    };
};

const CountryPage: React.FC<Props> = async ({ params }) => {
    const countryName = params.countryName.replaceAll('%20', ' ');
    const country: Country = (await getCountry(countryName))[0];
    const { area, name, capital, region, subregion, languages, maps, population, timezones, continents, flags } =
        country;

    return (
        <section className='relative w-full'>
            <BtnLink href='/' className='mb-[20px] sm:mb-[24px] md:mb-[40px] last:mb-0'>
                Back
            </BtnLink>
            <div className='flex flex-col lg:flex-row justify-between w-full gap-[24px] sm:gap-[32px] md:gap-[40px]'>
                <div className='relative w-full lg:w-[50%] h-0 pb-[56%] lg:pb-[30%] shadow-xl'>
                    <Image
                        src={flags.svg}
                        alt={name.common}
                        fill
                        className='absolute top-0 left-0 w-full h-full object-cover object-center'
                    />
                </div>

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
            </div>
        </section>
    );
};

export default CountryPage;
