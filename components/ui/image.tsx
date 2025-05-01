import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  fill?: boolean;
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
}

export const Image = React.forwardRef<HTMLImageElement, ImageProps>(
  ({ src, alt, className, width, height, fill, objectFit = 'cover', ...props }, ref) => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
      const img = new window.Image();
      img.src = src;
      img.onload = () => setIsLoading(false);
      img.onerror = () => setError(true);
    }, [src]);

    const imageClasses = cn(
      'transition-opacity duration-300',
      isLoading ? 'opacity-0' : 'opacity-100',
      fill ? 'w-full h-full' : '',
      className
    );

    const style: React.CSSProperties = {
      objectFit,
      ...(fill ? { position: 'absolute' as const, top: 0, left: 0 } : {}),
    };

    if (error) {
      return (
        <div className={cn('bg-gray-100 flex items-center justify-center', className)}>
          <span className="text-gray-400">图片加载失败</span>
        </div>
      );
    }

    return (
      <img
        ref={ref}
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={imageClasses}
        style={style}
        {...props}
      />
    );
  }
);

Image.displayName = 'Image'; 