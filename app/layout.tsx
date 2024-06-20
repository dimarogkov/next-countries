import type { Metadata } from 'next';
import StoreProvider from '@/src/store/StoreProvider';

import './globals.css';

export const metadata: Metadata = {
    title: {
        default: 'Next Template | Home Page',
        template: 'Next Template | %s',
    },
    description: 'Generated by Dmytro Rogkov',
};

type Props = {
    children: React.ReactNode;
};

const RootLayout: React.FC<Props> = ({ children }) => {
    return (
        <StoreProvider>
            <html lang='en'>
                <body>
                    <main className='relative w-full max-w-[1440px] p-[24px] md:p-[40px] m-auto'>{children}</main>
                </body>
            </html>
        </StoreProvider>
    );
};

export default RootLayout;