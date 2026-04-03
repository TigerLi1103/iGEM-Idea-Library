import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'manual' | 'ai' | 'verified' | 'pending' | 'default';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'default', className }) => {
  const variants = {
    manual: 'bg-blue-100/85 text-blue-700 border-blue-200',
    ai: 'bg-purple-100/85 text-purple-700 border-purple-200 italic',
    verified: 'bg-emerald-100/85 text-emerald-700 border-emerald-200',
    pending: 'bg-amber-100/85 text-amber-700 border-amber-200',
    default: 'bg-slate-100/85 text-slate-700 border-slate-200',
  };

  return (
    <span className={cn(
      'px-2.5 py-1 rounded-full text-[10px] font-semibold border uppercase tracking-[0.12em] inline-flex items-center',
      variants[variant],
      className
    )}>
      {children}
    </span>
  );
};

export const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <div className={cn('igem-surface igem-hairline rounded-3xl overflow-hidden', className)}>
    {children}
  </div>
);

export const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' }> = ({
  children,
  variant = 'primary',
  className,
  ...props
}) => {
  const variants = {
    primary: 'bg-slate-950 text-white hover:bg-black shadow-sm',
    secondary: 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-[0_10px_24px_-16px_rgba(16,152,90,0.75)]',
    outline: 'border border-slate-300/90 bg-white/70 hover:bg-white text-slate-700',
    ghost: 'bg-transparent hover:bg-slate-200/60 text-slate-700',
    danger: 'bg-red-50 text-red-600 hover:bg-red-100 border border-red-100',
  };

  return (
    <button
      className={cn(
        'px-4 py-2 rounded-xl font-medium transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed text-sm',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
