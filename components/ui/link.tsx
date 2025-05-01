import React from 'react';
import { cn } from '@/lib/utils';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ href, children, className, ...props }, ref) => {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      window.location.href = href;
    };

    const isExternal = href.startsWith('http') || href.startsWith('//');

    return (
      <a
        ref={ref}
        href={href}
        onClick={handleClick}
        className={cn(
          'text-primary hover:text-primary/80 transition-colors',
          className
        )}
        {...props}
      >
        {children}
      </a>
    );
  }
);

Link.displayName = 'Link'; 