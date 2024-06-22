'use client';
import { ChangeEventHandler } from 'react';
import { SelectOption } from '@/src/types/SelectOption';
import { LuChevronDown } from 'react-icons/lu';

type Props = {
    name?: string;
    value?: string;
    placeholder?: string;
    className?: string;
    disabled?: boolean;
    autoFocus?: boolean;
    options?: SelectOption[];
    onChange?: ChangeEventHandler<HTMLSelectElement>;
};

const Select: React.FC<Props> = ({
    name = 'select',
    value,
    placeholder = 'Placeholder',
    className = '',
    disabled = false,
    autoFocus = false,
    options = [{ id: 0, value: 'option', text: 'Option' }],
    onChange = () => {},
}) => {
    return (
        <div className={`relative flex items-center w-full h-[44px] cursor-pointer ${className}`}>
            <select
                name={name}
                value={value || placeholder}
                disabled={disabled}
                autoFocus={autoFocus}
                onChange={onChange}
                className='w-full h-full font-medium tracking-[0.5px] px-[20px] pr-[60px] rounded-[6px] border cursor-pointer outline-none appearance-none text-dark dark:text-light border-light dark:border-darkLight bg-light dark:bg-darkLight focus:border-black dark:focus:border-light transition-all duration-300'
            >
                <>
                    <option value={placeholder} disabled className='hidden'>
                        {placeholder}
                    </option>

                    {options.map(({ id, value }) => (
                        <option value={value} key={id}>
                            {value}
                        </option>
                    ))}
                </>
            </select>

            <LuChevronDown className='absolute right-[20px] w-[20px] h-[20px] text-dark dark:text-light' />
        </div>
    );
};

export default Select;
