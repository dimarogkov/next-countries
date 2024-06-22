import Link from 'next/link';
import Image from 'next/image';

import { Country as CountryType } from '@/src/types/Country';
import { Subtitle, Text } from '../../ui';

type Props = {
    country: CountryType;
};

const CountryCard: React.FC<Props> = ({ country }) => {
    const { name, population, region, capital, flags } = country;

    return (
        <Link
            href={name.common}
            className='w-full rounded-[8px] overflow-hidden border border-light dark:border-darkLight bg-light dark:bg-darkLight transition-opacity duration-300 hover:opacity-75'
        >
            <div className='relative w-full h-0 pb-[60%] border-b border-light dark:border-dark bg-light dark:bg-dark'>
                <Image
                    src={flags.svg}
                    alt={name.common}
                    fill={true}
                    className='absolute top-0 left-0 w-full h-full object-cover object-center'
                />
            </div>

            <div className='w-full p-[12px] sm:p-[16px]'>
                <Subtitle className='mb-[8px] last:mb-0'>{name.common}</Subtitle>

                <div className='flex flex-col w-full gap-[4px]'>
                    <Text>
                        <span className='font-semibold'>Population:</span> {population}
                    </Text>
                    <Text>
                        <span className='font-semibold'>Region:</span> {region}
                    </Text>
                    <Text>
                        <span className='font-semibold'>Capital:</span> {capital}
                    </Text>
                </div>
            </div>
        </Link>
    );
};

export default CountryCard;
