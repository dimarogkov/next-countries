'use client';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

import { LuMoon, LuSun } from 'react-icons/lu';

const ThemeController = () => {
    const [mounted, setMounted] = useState(false);
    const { resolvedTheme, setTheme } = useTheme();

    useEffect(() => setMounted(true), []);

    const changeTheme = () => {
        resolvedTheme === 'light' ? setTheme('dark') : setTheme('light');
    };

    return (
        mounted && (
            <label className='flex items-center cursor-pointer gap-x-3'>
                <LuSun className='w-5 h-5 text-dark dark:text-light' />

                <input
                    type='checkbox'
                    value='theme'
                    checked={resolvedTheme === 'dark'}
                    onChange={changeTheme}
                    className='toggle theme-controller border-grey bg-grey checked:bg-light hover:bg-grey dark:hover:bg-light'
                />

                <LuMoon className='w-5 h-5 text-dark dark:text-light' />
            </label>
        )
    );
};

export default ThemeController;
