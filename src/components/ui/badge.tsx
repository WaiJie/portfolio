import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'secondary' | 'outline' | 'success' | 'warning' | 'error';
  className?: string;
  onClick?: () => void;
}

export function Badge({ children, variant = 'default', className = '', onClick }: BadgeProps) {
  const baseClasses = 'inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-default';
  
  const variantClasses = {
    default: 'bg-[var(--tag-bg)] text-[var(--tag-text)] hover:bg-[var(--accent-soft)]',
    secondary: 'bg-[var(--bg-soft)] text-[var(--text)] hover:brightness-95',
    outline: 'border border-[var(--card-border)] text-[var(--text)] bg-transparent hover:bg-[var(--card-bg)]',
    success: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 hover:bg-green-200 dark:hover:bg-green-900/50',
    warning: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300 hover:bg-yellow-200 dark:hover:bg-yellow-900/50',
    error: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300 hover:bg-red-200 dark:hover:bg-red-900/50'
  };

  const clickableClasses = onClick ? 'cursor-pointer hover:scale-105 active:scale-95' : '';

  return (
    <span 
      className={`${baseClasses} ${variantClasses[variant]} ${clickableClasses} ${className}`}
      onClick={onClick}
    >
      {children}
    </span>
  );
}
