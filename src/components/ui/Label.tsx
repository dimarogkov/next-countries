import { HTMLAttributes, forwardRef } from 'react';

interface Props extends HTMLAttributes<HTMLSpanElement> {
    className?: string;
}

const Label: React.FC<Props> = forwardRef<HTMLSpanElement, Props>(({ className = '', ...props }, ref) => (
    <span
        ref={ref}
        {...props}
        className={`flex w-fit text-base px-2 py-1 rounded text-dark dark:text-light bg-light dark:bg-darkLight ${className}`}
    />
));

Label.displayName = 'Label';
export default Label;
