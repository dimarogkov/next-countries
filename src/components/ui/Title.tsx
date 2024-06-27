import { HTMLAttributes, forwardRef } from 'react';

interface Props extends HTMLAttributes<HTMLHeadingElement> {
    className?: string;
}

const Title: React.FC<Props> = forwardRef<HTMLHeadingElement, Props>(({ className = '', ...props }, ref) => (
    <h1
        ref={ref}
        {...props}
        className={`w-full font-bold text-3xl md:text-4xl lg:text-5xl text-dark dark:text-light ${className}`}
    />
));

Title.displayName = 'Title';
export default Title;
