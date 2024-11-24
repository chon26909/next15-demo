import React, { ButtonHTMLAttributes, FC } from 'react';

type Variant = 'solid' | 'bordered';
interface Button {
    className?: ButtonHTMLAttributes<HTMLButtonElement>['className'];
    type: ButtonHTMLAttributes<HTMLButtonElement>['type'];
    width?: 'full';
    variant: Variant;
    children: React.ReactNode | string;
    disabled?: ButtonHTMLAttributes<HTMLButtonElement>['disabled'];
    onClick?: ButtonHTMLAttributes<HTMLButtonElement>['onClick'];
}

const variantStyle: Record<Variant, string> = {
    solid: 'border-primary border-2 bg-primary text-white',
    bordered: 'border-primary border-2 bg-white text-primary',
};

const Button: FC<Button> = (props) => {
    const { variant, width, type, children, className, disabled, ...other } = props;

    return (
        <button
            type={type}
            className={[
                className,
                'p-3 rounded active:opacity-80',
                width ? 'w-full' : 'w-[200px]',
                disabled && 'bg-slate-400 border-slate-300',
                variantStyle[variant],
            ].join(' ')}
            disabled={disabled}
            {...other}
        >
            {children}
        </button>
    );
};

export default Button;
