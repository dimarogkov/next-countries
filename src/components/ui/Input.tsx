import { InputHTMLAttributes, forwardRef } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
}

const Input: React.FC<Props> = forwardRef<HTMLInputElement, Props>(({ className = '', ...props }, ref) => (
    <input
        ref={ref}
        {...props}
        className={`w-full h-11 font-medium px-5 rounded-md tracking-wide border outline-none text-dark dark:text-light border-light dark:border-darkLight bg-light dark:bg-darkLight placeholder:text-dark dark:placeholder:text-light focus:border-black dark:focus:border-light transition-all duration-300 ${className}`}
    />
));

Input.displayName = 'Input';
export default Input;
