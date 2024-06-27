'use client';
import { SelectHTMLAttributes, forwardRef } from 'react';
import { SelectOption } from '@/src/types/SelectOption';
import { LuChevronDown } from 'react-icons/lu';

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
    placeholder?: string;
    className?: string;
    options?: SelectOption[];
}

const defaultOptions = [{ id: 0, value: 'option', text: 'Option' }];

const Select: React.FC<Props> = forwardRef<HTMLSelectElement, Props>(
    ({ placeholder = 'Placeholder', className = '', options = defaultOptions, ...props }, ref) => (
        <div className={`relative flex items-center w-full h-11 cursor-pointer ${className}`}>
            <select
                ref={ref}
                {...props}
                value={props.value || placeholder}
                className='w-full h-full font-medium tracking-wide px-5 pr-14 rounded-md border cursor-pointer outline-none appearance-none text-dark dark:text-light border-light dark:border-darkLight bg-light dark:bg-darkLight focus:border-black dark:focus:border-light transition-all duration-300'
            >
                <>
                    <option value={placeholder} disabled hidden>
                        {placeholder}
                    </option>

                    {options.map(({ id, value }) => (
                        <option value={value} key={id}>
                            {value}
                        </option>
                    ))}
                </>
            </select>

            <LuChevronDown className='absolute right-5 w-5 h-5 text-dark dark:text-light' />
        </div>
    )
);

Select.displayName = 'Select';
export default Select;
