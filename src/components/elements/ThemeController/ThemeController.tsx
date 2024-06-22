'use client';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

import { LuSun } from 'react-icons/lu';
import { LuMoon } from 'react-icons/lu';

const ThemeController = () => {
    const [mounted, setMounted] = useState(false);
    const { resolvedTheme, setTheme } = useTheme();

    useEffect(() => setMounted(true), []);

    const changeTheme = () => {
        resolvedTheme === 'light' ? setTheme('dark') : setTheme('light');
    };

    return (
        mounted && (
            <label className='flex items-center cursor-pointer gap-x-[12px]'>
                <LuSun className='w-[20px] h-[20px] text-dark dark:text-light' />

                <input
                    type='checkbox'
                    value='theme'
                    checked={resolvedTheme === 'dark'}
                    onChange={changeTheme}
                    className='toggle theme-controller border-grey bg-grey checked:bg-light hover:bg-grey dark:hover:bg-light'
                />

                <LuMoon className='w-[20px] h-[20px] text-dark dark:text-light' />
            </label>
        )
    );
};

export default ThemeController;
