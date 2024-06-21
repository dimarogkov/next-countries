import { BtnLink, Text, Title } from '@/src/components/ui';

const HomePage = () => {
    return (
        <section className='relative w-full'>
            <div className='w-full mb-[20px] last:mb-0'>
                <Title className='mb-[8px] last:mb-0'>Home Page</Title>
                <Text className='mb-[20px] last:mb-0'>This is Home Page.</Text>
                <BtnLink href='/'>Link</BtnLink>
            </div>
        </section>
    );
};

export default HomePage;
