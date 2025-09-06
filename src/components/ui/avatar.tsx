import React from 'react';

interface AvatarProps {
  children: React.ReactNode;
  className?: string;
}

export function Avatar({ children, className = '' }: AvatarProps) {
  return (
    <div className={`relative inline-flex items-center justify-center overflow-hidden rounded-full ${className}`}>
      {children}
    </div>
  );
}

interface AvatarImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function AvatarImage({ src, alt, className = '' }: AvatarImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={`h-full w-full object-cover ${className}`}
    />
  );
}

interface AvatarFallbackProps {
  children: React.ReactNode;
  className?: string;
}

export function AvatarFallback({ children, className = '' }: AvatarFallbackProps) {
  return (
    <div className={`flex h-full w-full items-center justify-center bg-gray-100 text-gray-600 ${className}`}>
      {children}
    </div>
  );
}
