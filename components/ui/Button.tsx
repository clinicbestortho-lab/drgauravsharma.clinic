import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost' | 'gold';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  isExternal?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      href,
      isExternal = false,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] select-none rounded-full min-h-[44px] cursor-pointer text-center';

    const variants = {
      primary:
        'bg-[#0F2744] text-white hover:bg-[#16365D] shadow-sm hover:shadow active:bg-[#081627] focus-visible:outline-[#0F2744]',
      secondary:
        'bg-[#FAF8F4] text-[#0F2744] border border-[#E5DFD5] hover:bg-[#F4EFE6] hover:border-[#D1C7B7] focus-visible:outline-[#0F2744]',
      accent:
        'bg-[#0D7E8A] text-white hover:bg-[#095962] shadow-sm hover:shadow focus-visible:outline-[#0D7E8A]',
      gold:
        'bg-[#C28E38] text-white hover:bg-[#A87625] shadow-sm hover:shadow focus-visible:outline-[#C28E38]',
      outline:
        'border-2 border-[#0F2744] text-[#0F2744] hover:bg-[#0F2744] hover:text-white focus-visible:outline-[#0F2744]',
      ghost:
        'text-[#0F2744] hover:bg-[#0F2744]/5 active:bg-[#0F2744]/10 focus-visible:outline-[#0F2744]',
    };

    const sizes = {
      sm: 'text-sm px-4 py-2 gap-1.5',
      md: 'text-base px-6 py-2.5 gap-2',
      lg: 'text-lg px-8 py-3.5 gap-2.5',
    };

    const combinedClasses = cn(
      baseStyles,
      variants[variant],
      sizes[size],
      disabled && 'opacity-60 pointer-events-none',
      className
    );

    if (href) {
      if (isExternal) {
        return (
          <a
            href={href}
            className={combinedClasses}
            target="_blank"
            rel="noopener noreferrer"
          >
            {children}
          </a>
        );
      }
      return (
        <Link href={href} className={combinedClasses}>
          {children}
        </Link>
      );
    }

    return (
      <button ref={ref} disabled={disabled} className={combinedClasses} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
