import React, { forwardRef, InputHTMLAttributes } from 'react';

interface ITextInputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    className?: string;
    width?: 'full';
    errorMessage?: string;
}

const inputClass =
    'text-[20px] mt-1 px-3 py-2 bg-white shadow-sm border-gray-300 border-2 rounded placeholder-slate-400 focus:outline-none';

const TextInput = forwardRef<HTMLInputElement, ITextInputProps>((props, ref) => {
    const { width, label, className, type, errorMessage } = props;

    return (
        <div className="mb-3">
            <label htmlFor={label}>{label}</label>
            <input
                ref={ref}
                type={type}
                name={props.name}
                className={[
                    width === 'full' ? 'w-full' : 'w-[250px]',
                    errorMessage && errorMessage.length > 0
                        ? '!border-red ring-2 ring-red'
                        : 'focus:border-primary focus:ring-1 ring-primary',
                    inputClass,
                    className,
                ].join(' ')}
                {...props}
            />
            <div className="text-red-500">{errorMessage}&nbsp;</div>
        </div>
    );
});

TextInput.displayName = 'TextInput';
export default TextInput;
