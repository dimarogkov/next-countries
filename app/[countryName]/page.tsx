import { Metadata } from 'next';
import { getCountryName } from '@/src/helpers/getCountryName';

import CountryInfo from '@/src/components/elements/CountryInfo/CountryInfo';
import { BtnLink } from '@/src/components/ui';

type Props = {
    params: {
        countryName: string;
    };
};

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
    const countryName = getCountryName(params.countryName);

    return {
        title: countryName,
    };
};

const CountryPage: React.FC<Props> = ({ params }) => {
    const countryName = getCountryName(params.countryName);

    return (
        <section className='relative w-full'>
            <BtnLink href='/' className='mb-5 sm:mb-6 md:mb-10 last:mb-0'>
                Back
            </BtnLink>

            <CountryInfo countryName={countryName} />
        </section>
    );
};

export default CountryPage;
