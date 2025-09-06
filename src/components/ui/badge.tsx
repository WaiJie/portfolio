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
    default: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-900/50',
    secondary: 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700',
    outline: 'border border-gray-300 text-gray-700 bg-white dark:border-gray-600 dark:text-gray-300 dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700',
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
