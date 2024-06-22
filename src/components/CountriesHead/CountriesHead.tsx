import { LuSearch } from 'react-icons/lu';
import { Input } from '../ui';

type Props = {
    search: string;
    onSearchChange: (value: string) => void;
};

const CountriesHead: React.FC<Props> = ({ search, onSearchChange }) => {
    return (
        <div className='flex justify-between w-full mb-[32px] last:mb-0'>
            <div className='relative flex items-center w-full md:max-w-[48%] lg:max-w-[40%] xl:max-w-[34%]'>
                <LuSearch className='absolute left-[10px] w-[20px] h-[20px] text-dark dark:text-light' />

                <Input
                    name='search'
                    placeholder='Search of a country'
                    className='pl-[40px]'
                    value={search}
                    onChange={({ target }) => onSearchChange(target.value)}
                />
            </div>
        </div>
    );
};

export default CountriesHead;
