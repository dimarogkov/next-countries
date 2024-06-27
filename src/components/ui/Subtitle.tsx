import { HTMLAttributes, forwardRef } from 'react';

interface Props extends HTMLAttributes<HTMLHeadingElement> {
    className?: string;
}

const Subtitle: React.FC<Props> = forwardRef<HTMLHeadingElement, Props>(({ className = '', ...props }, ref) => (
    <h3 ref={ref} {...props} className={`w-full font-bold text-xl text-dark dark:text-light ${className}`} />
));

Subtitle.displayName = 'Subtitle';
export default Subtitle;
