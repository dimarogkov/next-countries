type Props = {
    children: React.ReactNode;
    className?: string;
};

const Subtitle: React.FC<Props> = ({ children, className = '' }) => {
    return <h3 className={`w-full font-bold text-[20px] text-dark dark:text-light ${className}`}>{children}</h3>;
};

export default Subtitle;
