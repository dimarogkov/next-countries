import Image from 'next/image';

type Props = {
    scr: string;
    alt: string;
};

const CountryFlag: React.FC<Props> = ({ scr, alt }) => {
    return (
        <div className='relative w-full lg:w-[50%] h-0 pb-[56%] lg:pb-[30%] shadow-xl'>
            <Image
                src={scr}
                alt={alt}
                fill
                className='absolute top-0 left-0 w-full h-full object-cover object-center'
            />
        </div>
    );
};

export default CountryFlag;
