import { Country } from '../types/Country';
import { SelectOption } from '../types/SelectOption';

export const getOptions = (arr: Country[]): SelectOption[] => {
    const regionsArr = arr.map(({ region }) => region);

    const arrWithoutDuplicates = regionsArr.reduce((acc: string[], option) => {
        return !acc.includes(option) ? [...acc, option] : acc;
    }, []);

    const sortedArr = arrWithoutDuplicates.sort((a, b) => a.localeCompare(b));

    return ['All', ...sortedArr].map((region: string) => ({
        id: crypto.randomUUID(),
        value: region,
    }));
};
