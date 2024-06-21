type Props = {
    children: React.ReactNode;
    className?: string;
};

const Text: React.FC<Props> = ({ children, className = '' }) => {
    return <p className={`w-full text-dark dark:text-light ${className}`}>{children}</p>;
};

export default Text;
