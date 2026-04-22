import { ComponentPropsWithoutRef } from 'react';
import './Button.css';

type ButtonTarget = '_self' | '_blank';
type ButtonVariant = 'primary' | 'secondary' | 'link';
type ButtonSize = 'small' | 'medium' | 'large';

export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
    text: string;
    textColor?: string;
    backgroundColor?: string;
    href?: string;
    target?: ButtonTarget;
    size?: ButtonSize;
    variant?: ButtonVariant;
};

export const ButtonComponent = ({
    text,
    textColor,
    backgroundColor,
    href,
    target,
    style,
    className = '',
    size = 'medium',
    type = 'button',
    variant = 'primary',
    disabled,
    rel,
    ...props
}: ButtonProps) => {
    const styleList = {
        backgroundColor: backgroundColor,
        color: textColor,
        ...style
    };
    const baseClass = `cl__btn cl__btn--${variant} ${className}`.trim();

    if (variant === 'link' || href) {
        return (
            <a
                className={baseClass}
                href={href}
                target={target}
                style={styleList as React.CSSProperties}
                rel={target === '_blank' ? (rel || 'noopener noreferrer') : rel}
                {...(props as ComponentPropsWithoutRef<'a'>)}
            >
                {text}
            </a>
        );
    }

    return (
        <button
            className={`${baseClass} cl__btn--${size}`}
            type={type}
            disabled={disabled}
            style={styleList as React.CSSProperties}
            {...props}
        >
            {text}
        </button>
    );
};
