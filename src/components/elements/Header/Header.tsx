import HeaderLogo from '../HeaderLogo/HeaderLogo';
import ThemeController from '../ThemeController/ThemeController';

const Header = () => {
    return (
        <header className='sticky z-10 top-0 left-0 w-full h-[60px] sm:h-[70px] md:h-[80px] border-b border-light dark:border-darkLight bg-white dark:bg-darkLight'>
            <div className='flex items-center justify-between w-full max-w-[1440px] h-full px-[24px] md:px-[40px] m-auto'>
                <HeaderLogo />
                <ThemeController />
            </div>
        </header>
    );
};

export default Header;
