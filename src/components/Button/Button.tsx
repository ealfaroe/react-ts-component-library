import { ComponentPropsWithoutRef, forwardRef } from 'react';
import './Button.css';

type ButtonTarget = '_self' | '_blank';
type ButtonVariant = 'primary' | 'secondary' | 'link';
type ButtonSize = 'small' | 'medium' | 'large';

export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
    text: string;
    textColor?: string;
    backgroundColor?: string;
    href?: string;
    rel?: string;
    target?: ButtonTarget;
    size?: ButtonSize;
    variant?: ButtonVariant;
};

export const ButtonComponent = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
    ({
        // Shared props
        text,
        textColor,
        backgroundColor,
        size = 'medium',
        variant = 'primary',
        style,
        className = '',
        // Anchor props
        href,
        target,
        // Button props
        type = 'button',
        disabled,
        // All other props
        rel,
        ...props
    }, ref) => {
        const styleList = {
            backgroundColor: backgroundColor,
            color: textColor,
            ...style
        };
        const baseClass = `cl__btn cl__btn--${variant} ${className}`.trim();

        if (variant === 'link' || href) {
            return (
                <a
                    {...(props as ComponentPropsWithoutRef<'a'>)}
                    ref={ref as React.Ref<HTMLAnchorElement>}
                    className={baseClass}
                    href={href}
                    target={target}
                    style={styleList as React.CSSProperties}
                    rel={target === '_blank' ? (rel || 'noopener noreferrer') : rel}
                >
                    {text}
                </a>
            );
        }

        return (
            <button
                {...props}
                ref={ref as React.Ref<HTMLButtonElement>}
                className={`${baseClass} cl__btn--${size}`}
                type={type}
                disabled={disabled}
                style={styleList as React.CSSProperties}
            >
                {text}
            </button>
        );
    }
);