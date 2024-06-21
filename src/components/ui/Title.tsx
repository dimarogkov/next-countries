type Props = {
    children: React.ReactNode;
    className?: string;
};

const Title: React.FC<Props> = ({ children, className = '' }) => {
    return (
        <h1
            className={`w-full font-bold text-[28px] md:text-[32px] lg:text-[40px] xl:text-[48px] text-dark dark:text-light ${className}`}
        >
            {children}
        </h1>
    );
};

export default Title;
