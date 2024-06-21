import Link from 'next/link';
import { SiNextdotjs } from 'react-icons/si';

const HeaderLogo = () => {
    return (
        <Link href='/' className='flex items-center gap-x-[12px] transition-opacity duration-300 hover:opacity-75'>
            <SiNextdotjs className='w-[30px] sm:w-[24px] md:w-[28px] sm:min-w-[24px] md:min-w-[28px] h-[30px] sm:h-[24px] md:h-[28px] text-blue dark:text-light' />
            <span className='hidden sm:block w-fit font-medium text-[18px] text-dark dark:text-light'>
                Next Countries
            </span>
        </Link>
    );
};

export default HeaderLogo;
