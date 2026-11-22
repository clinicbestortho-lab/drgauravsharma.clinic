import React from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'navy' | 'teal' | 'gold' | 'green' | 'outline' | 'muted';
  size?: 'sm' | 'md';
}

export function Badge({
  className,
  variant = 'navy',
  size = 'md',
  children,
  ...props
}: BadgeProps) {
  const variants = {
    navy: 'bg-[#0F2744]/10 text-[#0F2744] border-[#0F2744]/20',
    teal: 'bg-[#0D7E8A]/10 text-[#095962] border-[#0D7E8A]/25',
    gold: 'bg-[#FBF4E7] text-[#9A6D1F] border-[#EAD8B5]',
    green: 'bg-[#ECFDF5] text-[#065F46] border-[#A7F3D0]',
    outline: 'bg-transparent text-[#566474] border-[#D1C7B7]',
    muted: 'bg-[#F4EFE6] text-[#566474] border-transparent',
  };

  const sizes = {
    sm: 'text-xs px-2.5 py-0.5 font-medium',
    md: 'text-sm px-3.5 py-1 font-semibold',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border tracking-wide select-none',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
