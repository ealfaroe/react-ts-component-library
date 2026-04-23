import { useState, useEffect, ComponentPropsWithoutRef, forwardRef } from 'react';
import './Image.css';

type ImageStatus = 'loading' | 'loaded' | 'error';

export interface ImageProps extends ComponentPropsWithoutRef<'img'> {
    src: string;
    alt: string;
    fallbackSrc?: string;
};

export const ImageComponent = forwardRef<HTMLImageElement, ImageProps>(
    ({
        src,
        style,
        className = '',
        fallbackSrc,
        onLoad,
        onError,
        ...props
    }, ref) => {
        const [status, setStatus] = useState<ImageStatus>('loading');
        const [imageSource, setImageSource] = useState(src);
        const baseClass = `cl__img  ${className}`.trim();

        useEffect(() => {
            setImageSource(src);
            setStatus('loading');
        }, [src]);

        return (
            <img
                {...props}
                ref={ref}
                src={imageSource}
                className={`${baseClass} cl__img--${status}`}
                style={style}
                onLoad={(e) => {
                    setStatus('loaded');
                    onLoad?.(e);
                }}
                onError={(e) => {
                    if (status !== 'error' && fallbackSrc) {
                        setStatus('error');
                        setImageSource(fallbackSrc);
                    } else {
                        setStatus('error');
                        setImageSource('');
                    }
                    onError?.(e);
                }}
            />
        );
    }
);
