import { Dispatch, SetStateAction } from 'react';
import { LuSearch } from 'react-icons/lu';
import { Input, Select } from '../ui';
import { SelectOption } from '@/src/types/SelectOption';

type Props = {
    searchValue: string;
    selectValue: string;
    options: SelectOption[];
    onSearchChange: (value: string) => void;
    onSelectChange: Dispatch<SetStateAction<string>>;
};

const CountriesHead: React.FC<Props> = ({
    searchValue,
    selectValue,
    options,
    onSearchChange = () => {},
    onSelectChange = () => {},
}) => {
    return (
        <div className='flex justify-between w-full gap-[20px] sm:gap-[4%] mb-[32px] last:mb-0'>
            <div className='relative flex flex-wrap items-center w-full sm:max-w-[48%] md:max-w-[390px]'>
                <LuSearch className='absolute left-[10px] w-[20px] h-[20px] text-dark dark:text-light' />

                <Input
                    name='search'
                    placeholder='Search of a country'
                    className='pl-[40px]'
                    value={searchValue}
                    onChange={({ target }) => onSearchChange(target.value)}
                />
            </div>

            <Select
                name='filter_by_region'
                placeholder='Filter by region'
                className='sm:max-w-[48%] md:max-w-[250px]'
                options={options}
                value={selectValue}
                onChange={({ target }) => onSelectChange(target.value)}
            />
        </div>
    );
};

export default CountriesHead;
