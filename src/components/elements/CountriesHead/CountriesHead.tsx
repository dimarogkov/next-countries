import { Dispatch, SetStateAction } from 'react';
import { SelectOption } from '@/src/types/SelectOption';
import { LuSearch } from 'react-icons/lu';
import { Input, Select } from '../../ui';

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
        <div className='flex flex-wrap justify-between w-full gap-5 sm:gap-[4%] mb-8 last:mb-0'>
            <div className='relative flex items-center w-full sm:max-w-[48%] md:max-w-96'>
                <LuSearch className='absolute left-2.5 w-5 h-5 text-dark dark:text-light' />

                <Input
                    name='search'
                    placeholder='Search of a country'
                    className='pl-10'
                    value={searchValue}
                    onChange={({ target }) => onSearchChange(target.value)}
                />
            </div>

            <Select
                name='filter_by_region'
                placeholder='Filter by region'
                className='sm:max-w-[48%] md:max-w-64'
                options={options}
                value={selectValue}
                onChange={({ target }) => onSelectChange(target.value)}
            />
        </div>
    );
};

export default CountriesHead;
