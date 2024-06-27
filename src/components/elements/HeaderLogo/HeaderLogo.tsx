import Link from 'next/link';
import { SiNextdotjs } from 'react-icons/si';

const HeaderLogo = () => {
    return (
        <Link href='/' className='flex items-center gap-x-3 transition-opacity duration-300 hover:opacity-75'>
            <SiNextdotjs className='w-8 sm:w-7 md:w-8 sm:min-w-7 md:min-w-8 h-8 sm:h-7 md:h-8 text-dark dark:text-light' />
            <span className='hidden sm:block w-fit font-medium text-lg text-dark dark:text-light'>World Explorer</span>
        </Link>
    );
};

export default HeaderLogo;
