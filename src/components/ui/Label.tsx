type Props = {
    children: React.ReactNode;
    className?: string;
};

const Label: React.FC<Props> = ({ children, className = '' }) => {
    return <label className={`relative block w-full text-dark dark:text-light ${className}`}>{children}</label>;
};

export default Label;
