type Props = {
    type?: string;
    placeholder?: string;
    className?: string;
    checked?: boolean;
    autoFocus?: boolean;
};

const Input: React.FC<Props> = ({
    type = 'text',
    placeholder = '',
    className = '',
    checked = false,
    autoFocus = false,
}) => {
    return (
        <input
            type={type}
            checked={checked}
            placeholder={placeholder}
            autoFocus={autoFocus}
            className={`w-full h-[40px] px-[16px] rounded-[4px] border-2 border-slate-300 outline-none transition-all duration-300 focus:border-black ${className}`}
        />
    );
};

export default Input;
