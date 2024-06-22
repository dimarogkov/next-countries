import Link from 'next/link';

type Props = {
    children: React.ReactNode;
    href: string;
    className?: string;
};

const BtnLink: React.FC<Props> = ({ children, href, className = '' }) => {
    return (
        <Link
            href={href}
            className={`flex items-center justify-center w-full sm:w-fit sm:min-w-[100px] h-[44px] font-medium tracking-[0.5px] px-[16px] rounded-[4px] text-light bg-blue transition-opacity duration-300 hover:opacity-85 ${className}`}
        >
            {children}
        </Link>
    );
};

export default BtnLink;
