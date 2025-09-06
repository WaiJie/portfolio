import React from 'react';

interface TimelineProps {
  children: React.ReactNode;
}

export function Timeline({ children }: TimelineProps) {
  return (
    <div className="relative">
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700"></div>
      <div className="space-y-8">
        {children}
      </div>
    </div>
  );
}

interface TimelineItemProps {
  title: string;
  subtitle: string;
  duration: string;
  description: string;
  icon: React.ReactNode;
}

export function TimelineItem({ title, subtitle, duration, description, icon }: TimelineItemProps) {
  return (
    <div className="relative flex items-start">
      <div className="flex-shrink-0 w-8 h-8 bg-blue-600 dark:bg-blue-500 rounded-full flex items-center justify-center text-white relative z-10">
        {icon}
      </div>
      <div className="ml-6 flex-grow">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h4>
          <span className="text-sm text-gray-500 dark:text-gray-400 mt-1 sm:mt-0">{duration}</span>
        </div>
        <p className="text-base font-medium text-gray-700 dark:text-gray-300 mb-2">{subtitle}</p>
        <p className="text-gray-600 dark:text-gray-400">{description}</p>
      </div>
    </div>
  );
}
