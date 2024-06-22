'use client';
import { ChangeEventHandler } from 'react';

type Props = {
    name?: string;
    value?: string;
    type?: string;
    placeholder?: string;
    className?: string;
    checked?: boolean;
    autoFocus?: boolean;
    onChange?: ChangeEventHandler<HTMLInputElement>;
};

const Input: React.FC<Props> = ({
    name = 'name',
    value,
    type = 'text',
    placeholder = '',
    className = '',
    checked = false,
    autoFocus = false,
    onChange = () => {},
}) => {
    return (
        <input
            name={name}
            value={value}
            type={type}
            checked={checked}
            placeholder={placeholder}
            autoFocus={autoFocus}
            onChange={onChange}
            className={`w-full h-[44px] font-medium px-[20px] rounded-[6px] tracking-[0.5px] border outline-none text-dark dark:text-light border-light dark:border-darkLight bg-light dark:bg-darkLight placeholder:text-dark dark:placeholder:text-light focus:border-black dark:focus:border-light transition-all duration-300 ${className}`}
        />
    );
};

export default Input;
