import { AnchorHTMLAttributes, forwardRef } from 'react';
import Link from 'next/link';

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string;
    className?: string;
}

const BtnLink: React.FC<Props> = forwardRef<HTMLAnchorElement, Props>(({ className = '', ...props }, ref) => (
    <Link
        ref={ref}
        {...props}
        className={`flex items-center justify-center w-full sm:w-fit sm:min-w-24 h-11 font-medium tracking-wide px-4 rounded text-dark dark:text-light bg-light dark:bg-darkLight transition-opacity duration-300 hover:opacity-85 ${className}`}
    />
));

BtnLink.displayName = 'BtnLink';
export default BtnLink;
