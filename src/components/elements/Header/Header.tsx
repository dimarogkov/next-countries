import HeaderLogo from '../HeaderLogo/HeaderLogo';
import ThemeController from '../ThemeController/ThemeController';

const Header = () => {
    return (
        <header className='fixed z-10 top-0 left-0 w-full h-16 md:h-20 border-b border-light dark:border-darkLight bg-light dark:bg-darkLight shadow-lg'>
            <div className='flex items-center justify-between w-full max-w-screen-2xl h-full px-6 md:px-10 m-auto'>
                <HeaderLogo />
                <ThemeController />
            </div>
        </header>
    );
};

export default Header;
