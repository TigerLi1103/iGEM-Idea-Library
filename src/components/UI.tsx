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
    manual: 'bg-blue-50 text-blue-700 border-blue-200',
    ai: 'bg-purple-50 text-purple-700 border-purple-200 italic',
    verified: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    pending: 'bg-amber-50 text-amber-700 border-amber-200',
    default: 'bg-slate-50 text-slate-700 border-slate-200',
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
  <div className={cn('igem-surface rounded-3xl overflow-hidden', className)}>
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
    primary: 'bg-[#0F1720] text-white hover:bg-black shadow-sm',
    secondary: 'bg-[#0E7A4B] text-white hover:bg-[#0C6A41] shadow-[0_10px_24px_-16px_rgba(14,122,75,0.7)]',
    outline: 'border border-slate-300 bg-white/80 hover:bg-white text-slate-700',
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
