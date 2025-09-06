import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export function Card({ children, className = '', onMouseEnter, onMouseLeave }: CardProps) {
  return (
    <div 
      className={`bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg transition-all duration-300 backdrop-blur-sm ${className}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </div>
  );
}

interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export function CardHeader({ children, className = '' }: CardHeaderProps) {
  return (
    <div className={`flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700 ${className}`}>
      {children}
    </div>
  );
}

interface CardTitleProps {
  children: React.ReactNode;
  className?: string;
}

export function CardTitle({ children, className = '' }: CardTitleProps) {
  return (
    <h3 className={`text-xl font-semibold text-gray-900 dark:text-white ${className}`}>
      {children}
    </h3>
  );
}

interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

export function CardContent({ children, className = '' }: CardContentProps) {
  return (
    <div className={`p-6 ${className}`}>
      {children}
    </div>
  );
}
